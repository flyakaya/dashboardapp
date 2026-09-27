import "server-only";

import type { Asset } from "@/app/assignment/types";
import { VULNERABILITIES } from "@/app/assignment/vulnerabilities";

const byId = new Map(VULNERABILITIES.map((v) => [v.vulnerabilityId, v]));

/** The vulnerabilities linked to an asset, skipping unknown ids. */
export function getVulnerabilitiesFor(asset: Pick<Asset, "vulnerabilityIds">) {
  return asset.vulnerabilityIds.flatMap((id) => {
    const v = byId.get(id);
    return v ? [v] : [];
  });
}
