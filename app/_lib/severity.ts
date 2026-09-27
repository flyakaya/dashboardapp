import type { ControlSeverity, Severity } from "@/app/assignment/types";

// Sort ranks (0 = most severe). CVEs and control checks use different scales
// in the data, so each has its own map; both live here so they stay in step.

export const CVE_SEVERITY_RANK: Record<Severity, number> = {
  critical: 0,
  high: 1,
  medium: 2,
  low: 3,
};

export const CHECK_SEVERITY_RANK: Record<ControlSeverity, number> = {
  high: 0,
  medium: 1,
  low: 2,
};
