"use client";

import type { MouseEvent } from "react";
import { useRouter } from "next/navigation";

/**
 * Click-anywhere-on-a-row navigation. Rows must also contain a real link
 * (keyboard, new tab, screen readers); this is the mouse convenience.
 * Returns a handler: `onClick={(e) => openRow(e, href)}`.
 */
export function useRowNavigation() {
  const router = useRouter();

  return (event: MouseEvent, href: string) => {
    // The link handles its own click; don't navigate twice.
    if ((event.target as HTMLElement).closest("a")) return;
    // Ending a text selection (copying an IP or MAC) is not a click.
    if (window.getSelection()?.toString()) return;
    router.push(href);
  };
}
