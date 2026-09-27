// Links between the inventory and asset detail. The inventory's current view
// (search, filters, sort, page) travels as `?from=` so "Back to inventory"
// restores it, even after a reload or in a new tab.

const INVENTORY = "/assets";

/** Detail link that remembers the inventory view it was opened from. */
export function assetHref(assetId: string, inventorySearch = "") {
  const from = new URLSearchParams(inventorySearch).toString();
  const path = `${INVENTORY}/${encodeURIComponent(assetId)}`;
  return from ? `${path}?from=${encodeURIComponent(from)}` : path;
}

/**
 * The inventory view to return to. `from` is re-parsed as a query string, so
 * it can only ever produce `/assets?…` (never another path or site).
 */
export function inventoryHref(from?: string | string[]) {
  const query = typeof from === "string" ? new URLSearchParams(from) : null;
  const search = query?.toString();
  return search ? `${INVENTORY}?${search}` : INVENTORY;
}
