import "server-only";

import { ASSETS } from "@/app/assignment/assets";
import {
  ASSET_RESILIENCE,
  SECURITY_CONTROLS,
} from "@/app/assignment/security-controls";
import type { ControlSeverity } from "@/app/assignment/types";

// Resilience data: per-asset indices and the site-level view built from them.
// Every number is a plain count or mean of the data; nothing is weighted or
// imputed (the `weight` field has no documented formula).

const indexByAsset = new Map(ASSET_RESILIENCE.map((r) => [r.assetId, r]));

/** One asset's resilience index, or undefined if it has not been assessed. */
export function getResilienceIndex(assetId: string) {
  return indexByAsset.get(assetId);
}

/** Ids of the checks an asset failed, e.g. ["1.1", "4.2"]. */
export function getFailedCheckIds(assetId: string) {
  return (
    getResilienceIndex(assetId)?.controlResults.flatMap((c) =>
      c.subControls.filter((s) => s.status === "failed").map((s) => s.id),
    ) ?? []
  );
}

export const SEVERITY_RANK: Record<ControlSeverity, number> = {
  high: 0,
  medium: 1,
  low: 2,
};

export type FailingCheck = {
  id: string;
  title: string;
  severity: ControlSeverity;
  /** Assets on which this check failed. */
  assetCount: number;
};

export type ControlSummary = {
  controlId: string;
  name: string;
  /** Mean score across the assets this control was evaluated on. */
  averageScore: number;
  evaluatedCount: number;
  failedHighCount: number;
  failingChecks: FailingCheck[];
};

export type SiteResilience = {
  /** Mean of the scored assets' overall scores; undefined if none is scored. */
  averageScore?: number;
  scoredCount: number;
  assetCount: number;
  controls: ControlSummary[];
};

/** Plain mean; undefined for no values (never a made-up 0). */
function mean(values: number[]) {
  return values.length
    ? values.reduce((sum, v) => sum + v, 0) / values.length
    : undefined;
}

const catalogOrder = new Map(SECURITY_CONTROLS.map((c, i) => [c.controlId, i]));

/** Undefined when no asset was evaluated on this control. */
function summarize(
  controlId: string,
  name: string,
): ControlSummary | undefined {
  const results = ASSET_RESILIENCE.flatMap((r) =>
    r.controlResults.filter((c) => c.controlId === controlId),
  );
  const averageScore = mean(results.map((r) => r.score));
  if (averageScore === undefined) return undefined;
  const failing = new Map<string, FailingCheck>();
  for (const check of results.flatMap((r) => r.subControls)) {
    if (check.status !== "failed") continue;
    const entry = failing.get(check.id) ?? {
      id: check.id,
      title: check.title,
      severity: check.severity,
      assetCount: 0,
    };
    entry.assetCount += 1;
    failing.set(check.id, entry);
  }
  const failingChecks = [...failing.values()].sort(
    (a, b) =>
      SEVERITY_RANK[a.severity] - SEVERITY_RANK[b.severity] ||
      b.assetCount - a.assetCount,
  );
  return {
    controlId,
    name,
    averageScore,
    evaluatedCount: results.length,
    failedHighCount: failingChecks
      .filter((c) => c.severity === "high")
      .reduce((n, c) => n + c.assetCount, 0),
    failingChecks,
  };
}

/** Every check, as filter options for the inventory's `?check=` chip. */
export function getCheckOptions() {
  return SECURITY_CONTROLS.flatMap((c) =>
    c.subControls.map((s) => ({ value: s.id, label: `${s.id} ${s.title}` })),
  );
}

/** How the site is doing on each security control, lowest average first. */
export function getSiteResilience(): SiteResilience {
  const scores = ASSETS.flatMap((a) =>
    a.resilienceScore === undefined ? [] : [a.resilienceScore],
  );
  const controls = SECURITY_CONTROLS.flatMap(
    (c) => summarize(c.controlId, c.name) ?? [],
  )
    // By the score as shown (rounded); equal shown scores keep CIS order.
    .sort(
      (a, b) =>
        Math.round(a.averageScore) - Math.round(b.averageScore) ||
        (catalogOrder.get(a.controlId) ?? 0) -
          (catalogOrder.get(b.controlId) ?? 0),
    );

  return {
    averageScore: mean(scores),
    scoredCount: scores.length,
    assetCount: ASSETS.length,
    controls,
  };
}
