#!/usr/bin/env node
// Generates ui/styles/tokens.css from ui/tokens/tokens.json (the single source of truth).
// Output follows the standard shadcn/ui + Tailwind v4 pattern:
//   :root → light values, .dark → dark values, @theme inline → utility mapping.
// `.light` repeats the light values so a light region can sit inside a dark page
// (theme previews). Aliases are declared on every theme scope so they resolve
// against that scope's values instead of inheriting :root's computed value.
// Usage: npm run tokens

import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

export const SPEC_PATH = fileURLToPath(
  new URL("../ui/tokens/tokens.json", import.meta.url),
);
export const OUT_PATH = fileURLToPath(
  new URL("../ui/styles/tokens.css", import.meta.url),
);

/** "gray.25" → "#F7F8FA" */
function resolve(spec, ref) {
  const [ramp, step] = ref.split(".");
  const value = spec.primitives[ramp]?.[step];
  if (!value) throw new Error(`Unknown primitive reference "${ref}"`);
  return value;
}

function modeBlock(spec, selector, mode) {
  const values = Object.entries(spec.color).map(
    ([name, t]) => `  --${name}: ${resolve(spec, t[mode])}; /* ${t[mode]} */`,
  );
  const head = selector.startsWith(":root")
    ? [`  --radius: ${spec.radius};`, ""]
    : [];
  return [`${selector} {`, ...head, ...values, "}"].join("\n");
}

function aliasBlock(spec) {
  for (const target of Object.values(spec.alias)) {
    if (!spec.color[target])
      throw new Error(`Alias target "${target}" is not a color token`);
  }
  const lines = Object.entries(spec.alias).map(
    ([name, target]) => `  --${name}: var(--${target});`,
  );
  return [
    ":root,\n.light,\n.dark {",
    "  /* shadcn names that reuse a core token (not separate design decisions) */",
    ...lines,
    "}",
  ].join("\n");
}

function themeBlock(spec) {
  const names = [...Object.keys(spec.color), ...Object.keys(spec.alias)];
  const text = Object.entries(spec.text).flatMap(([k, t]) => [
    `  --text-${k}: ${t.size};`,
    `  --text-${k}--line-height: ${t.lineHeight};`,
    ...(t.weight ? [`  --text-${k}--font-weight: ${t.weight};`] : []),
    ...(t.tracking ? [`  --text-${k}--letter-spacing: ${t.tracking};`] : []),
  ]);
  return [
    "@theme inline {",
    ...names.map((n) => `  --color-${n}: var(--${n});`),
    "",
    "  --radius-sm: calc(var(--radius) - 4px);",
    "  --radius-md: calc(var(--radius) - 2px);",
    "  --radius-lg: var(--radius);",
    "  --radius-xl: calc(var(--radius) + 4px);",
    "",
    ...text,
    "",
    ...Object.entries(spec.shadow).map(([k, v]) => `  --shadow-${k}: ${v};`),
    "}",
  ].join("\n");
}

export function buildTokensCss(spec) {
  return [
    "/* GENERATED from ui/tokens/tokens.json by scripts/build-tokens.mjs — do not edit by hand. */",
    "/* Run `npm run tokens` after changing the spec. */",
    "",
    modeBlock(spec, ":root,\n.light", "light"),
    "",
    modeBlock(spec, ".dark", "dark"),
    "",
    aliasBlock(spec),
    "",
    themeBlock(spec),
    "",
  ].join("\n");
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const spec = JSON.parse(readFileSync(SPEC_PATH, "utf8"));
  writeFileSync(OUT_PATH, buildTokensCss(spec));
  console.log(
    `tokens.css written: ${Object.keys(spec.color).length} color tokens (+${Object.keys(spec.alias).length} aliases), ${Object.keys(spec.text).length} text sizes`,
  );
}
