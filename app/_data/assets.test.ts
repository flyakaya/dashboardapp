import { describe, expect, it } from "vitest";

import { matchesSearch } from "./asset-row";
import { getAssetDetail } from "./asset-detail";
import { getAssetRows } from "./assets";
import { getSiteResilience } from "./resilience";

const rows = getAssetRows();
const search = (q: string) =>
  rows.filter((r) => matchesSearch(r, q)).map((r) => r.name);

describe("getAssetRows", () => {
  it("keeps missing data distinct instead of inventing values", () => {
    const jumpHost = rows.find((r) => r.name === "CTL-JMP-01");
    expect(jumpHost?.status).toBe("never-reported");
    expect(jumpHost?.score).toBeUndefined();

    expect(rows.filter((r) => r.score === undefined)).toHaveLength(32);
    expect(rows.filter((r) => r.criticality === undefined)).toHaveLength(12);
  });

  it("joins vulnerabilities and derives zone and level labels", () => {
    const sis = rows.find((r) => r.name === "FCC-SIS-01");
    expect(sis).toMatchObject({
      zone: "FCC",
      level: "L1",
      vulnCount: 2,
      kevCount: 0,
    });
    expect(rows.find((r) => r.name === "CTL-FW-01")?.level).toBe("L3.5");
  });
});

describe("matchesSearch", () => {
  it("finds assets by partial IP", () => {
    expect(search("10.11.10")).toHaveLength(6);
  });

  it("finds assets by a linked CVE that is not a column", () => {
    expect(search("cve-2021-22681").sort()).toEqual([
      "CDU-PLC-01",
      "CDU-PLC-02",
      "FCC-VFD-01",
    ]);
  });

  it("finds assets by MAC and matches everything on an empty query", () => {
    expect(search("00:1B:1B:F1:1D:DB")).toEqual(["FCC-SIS-01"]);
    expect(search("   ")).toHaveLength(rows.length);
  });
});

describe("getAssetDetail", () => {
  it("orders evidence: critical CVEs first, lowest-scoring controls first", () => {
    const sis = getAssetDetail("AST-0015");
    expect(sis?.vulnerabilities.map((v) => [v.cveId, v.severity])).toEqual([
      ["CVE-2022-38465", "critical"],
      ["CVE-2020-15782", "high"],
    ]);
    expect(sis?.vulnerabilities[0]?.otherAssetCount).toBe(2);

    const resilience = sis?.resilience;
    expect(resilience?.controls).toHaveLength(16);
    expect(resilience?.failedCheckCount).toBe(18);
    expect(resilience?.controls[0]).toMatchObject({
      controlId: "CIS-2",
      score: 0,
    });
    expect(resilience?.notEvaluated).toEqual([
      "CIS-9 Email and web browser protections",
      "CIS-10 Malware defenses",
    ]);
  });

  it("says what is missing instead of inventing it", () => {
    const jumpHost = getAssetDetail("AST-0074");
    expect(jumpHost?.status).toBe("never-reported");
    expect(jumpHost?.resilience).toBeUndefined();
    expect(jumpHost?.kevCount).toBe(1);
    expect(
      jumpHost?.vulnerabilities.find((v) => v.cveId === "CVE-2014-0160"),
    ).toMatchObject({ cvss: 5, cvssVersion: "v2" });

    expect(getAssetDetail("AST-9999")).toBeUndefined();
  });
});

describe("getSiteResilience", () => {
  const site = getSiteResilience();

  it("averages only scored assets and states coverage", () => {
    expect(Math.round(site.averageScore ?? 0)).toBe(67);
    expect(site.scoredCount).toBe(48);
    expect(site.assetCount).toBe(80);
  });

  it("ranks controls lowest average first", () => {
    expect(site.controls).toHaveLength(18);
    const shown = site.controls.map((c) => Math.round(c.averageScore));
    expect(shown).toEqual([...shown].sort((a, b) => a - b));
    // Equal shown scores keep CIS order: CIS-1 before CIS-11 (both 61).
    const ids = site.controls.map((c) => c.controlId);
    expect(ids.indexOf("CIS-1")).toBeLessThan(ids.indexOf("CIS-11"));
    expect(site.controls[0]).toMatchObject({
      controlId: "CIS-10",
      evaluatedCount: 14,
    });
    expect(Math.round(site.controls[0]?.averageScore ?? 0)).toBe(57);
  });

  it("counts failing checks per asset, matching the inventory link", () => {
    const cis4 = site.controls.find((c) => c.controlId === "CIS-4");
    expect(cis4?.failedHighCount).toBe(39);
    expect(cis4?.failingChecks.find((c) => c.id === "4.2")?.assetCount).toBe(
      17,
    );
    expect(rows.filter((r) => r.failedCheckIds.includes("4.2"))).toHaveLength(
      17,
    );
  });
});
