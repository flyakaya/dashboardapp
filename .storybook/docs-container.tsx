import { useSyncExternalStore, type PropsWithChildren } from "react";
import {
  DocsContainer,
  type DocsContainerProps,
} from "@storybook/addon-docs/blocks";

import {
  getDocumentTheme,
  subscribeToDocumentTheme,
} from "@indurex/ui/theme/theme";

import { darkTheme, lightTheme } from "./theme";

// The theme addon toggles `.dark` on <html>; docs chrome follows that class
// so autodocs pages match the stories rendered inside them.

export function ThemedDocsContainer(
  props: PropsWithChildren<DocsContainerProps>,
) {
  const theme = useSyncExternalStore(
    subscribeToDocumentTheme,
    getDocumentTheme,
    () => "dark" as const,
  );
  return (
    <DocsContainer
      {...props}
      theme={theme === "dark" ? darkTheme : lightTheme}
    />
  );
}
