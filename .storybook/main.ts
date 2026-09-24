import { fileURLToPath } from "node:url";
import type { StorybookConfig } from "@storybook/react-vite";
import tailwindcss from "@tailwindcss/vite";
import { mergeConfig } from "vite";

const r = (p: string) => fileURLToPath(new URL(p, import.meta.url));

// Storybook runs the library on plain Vite (no Next.js), which proves that
// @indurex/ui has no framework dependency.
const config: StorybookConfig = {
  framework: "@storybook/react-vite",
  stories: ["../ui/**/*.stories.@(ts|tsx)"],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-themes",
  ],
  viteFinal: (vite) =>
    mergeConfig(vite, {
      plugins: [tailwindcss()],
      resolve: {
        alias: [
          { find: /^@indurex\/ui$/, replacement: r("../ui/index.ts") },
          { find: /^@indurex\/ui\/(.*)$/, replacement: r("../ui/$1") },
        ],
      },
    }),
};

export default config;
