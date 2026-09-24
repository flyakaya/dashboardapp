export type Theme = "dark" | "light";

export const THEME_STORAGE_KEY = "indurex-theme";
export const DEFAULT_THEME: Theme = "dark";

/** The theme currently applied to <html> (the `.dark` class). */
export function getDocumentTheme(): Theme {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

/**
 * Calls `onChange` whenever the theme class on <html> changes — whoever changed it
 * (ThemeToggle, ThemeScript, Storybook's theme addon). For `useSyncExternalStore`.
 */
export function subscribeToDocumentTheme(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
}

/** Applies a theme to <html>: the `.dark` class drives tokens.css and `dark:` variants. */
export function applyTheme(theme: Theme) {
  const root = document.documentElement;
  // Switch instantly: without this every `transition-colors` element animates.
  const style = document.createElement("style");
  style.textContent = "*,*::before,*::after{transition:none!important}";
  document.head.appendChild(style);
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
  void getComputedStyle(root).colorScheme; // force a style flush before re-enabling
  // setTimeout, not requestAnimationFrame: rAF never fires in a background tab,
  // which would leave transitions disabled until the tab is shown.
  setTimeout(() => style.remove(), 1);
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Storage can be unavailable (private mode); the theme still applies for this page.
  }
}
