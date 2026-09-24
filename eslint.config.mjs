import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import storybook from "eslint-plugin-storybook";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  ...storybook.configs["flat/recommended"],

  // UI library boundary: `ui/` is a standalone package-in-waiting (@indurex/ui).
  // It must not depend on the Next.js app, its data, or Next itself.
  {
    files: ["ui/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          paths: [
            {
              name: "@indurex/ui",
              message:
                "Inside the library, import the module directly (@indurex/ui/...) to avoid barrel cycles.",
            },
          ],
          patterns: [
            {
              group: ["@/*"],
              message:
                "ui/ must not import app code. It will be published as its own package.",
            },
            {
              group: ["next", "next/*"],
              message:
                "ui/ must stay framework-agnostic (it runs in Storybook/Vite too).",
            },
          ],
        },
      ],
    },
  },

  // App side: consume the library only through its public entry point.
  {
    files: ["app/**/*.{ts,tsx}", "lib/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["@indurex/ui/*", "!@indurex/ui/styles/*"],
              message:
                'Import from the public API: `import { … } from "@indurex/ui"`.',
            },
            {
              group: ["**/ui/*"],
              message:
                'Import from the public API: `import { … } from "@indurex/ui"`.',
            },
          ],
        },
      ],
    },
  },

  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "storybook-static/**",
  ]),
]);

export default eslintConfig;
