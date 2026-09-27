import { describe, expect, it } from "vitest";

import { assetHref, inventoryBackHref, inventoryHref } from "./routes";

describe("inventory ↔ detail links", () => {
  it("round-trips the inventory view", () => {
    const href = assetHref("AST-0015", "?level=L1&zone=CDU&zone=FCC&page=2");
    expect(href).toBe(
      "/assets/AST-0015?from=level%3DL1%26zone%3DCDU%26zone%3DFCC%26page%3D2",
    );
    const from = new URL(href, "http://x").searchParams.get("from") ?? "";
    expect(inventoryBackHref(from)).toBe(
      "/assets?level=L1&zone=CDU&zone=FCC&page=2",
    );
  });

  it("omits `from` for a clean inventory", () => {
    expect(assetHref("AST-0015", "")).toBe("/assets/AST-0015");
    expect(inventoryBackHref(undefined)).toBe("/assets");
  });

  it("can only return to the inventory", () => {
    expect(inventoryBackHref("//evil.example/path")).toBe(
      "/assets?%2F%2Fevil.example%2Fpath=",
    );
    expect(inventoryBackHref(["a=1", "b=2"])).toBe("/assets");
  });

  it("builds pre-filtered inventory links", () => {
    expect(inventoryHref()).toBe("/assets");
    expect(inventoryHref({ check: "4.2" })).toBe("/assets?check=4.2");
    expect(inventoryHref({ q: "CVE-2021-1675" })).toBe(
      "/assets?q=CVE-2021-1675",
    );
  });
});
