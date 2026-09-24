import { DEFAULT_THEME, THEME_STORAGE_KEY } from "@indurex/ui/theme/theme";

const script = `(function(){try{var t=localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)})||${JSON.stringify(DEFAULT_THEME)};var r=document.documentElement;r.classList.toggle("dark",t==="dark");r.style.colorScheme=t}catch(e){}})()`;

/**
 * Put in <head>. Applies the saved theme before the first paint, so there is
 * no flash and no hydration mismatch. Pair it with `<html className="dark"
 * suppressHydrationWarning>` (dark is the server-rendered default).
 */
export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
