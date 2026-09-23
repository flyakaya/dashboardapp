/** @type {import("prettier").Config} */
const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  // Tailwind v4 has no JS config; the plugin reads the theme from the CSS entry.
  tailwindStylesheet: "./app/globals.css",
  // Sort classes inside these helpers too (shadcn/ui conventions).
  tailwindFunctions: ["cn", "cva", "clsx"],
};

export default config;
