import "server-only";

import { ASSETS } from "@/app/assignment/assets";
import {
  ASSET_RESILIENCE,
  SECURITY_CONTROLS,
} from "@/app/assignment/security-controls";
import type {
  ControlSeverity,
  Criticality,
  Severity,
} from "@/app/assignment/types";

import { deriveStatus, levelLabel, type AssetRowStatus } from "./asset-row";
import { formatDate, formatDateTime } from "./format";
import { getVulnerabilitiesFor } from "./vulnerabilities";

// View-model for the asset detail page: everything it renders, ordered and
// labelled here so the page components only render. Missing data stays
// `undefined` (never 0) so the page can say so.

export type AssetVulnerability = {
  cveId: string;
  title: string;
  severity: Severity;
  /** CVSS v3 score, or v2 for older advisories scored only under v2. */
  cvss?: number;
  cvssVersion?: "v3" | "v2";
  isKev: boolean;
  publishedLabel: string;
  summary: string;
  recommendation: string;
  /** Assets besides this one with the same CVE. */
  otherAssetCount: number;
};

export type FailedCheck = {
  id: string;
  title: string;
  severity: ControlSeverity;
};

export type ControlResultView = {
  controlId: string;
  name: string;
  score: number;
  passed: number;
  failed: number;
  notApplicable: number;
  failedChecks: FailedCheck[];
};

export type AssetDetail = {
  assetId: string;
  name: string;
  type: string;
  vendor: string;
  model: string;
  zoneName: string;
  level: string;
  status: AssetRowStatus;
  lastSeenLabel?: string;
  criticality?: Criticality;
  score?: number;
  vulnerabilities: AssetVulnerability[];
  kevCount: number;
  /** Undefined when the asset has no resilience assessment. */
  resilience?: {
    assessedLabel: string;
    controls: ControlResultView[];
    failedCheckCount: number;
    /** Controls not evaluated for this asset, e.g. "CIS-9 Email and web browser protections". */
    notEvaluated: string[];
  };
};

const SEVERITY_ORDER: Record<Severity, number> = {
  critical: 0,
  high: 1,
  medium: 2,
  low: 3,
};
const CHECK_SEVERITY_ORDER: Record<ControlSeverity, number> = {
  high: 0,
  medium: 1,
  low: 2,
};
const controlsById = new Map(SECURITY_CONTROLS.map((c) => [c.controlId, c]));
const controlOrder = new Map(SECURITY_CONTROLS.map((c, i) => [c.controlId, i]));

function toVulnerabilities(
  vulns: ReturnType<typeof getVulnerabilitiesFor>,
): AssetVulnerability[] {
  return vulns
    .map((v) => ({
      cveId: v.cveId,
      title: v.title,
      severity: v.severity,
      cvss: v.cvssV3Score ?? v.cvssV2Score,
      cvssVersion:
        v.cvssV3Score !== undefined
          ? ("v3" as const)
          : v.cvssV2Score !== undefined
            ? ("v2" as const)
            : undefined,
      isKev: v.isKev,
      publishedLabel: formatDate(v.publishedAt),
      summary: v.summary,
      recommendation: v.recommendation,
      otherAssetCount: Math.max(v.affectedAssetIds.length - 1, 0),
    }))
    .sort(
      (a, b) =>
        SEVERITY_ORDER[a.severity] - SEVERITY_ORDER[b.severity] ||
        (b.cvss ?? 0) - (a.cvss ?? 0),
    );
}

function toResilience(assetId: string): AssetDetail["resilience"] {
  const index = ASSET_RESILIENCE.find((r) => r.assetId === assetId);
  if (!index) return undefined;

  const controls = index.controlResults
    .map((result) => ({
      controlId: result.controlId,
      name: controlsById.get(result.controlId)?.name ?? result.controlId,
      score: result.score,
      passed: result.passed,
      failed: result.failed,
      notApplicable: result.notApplicable,
      failedChecks: result.subControls
        .filter((s) => s.status === "failed")
        .map(({ id, title, severity }) => ({ id, title, severity }))
        .sort(
          (a, b) =>
            CHECK_SEVERITY_ORDER[a.severity] - CHECK_SEVERITY_ORDER[b.severity],
        ),
    }))
    // Lowest score first; ties keep the CIS catalog order.
    .sort(
      (a, b) =>
        a.score - b.score ||
        (controlOrder.get(a.controlId) ?? 0) -
          (controlOrder.get(b.controlId) ?? 0),
    );

  const evaluated = new Set(controls.map((c) => c.controlId));
  return {
    assessedLabel: formatDate(index.calculatedAt),
    controls,
    failedCheckCount: controls.reduce((n, c) => n + c.failedChecks.length, 0),
    notEvaluated: SECURITY_CONTROLS.filter(
      (c) => !evaluated.has(c.controlId),
    ).map((c) => `${c.controlId} ${c.name}`),
  };
}

/** Everything the detail page shows for one asset, or undefined if unknown. */
export function getAssetDetail(assetId: string): AssetDetail | undefined {
  const asset = ASSETS.find((a) => a.assetId === assetId);
  if (!asset) return undefined;

  const vulnerabilities = toVulnerabilities(getVulnerabilitiesFor(asset));
  return {
    assetId: asset.assetId,
    name: asset.name,
    type: asset.type,
    vendor: asset.vendor,
    model: asset.model,
    zoneName: asset.zone,
    level: levelLabel(asset.purdueLevel),
    status: deriveStatus(asset),
    lastSeenLabel: asset.lastSeen ? formatDateTime(asset.lastSeen) : undefined,
    criticality: asset.criticality,
    score: asset.resilienceScore,
    vulnerabilities,
    kevCount: vulnerabilities.filter((v) => v.isKev).length,
    resilience: toResilience(asset.assetId),
  };
}
