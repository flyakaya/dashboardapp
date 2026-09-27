import "server-only";

import { cache } from "react";

import { ASSETS } from "@/app/assignment/assets";
import { SECURITY_CONTROLS } from "@/app/assignment/security-controls";
import type {
  AssetType,
  ControlSeverity,
  Criticality,
  Severity,
} from "@/app/assignment/types";

import {
  deriveStatus,
  levelLabel,
  type AssetRowStatus,
} from "@/app/_lib/asset-row";
import { CHECK_SEVERITY_RANK, CVE_SEVERITY_RANK } from "@/app/_lib/severity";

import { formatDate, formatDateTime, formatSiteDate } from "./format";
import { getResilienceIndex } from "./resilience";
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

type FailedCheck = {
  id: string;
  title: string;
  severity: ControlSeverity;
};

type ControlResultView = {
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
  type: AssetType;
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

const controlsById = new Map(SECURITY_CONTROLS.map((c) => [c.controlId, c]));
const controlOrder = new Map(SECURITY_CONTROLS.map((c, i) => [c.controlId, i]));

/** CVSS v3 when present, else v2 (older advisories), with its version. */
function cvssOf(v: {
  cvssV3Score?: number;
  cvssV2Score?: number;
}): Pick<AssetVulnerability, "cvss" | "cvssVersion"> {
  if (v.cvssV3Score !== undefined) {
    return { cvss: v.cvssV3Score, cvssVersion: "v3" };
  }
  if (v.cvssV2Score !== undefined) {
    return { cvss: v.cvssV2Score, cvssVersion: "v2" };
  }
  return {};
}

function toVulnerabilities(
  vulns: ReturnType<typeof getVulnerabilitiesFor>,
): AssetVulnerability[] {
  return vulns
    .map((v) => ({
      cveId: v.cveId,
      title: v.title,
      severity: v.severity,
      ...cvssOf(v),
      isKev: v.isKev,
      publishedLabel: formatDate(v.publishedAt),
      summary: v.summary,
      recommendation: v.recommendation,
      otherAssetCount: Math.max(v.affectedAssetIds.length - 1, 0),
    }))
    .sort(
      (a, b) =>
        CVE_SEVERITY_RANK[a.severity] - CVE_SEVERITY_RANK[b.severity] ||
        (b.cvss ?? 0) - (a.cvss ?? 0),
    );
}

function toResilience(assetId: string): AssetDetail["resilience"] {
  const index = getResilienceIndex(assetId);
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
            CHECK_SEVERITY_RANK[a.severity] - CHECK_SEVERITY_RANK[b.severity],
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
    assessedLabel: formatSiteDate(index.calculatedAt),
    controls,
    failedCheckCount: controls.reduce((n, c) => n + c.failedChecks.length, 0),
    notEvaluated: SECURITY_CONTROLS.filter(
      (c) => !evaluated.has(c.controlId),
    ).map((c) => `${c.controlId} ${c.name}`),
  };
}

/**
 * Everything the detail page shows for one asset, or undefined if unknown.
 * `cache` dedupes per request: generateMetadata and the page share one build.
 */
export const getAssetDetail = cache(async function getAssetDetail(
  assetId: string,
): Promise<AssetDetail | undefined> {
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
});
