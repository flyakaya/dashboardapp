"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "lucide-react";

import { Button } from "@indurex/ui/components/button";
import {
  applyTheme,
  DEFAULT_THEME,
  getDocumentTheme,
  subscribeToDocumentTheme,
} from "@indurex/ui/theme/theme";

/** Current theme, read from <html> (set by ThemeScript before hydration). */
export function useTheme() {
  const theme = React.useSyncExternalStore(
    subscribeToDocumentTheme,
    getDocumentTheme,
    () => DEFAULT_THEME,
  );
  return { theme, setTheme: applyTheme };
}

/** Icon button that switches between the dark (default) and light theme. */
export function ThemeToggle(
  props: Omit<React.ComponentProps<typeof Button>, "onClick" | "children">,
) {
  const { theme, setTheme } = useTheme();
  const next = theme === "dark" ? "light" : "dark";
  return (
    <Button
      variant="outline"
      size="icon"
      aria-label={`Switch to ${next} theme`}
      onClick={() => setTheme(next)}
      {...props}
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
}
