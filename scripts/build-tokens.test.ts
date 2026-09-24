import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

import { buildTokensCss, OUT_PATH, SPEC_PATH } from "./build-tokens.mjs";

const spec = JSON.parse(readFileSync(SPEC_PATH, "utf8"));

describe("tokens.css", () => {
  it("is up to date with tokens.json (run `npm run tokens`)", () => {
    expect(readFileSync(OUT_PATH, "utf8")).toBe(buildTokensCss(spec));
  });

  it("rejects an unknown primitive reference", () => {
    const broken = structuredClone(spec);
    broken.color.background.dark = "gray.9999";
    expect(() => buildTokensCss(broken)).toThrow(/gray\.9999/);
  });

  it("rejects an alias that points at a missing token", () => {
    const broken = structuredClone(spec);
    broken.alias.sidebar = "does-not-exist";
    expect(() => buildTokensCss(broken)).toThrow(/does-not-exist/);
  });
});
