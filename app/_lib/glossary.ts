// One definition per term, shown in the ⓘ tooltips. Wording follows the
// dataset's own definitions (app/assignment/types.ts) or the standard domain
// meaning (Purdue, KEV, CVSS); no formula is claimed that the data doesn't state.

export const GLOSSARY = {
  siteScore:
    "Each assessed asset has a resilience score from 0 to 100 in the data. This is their plain average; assets without an assessment aren't counted.",
  controlScore:
    "A control's score on one asset is the share of its applicable checks that passed (0–100). This averages it over the assets the control applies to (the Assets column).",
  failedHigh: "High-severity checks that failed, counted once per asset.",
  purdueLevel:
    "Purdue level: where the asset sits in the plant network, from L0 (field devices) up to L3 (site operations). L3.5 is the IT/OT DMZ.",
  status:
    "As reported by the asset. Never reported: discovered on the network but has never reported in.",
  resilienceScore:
    "Resilience score, 0–100, from the asset's security-control assessment. Not scored: no assessment yet.",
  kev: "Known CVEs linked to the asset. KEV: listed in CISA's Known Exploited Vulnerabilities catalog, meaning it's exploited in the wild.",
  cvss: "CVSS base score, 0–10. v3 where available; older advisories only have v2.",
  notApplicable:
    "Checks that don't apply to this asset's class. They don't count toward the score.",
} as const;

export type GlossaryTerm = keyof typeof GLOSSARY;
