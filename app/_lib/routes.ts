// Every app URL is built here, so a renamed route or URL key breaks in one
// place (and in routes.test.ts), not silently across the app.

export const ROUTES = { dashboard: "/", inventory: "/assets" } as const;

/** Inventory URL keys a link may set; they match the inventory's filters. */
type InventoryParams = {
  /** Global search, e.g. a CVE id. */
  q?: string;
  /** A failed check id, e.g. "4.2" (the dashboard's drill-down). */
  check?: string;
};

/** Link into the inventory, optionally pre-filtered. */
export function inventoryHref(params: InventoryParams = {}) {
  const search = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value) search.set(key, value);
  }
  const query = search.toString();
  return query ? `${ROUTES.inventory}?${query}` : ROUTES.inventory;
}

/**
 * Detail link that remembers the inventory view it was opened from, so
 * "Back to inventory" restores it (even after a reload or in a new tab).
 */
export function assetHref(assetId: string, inventorySearch = "") {
  const from = new URLSearchParams(inventorySearch).toString();
  const path = `${ROUTES.inventory}/${encodeURIComponent(assetId)}`;
  return from ? `${path}?from=${encodeURIComponent(from)}` : path;
}

/**
 * The inventory view to return to. `from` is re-parsed as a query string, so
 * it can only ever produce `/assets?…` (never another path or site).
 */
export function inventoryBackHref(from?: string | string[]) {
  const query = typeof from === "string" ? new URLSearchParams(from) : null;
  const search = query?.toString();
  return search ? `${ROUTES.inventory}?${search}` : ROUTES.inventory;
}
