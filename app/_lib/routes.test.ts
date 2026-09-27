import { describe, expect, it } from "vitest";

import { assetHref, inventoryHref } from "./routes";

describe("inventory ↔ detail links", () => {
  it("round-trips the inventory view", () => {
    const href = assetHref("AST-0015", "?level=L1&zone=CDU&zone=FCC&page=2");
    expect(href).toBe(
      "/assets/AST-0015?from=level%3DL1%26zone%3DCDU%26zone%3DFCC%26page%3D2",
    );
    const from = new URL(href, "http://x").searchParams.get("from") ?? "";
    expect(inventoryHref(from)).toBe(
      "/assets?level=L1&zone=CDU&zone=FCC&page=2",
    );
  });

  it("omits `from` for a clean inventory", () => {
    expect(assetHref("AST-0015", "")).toBe("/assets/AST-0015");
    expect(inventoryHref(undefined)).toBe("/assets");
  });

  it("can only return to the inventory", () => {
    expect(inventoryHref("//evil.example/path")).toBe(
      "/assets?%2F%2Fevil.example%2Fpath=",
    );
    expect(inventoryHref(["a=1", "b=2"])).toBe("/assets");
  });
});
