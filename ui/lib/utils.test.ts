import { describe, expect, it } from "vitest";

import { cn } from "./utils";

describe("cn", () => {
  it("keeps custom font sizes next to text colours", () => {
    expect(cn("text-body-sm", "text-foreground")).toBe(
      "text-body-sm text-foreground",
    );
    expect(cn("text-label", "text-muted-foreground")).toBe(
      "text-label text-muted-foreground",
    );
  });

  it("treats custom font sizes as font sizes", () => {
    expect(cn("text-sm", "text-body-sm")).toBe("text-body-sm");
  });

  it("still merges conflicts and handles conditionals", () => {
    expect(cn("px-2", "px-4")).toBe("px-4");
    expect(cn("a", false && "b", { c: true })).toBe("a c");
  });
});
