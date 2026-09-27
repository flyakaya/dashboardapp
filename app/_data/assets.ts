import "server-only";

// Data access for assets: the only module that reads the raw dataset.
// Server-only (the build fails if a client file imports it); client code
// receives ready rows as props and uses ./asset-row for types and search.

import { ASSETS } from "@/app/assignment/assets";
import type { Asset } from "@/app/assignment/types";

import { deriveStatus, levelLabel, type AssetRow } from "./asset-row";
import { formatDateTime } from "./format";
import { getFailedCheckIds } from "./resilience";
import { getVulnerabilitiesFor } from "./vulnerabilities";

/** "Crude distillation unit (CDU)" → "CDU"; falls back to the full label. */
function zoneCode(zone: string) {
  return /\(([^)]+)\)\s*$/.exec(zone)?.[1] ?? zone;
}

/** Joins one asset with its vulnerabilities into a flat, serializable row. */
function toAssetRow(asset: Asset): AssetRow {
  const vulns = getVulnerabilitiesFor(asset);

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
    level: levelLabel(asset.purdueLevel),
    ip: asset.interfaces[0]?.ip ?? "",
    extraInterfaces: Math.max(asset.interfaces.length - 1, 0),
    status: deriveStatus(asset),
    criticality: asset.criticality,
    score: asset.resilienceScore,
    vulnCount: vulns.length,
    kevCount: vulns.filter((v) => v.isKev).length,
    lastSeen: asset.lastSeen ?? undefined,
    lastSeenLabel: asset.lastSeen ? formatDateTime(asset.lastSeen) : undefined,
    failedCheckIds: getFailedCheckIds(asset.assetId),
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

export function getAssetCount() {
  return ASSETS.length;
}
