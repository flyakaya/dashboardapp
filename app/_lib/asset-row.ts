// Row type and search for the inventory. No data imports on purpose: this
// module is used by client code, and importing the dataset here would ship
// it to the browser. Rows are built on the server (./assets.ts).

import type { AssetStatus, Criticality } from "@/app/assignment/types";

/** "never-reported" replaces the status field when the asset has no lastSeen. */
export type AssetRowStatus = AssetStatus | "never-reported";

/**
 * One inventory row: only what the table shows, sorts, filters or searches.
 * Missing data stays `undefined` (never 0 or "unknown"), so the UI can say
 * "Not scored" / "Not rated" and sorting can put those rows last.
 */
export type AssetRow = {
  assetId: string;
  name: string;
  type: string;
  /** Process-area code from the zone label, e.g. "CDU". */
  zone: string;
  zoneName: string;
  /** Purdue level label; "L3.5" is the IT/OT DMZ. */
  level: string;
  ip: string;
  /** Interfaces beyond the first, shown as "+1". */
  extraInterfaces: number;
  status: AssetRowStatus;
  criticality?: Criticality;
  score?: number;
  vulnCount: number;
  kevCount: number;
  /** ISO timestamp, for sorting. */
  lastSeen?: string;
  /** `lastSeen` formatted in the site's timezone, for display. */
  lastSeenLabel?: string;
  /** Ids of failed checks (e.g. "4.2"), for the dashboard's `?check=` link. */
  failedCheckIds: string[];
  /** Lowercased haystack for the global search. */
  searchText: string;
};

/** An asset that has never reported shows that instead of its status field. */
export function deriveStatus(asset: {
  status: AssetStatus;
  lastSeen: string | null;
}): AssetRowStatus {
  return asset.lastSeen === null ? "never-reported" : asset.status;
}

/** Purdue level label: 3.5 → "L3.5" (the IT/OT DMZ). */
export function levelLabel(purdueLevel: number) {
  return `L${purdueLevel}`;
}

/** Case-insensitive substring match; a blank query matches everything. */
export function matchesSearch(row: AssetRow, query: string) {
  const q = query.trim().toLowerCase();
  return q === "" || row.searchText.includes(q);
}
