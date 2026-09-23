// Shared types for the Indurex technical-assessment mock dataset.
//
// Three data files import from here:
//   - assets.ts              → ASSETS, SITE
//   - vulnerabilities.ts     → VULNERABILITIES
//   - security-controls.ts   → SECURITY_CONTROLS, ASSET_RESILIENCE
//
// The data is self-contained — nothing imports from the host application,
// so the whole `assessment/` folder can be copied into any TS/React project.

// ---------------------------------------------------------------------------
// Assets
// ---------------------------------------------------------------------------

/** Broad engineering classification — drives which security controls apply. */
export type AssetClass = "windows" | "network" | "plc" | "field";

export type AssetType =
  | "PLC"
  | "RTU"
  | "Safety controller"
  | "HMI"
  | "SCADA server"
  | "Engineering workstation"
  | "Historian"
  | "Domain controller"
  | "Jump host"
  | "Patch server"
  | "Network switch"
  | "Firewall"
  | "Router"
  | "Wireless AP"
  | "Protocol gateway"
  | "Flow transmitter"
  | "Pressure transmitter"
  | "Gas analyzer"
  | "Variable frequency drive"
  | "IP camera";

export type AssetStatus = "online" | "offline" | "maintenance";

export type Criticality = "low" | "medium" | "high";

export interface NetworkInterface {
  ip: string;
  mac: string;
}

/** A hard drive / volume — present on some Windows-based assets. */
export interface Disk {
  /** Mount point, e.g. "C:". */
  mount: string;
  label?: string;
  totalGb: number;
  freeGb: number;
  type: "SSD" | "HDD";
}

/** An I/O module seated in a PLC rack. */
export interface IoModule {
  slot: number;
  /** Module function: DI/DO = digital in/out, AI/AO = analog in/out, COMM. */
  type: "DI" | "DO" | "AI" | "AO" | "COMM" | "CPU";
  model: string;
  channels?: number;
}

/** Engineering configuration — present on a subset of PLC / safety controllers. */
export interface PlcConfig {
  cpuModel: string;
  firmwareVersion: string;
  /** Physical keyswitch / mode. */
  keyswitch: "run" | "remote" | "program";
  /** Controller scan cycle time in milliseconds. */
  scanTimeMs: number;
  rackSlots: number;
  ioModules: IoModule[];
  programName: string;
  /** Checksum of the running program — changes when logic is downloaded. */
  programChecksum: string;
  /** ISO 8601 timestamp of the last program download. */
  lastDownload: string;
  redundancy: "none" | "hot-standby";
}

/** An observed network conversation between this asset and another. */
export interface AssetConnection {
  /** "outbound" = this asset initiates; "inbound" = the peer initiates. */
  direction: "inbound" | "outbound";
  /** Foreign key into ASSETS (Asset.assetId). */
  peerAssetId: string;
  protocol: string;
  port: number;
}

export interface Asset {
  /** Stable primary key, e.g. "AST-0001". */
  assetId: string;
  /** Human-facing tag, e.g. "CDU-PLC-01". */
  name: string;
  type: AssetType;
  assetClass: AssetClass;
  status: AssetStatus;
  vendor: string;
  model: string;
  /** Absent for assets that have not yet been risk-assessed. */
  criticality?: Criticality;
  /** Process area / Purdue zone label. */
  zone: string;
  /** Purdue level (0–4; 3.5 denotes the IT/OT DMZ). */
  purdueLevel: number;
  interfaces: NetworkInterface[];
  /** Present for Windows-based assets only. */
  operatingSystem?: string;
  /** Present for assets that expose a firmware version. */
  firmwareVersion?: string;
  protocols: string[];
  /** ISO 8601. When the asset was first observed on the network. */
  firstSeen: string;
  /** ISO 8601, or null if the asset has never reported in. */
  lastSeen: string | null;
  /**
   * Overall resilience score, 0–100. Absent when the asset has no resilience
   * assessment yet. When present, it equals the matching
   * AssetResilienceIndex.score in security-controls.ts.
   */
  resilienceScore?: number;
  /** Engineering config — present on a subset of PLC / safety-controller assets. */
  plcConfig?: PlcConfig;
  /** Disks / volumes — present on a subset of Windows-based assets. */
  disks?: Disk[];
  /** Network conversations with other assets — present on a subset of assets. */
  connections?: AssetConnection[];
  /** Foreign keys into VULNERABILITIES (Vulnerability.vulnerabilityId). */
  vulnerabilityIds: string[];
}

// ---------------------------------------------------------------------------
// Vulnerabilities
// ---------------------------------------------------------------------------

export type Severity = "critical" | "high" | "medium" | "low";

export interface Vulnerability {
  /** Stable primary key, e.g. "VLN-001". */
  vulnerabilityId: string;
  cveId: string;
  title: string;
  severity: Severity;
  /** CVSS v3 base score. Absent for older advisories scored only under v2. */
  cvssV3Score?: number;
  /** CVSS vector string (v3 or, for v2-only entries, v2). */
  cvssVector?: string;
  /** CVSS v2 base score, where available. */
  cvssV2Score?: number;
  /** Listed in CISA's Known Exploited Vulnerabilities catalog. */
  isKev: boolean;
  /** ISO 8601 publication date. */
  publishedAt: string;
  summary: string;
  recommendation: string;
  /** Foreign keys into ASSETS. Mirror of Asset.vulnerabilityIds. */
  affectedAssetIds: string[];
}

// ---------------------------------------------------------------------------
// Security controls & resilience
// ---------------------------------------------------------------------------

export type ControlSeverity = "low" | "medium" | "high";

export interface SubControl {
  id: string;
  title: string;
  severity: ControlSeverity;
  /** Asset classes this sub-control is evaluated against. */
  appliesTo: AssetClass[];
}

export interface SecurityControl {
  /** Stable primary key, e.g. "CIS-1". */
  controlId: string;
  name: string;
  description: string;
  /** Relative weight used when computing the overall resilience score. */
  weight: number;
  subControls: SubControl[];
}

export type SubControlStatus = "passed" | "failed" | "not_applicable";

/** The evaluation of a single sub-control for a single asset. */
export interface SubControlResult {
  /** Foreign key into SecurityControl.subControls[].id, e.g. "7.1". */
  id: string;
  title: string;
  severity: ControlSeverity;
  status: SubControlStatus;
}

/** Per-control result rolled up for a single asset. */
export interface ControlResult {
  /** Foreign key into SECURITY_CONTROLS (SecurityControl.controlId). */
  controlId: string;
  /** 0–100, derived from passed / (passed + failed). */
  score: number;
  passed: number;
  failed: number;
  /** Sub-controls in this control that do not apply to the asset's class. */
  notApplicable: number;
  /**
   * The individual sub-control verdicts. Counts above are the tallies of this
   * array by status; `not_applicable` entries are excluded from `score`.
   */
  subControls: SubControlResult[];
}

export interface AssetResilienceIndex {
  /** Foreign key into ASSETS (Asset.assetId). */
  assetId: string;
  /** Overall 0–100. Equals the asset's Asset.resilienceScore. */
  score: number;
  /** ISO 8601 timestamp of the assessment. */
  calculatedAt: string;
  controlResults: ControlResult[];
}
