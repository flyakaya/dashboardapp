import "server-only";

// Data access for assets: the only module that reads the raw dataset.
// Server-only (the build fails if a client file imports it); client code
// receives ready rows as props and uses ./asset-row for types and search.

import { ASSETS, SITE } from "@/app/assignment/assets";
import type { Asset } from "@/app/assignment/types";
import { VULNERABILITIES } from "@/app/assignment/vulnerabilities";

import type { AssetRow } from "./asset-row";

const vulnerabilitiesById = new Map(
  VULNERABILITIES.map((v) => [v.vulnerabilityId, v]),
);

const lastSeenFormat = new Intl.DateTimeFormat("en-GB", {
  day: "2-digit",
  month: "short",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  timeZone: SITE.timezone,
});

/** "Crude distillation unit (CDU)" → "CDU"; falls back to the full label. */
function zoneCode(zone: string) {
  return /\(([^)]+)\)\s*$/.exec(zone)?.[1] ?? zone;
}

/** Joins one asset with its vulnerabilities into a flat, serializable row. */
function toAssetRow(asset: Asset): AssetRow {
  const vulns = asset.vulnerabilityIds.flatMap((id) => {
    const v = vulnerabilitiesById.get(id);
    return v ? [v] : [];
  });

  const searchText = [
    asset.name,
    asset.assetId,
    asset.vendor,
    asset.model,
    asset.type,
    asset.zone,
    asset.operatingSystem,
    asset.firmwareVersion,
    ...asset.interfaces.flatMap((i) => [i.ip, i.mac]),
    ...asset.protocols,
    ...vulns.map((v) => v.cveId),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  return {
    assetId: asset.assetId,
    name: asset.name,
    type: asset.type,
    zone: zoneCode(asset.zone),
    zoneName: asset.zone,
    level: `L${asset.purdueLevel}`,
    ip: asset.interfaces[0]?.ip ?? "",
    extraInterfaces: Math.max(asset.interfaces.length - 1, 0),
    status: asset.lastSeen === null ? "never-reported" : asset.status,
    criticality: asset.criticality,
    score: asset.resilienceScore,
    vulnCount: vulns.length,
    kevCount: vulns.filter((v) => v.isKev).length,
    lastSeen: asset.lastSeen ?? undefined,
    lastSeenLabel: asset.lastSeen
      ? lastSeenFormat.format(new Date(asset.lastSeen))
      : undefined,
    searchText,
  };
}

// Static data: build once per server process, on first use.
let assetRows: AssetRow[] | undefined;

/** Every asset as an inventory row. */
export function getAssetRows(): AssetRow[] {
  assetRows ??= ASSETS.map(toAssetRow);
  return assetRows;
}

/** One asset by id, or undefined for an unknown id. */
export function getAsset(assetId: string): Asset | undefined {
  return ASSETS.find((a) => a.assetId === assetId);
}

export function getAssetCount() {
  return ASSETS.length;
}
