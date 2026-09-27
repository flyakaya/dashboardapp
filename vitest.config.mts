import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

const r = (p: string) => fileURLToPath(new URL(p, import.meta.url));

export default defineConfig({
  resolve: {
    alias: [
      { find: /^@indurex\/ui$/, replacement: r("./ui/index.ts") },
      { find: /^@indurex\/ui\/(.*)$/, replacement: r("./ui/$1") },
      { find: /^@\/(.*)$/, replacement: r("./$1") },
      // Next.js resolves `server-only` for server code; tests run in plain node.
      {
        find: /^server-only$/,
        replacement: r("./node_modules/server-only/empty.js"),
      },
    ],
  },
  test: {
    environment: "node",
    include: ["**/*.test.ts"],
    exclude: ["node_modules/**", ".next/**", "storybook-static/**"],
  },
});
