import "@fontsource-variable/geist";
import "@fontsource-variable/geist-mono";
import "./storybook.css";

import type { Preview } from "@storybook/react-vite";
import { withThemeByClassName } from "@storybook/addon-themes";

import { TooltipProvider } from "@indurex/ui/components/tooltip";

import { ThemedDocsContainer } from "./docs-container";

const preview: Preview = {
  decorators: [
    // Same strategy as the app (ThemeScript / ThemeToggle): `.dark` on <html>.
    withThemeByClassName({
      themes: { light: "", dark: "dark" },
      defaultTheme: "dark",
      parentSelector: "html",
    }),
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
  parameters: {
    layout: "centered",
    controls: { expanded: true },
    // The theme decorator paints the canvas via bg-background on <body>.
    backgrounds: { disable: true },
    a11y: { test: "error" },
    // Autodocs pages follow the toolbar theme (see docs-container.tsx).
    docs: { container: ThemedDocsContainer },
    options: {
      storySort: {
        order: ["Foundations", ["Colors", "Theming"], "Components"],
      },
    },
  },
  tags: ["autodocs"],
};

export default preview;
