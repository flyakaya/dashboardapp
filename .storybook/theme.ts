import { create } from "storybook/theming/create";

import tokens from "../ui/tokens/tokens.json";

// Storybook's own chrome, painted with the same tokens as the library.
const p = tokens.primitives;
const brand = {
  brandTitle: "Indurex UI",
  fontBase: '"Geist Variable", ui-sans-serif, system-ui, sans-serif',
  fontCode: '"Geist Mono Variable", ui-monospace, monospace',
  appBorderRadius: 8,
};

export const darkTheme = create({
  base: "dark",
  ...brand,
  colorPrimary: p.blue["400"],
  colorSecondary: p.blue["400"],
  appBg: p.gray["950"],
  appContentBg: p.gray["1000"],
  appPreviewBg: p.gray["1000"],
  appBorderColor: p.gray["800"],
  textColor: p.gray["100"],
  textMutedColor: p.gray["400"],
  barBg: p.gray["950"],
  barTextColor: p.gray["400"],
  barSelectedColor: p.blue["400"],
  inputBg: p.gray["950"],
  inputBorder: p.gray["500"],
});

export const lightTheme = create({
  base: "light",
  ...brand,
  colorPrimary: p.blue["600"],
  colorSecondary: p.blue["600"],
  appBg: p.gray["0"],
  appContentBg: p.gray["25"],
  appPreviewBg: p.gray["25"],
  appBorderColor: p.gray["200"],
  textColor: p.gray["950"],
  textMutedColor: p.gray["600"],
  barBg: p.gray["0"],
  barTextColor: p.gray["600"],
  barSelectedColor: p.blue["600"],
  inputBg: p.gray["0"],
  inputBorder: p.gray["500"],
});
