import { describe, expect, it } from "vitest";

import { matchesSearch } from "./asset-row";
import { getAssetRows } from "./assets";

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
