// Security controls & resilience indices
// Mock data for the Indurex technical assessment — Port Meridian refinery.
// Generated, static & deterministic. Safe to edit. See README.md for the data model.

import type { SecurityControl, AssetResilienceIndex } from "./types";

/** CIS Controls v8 catalog (18 controls) used to score resilience. */
export const SECURITY_CONTROLS: SecurityControl[] = [
  {
    "controlId": "CIS-1",
    "name": "Inventory and control of enterprise assets",
    "weight": 1.2,
    "description": "Actively manage all assets connected to the infrastructure so the full inventory that must be monitored and protected is known.",
    "subControls": [
      {
        "id": "1.1",
        "title": "Maintained, authoritative asset inventory entry",
        "severity": "high",
        "appliesTo": [
          "windows",
          "network",
          "plc",
          "field"
        ]
      },
      {
        "id": "1.2",
        "title": "Unauthorized assets are detected and addressed",
        "severity": "medium",
        "appliesTo": [
          "windows",
          "network",
          "plc"
        ]
      },
      {
        "id": "1.3",
        "title": "Passive asset discovery in use on the segment",
        "severity": "low",
        "appliesTo": [
          "network",
          "plc",
          "field"
        ]
      },
      {
        "id": "1.4",
        "title": "DHCP / address-assignment logging reconciled to inventory",
        "severity": "low",
        "appliesTo": [
          "windows",
          "network"
        ]
      }
    ]
  },
  {
    "controlId": "CIS-2",
    "name": "Inventory and control of software assets",
    "weight": 1.1,
    "description": "Manage all software on the network so only authorized software is installed and can execute.",
    "subControls": [
      {
        "id": "2.1",
        "title": "Authorized software inventory maintained",
        "severity": "high",
        "appliesTo": [
          "windows"
        ]
      },
      {
        "id": "2.2",
        "title": "Unsupported / end-of-life software removed or documented",
        "severity": "high",
        "appliesTo": [
          "windows",
          "plc"
        ]
      },
      {
        "id": "2.3",
        "title": "Application allowlisting enforced",
        "severity": "medium",
        "appliesTo": [
          "windows"
        ]
      }
    ]
  },
  {
    "controlId": "CIS-3",
    "name": "Data protection",
    "weight": 1,
    "description": "Develop processes and controls to identify, classify, securely handle, retain, and dispose of data.",
    "subControls": [
      {
        "id": "3.1",
        "title": "Sensitive configuration/project data inventory maintained",
        "severity": "medium",
        "appliesTo": [
          "windows",
          "plc"
        ]
      },
      {
        "id": "3.2",
        "title": "Data-at-rest encryption on engineering data",
        "severity": "medium",
        "appliesTo": [
          "windows"
        ]
      },
      {
        "id": "3.3",
        "title": "Removable-media controls enforced",
        "severity": "low",
        "appliesTo": [
          "windows"
        ]
      }
    ]
  },
  {
    "controlId": "CIS-4",
    "name": "Secure configuration of assets and software",
    "weight": 1.2,
    "description": "Establish and maintain the secure configuration of enterprise assets and software.",
    "subControls": [
      {
        "id": "4.1",
        "title": "Hardened baseline applied (CIS Benchmark)",
        "severity": "high",
        "appliesTo": [
          "windows",
          "network"
        ]
      },
      {
        "id": "4.2",
        "title": "Default credentials changed",
        "severity": "high",
        "appliesTo": [
          "windows",
          "network",
          "plc",
          "field"
        ]
      },
      {
        "id": "4.3",
        "title": "Unnecessary services / ports disabled",
        "severity": "medium",
        "appliesTo": [
          "windows",
          "network",
          "plc"
        ]
      },
      {
        "id": "4.4",
        "title": "Controller keyswitch / write-protection enabled",
        "severity": "high",
        "appliesTo": [
          "plc"
        ]
      },
      {
        "id": "4.5",
        "title": "Session lock / automatic timeout configured",
        "severity": "low",
        "appliesTo": [
          "windows"
        ]
      }
    ]
  },
  {
    "controlId": "CIS-5",
    "name": "Account management",
    "weight": 1.1,
    "description": "Use processes and tools to assign and manage authorization for credentials and accounts.",
    "subControls": [
      {
        "id": "5.1",
        "title": "Inventory of accounts maintained",
        "severity": "medium",
        "appliesTo": [
          "windows",
          "network"
        ]
      },
      {
        "id": "5.2",
        "title": "Default / shared accounts disabled",
        "severity": "high",
        "appliesTo": [
          "windows",
          "network",
          "plc",
          "field"
        ]
      },
      {
        "id": "5.3",
        "title": "Dormant accounts disabled",
        "severity": "medium",
        "appliesTo": [
          "windows",
          "network"
        ]
      }
    ]
  },
  {
    "controlId": "CIS-6",
    "name": "Access control management",
    "weight": 1.2,
    "description": "Manage granting, revoking, and least-privilege access to assets and software.",
    "subControls": [
      {
        "id": "6.1",
        "title": "Least-privilege access enforced",
        "severity": "high",
        "appliesTo": [
          "windows",
          "network",
          "plc"
        ]
      },
      {
        "id": "6.2",
        "title": "Multi-factor authentication for remote / privileged access",
        "severity": "high",
        "appliesTo": [
          "windows",
          "network"
        ]
      },
      {
        "id": "6.3",
        "title": "Access revoked on role change / departure",
        "severity": "medium",
        "appliesTo": [
          "windows",
          "network"
        ]
      }
    ]
  },
  {
    "controlId": "CIS-7",
    "name": "Continuous vulnerability management",
    "weight": 1.2,
    "description": "Continuously assess and track vulnerabilities and remediate to reduce the window of opportunity.",
    "subControls": [
      {
        "id": "7.1",
        "title": "Asset covered by vulnerability scanning",
        "severity": "high",
        "appliesTo": [
          "windows",
          "network",
          "plc"
        ]
      },
      {
        "id": "7.2",
        "title": "Security patches applied within policy SLA",
        "severity": "high",
        "appliesTo": [
          "windows",
          "network"
        ]
      },
      {
        "id": "7.3",
        "title": "Firmware updates tracked and applied",
        "severity": "medium",
        "appliesTo": [
          "plc",
          "field",
          "network"
        ]
      },
      {
        "id": "7.4",
        "title": "Risk-based remediation plan documented",
        "severity": "low",
        "appliesTo": [
          "windows",
          "network",
          "plc",
          "field"
        ]
      }
    ]
  },
  {
    "controlId": "CIS-8",
    "name": "Audit log management",
    "weight": 1,
    "description": "Collect, alert on, review, and retain audit logs of events to detect and recover from attacks.",
    "subControls": [
      {
        "id": "8.1",
        "title": "Security event logging enabled",
        "severity": "high",
        "appliesTo": [
          "windows",
          "network"
        ]
      },
      {
        "id": "8.2",
        "title": "Logs forwarded to central SIEM",
        "severity": "medium",
        "appliesTo": [
          "windows",
          "network"
        ]
      },
      {
        "id": "8.3",
        "title": "Time synchronized to trusted source",
        "severity": "low",
        "appliesTo": [
          "windows",
          "network",
          "plc",
          "field"
        ]
      }
    ]
  },
  {
    "controlId": "CIS-9",
    "name": "Email and web browser protections",
    "weight": 0.8,
    "description": "Improve protections and detections of threats from email and web vectors.",
    "subControls": [
      {
        "id": "9.1",
        "title": "Supported browser/email client only",
        "severity": "medium",
        "appliesTo": [
          "windows"
        ]
      },
      {
        "id": "9.2",
        "title": "URL / content filtering enforced",
        "severity": "low",
        "appliesTo": [
          "windows"
        ]
      }
    ]
  },
  {
    "controlId": "CIS-10",
    "name": "Malware defenses",
    "weight": 1.1,
    "description": "Prevent or control the installation, spread, and execution of malicious applications and code.",
    "subControls": [
      {
        "id": "10.1",
        "title": "Anti-malware deployed and current",
        "severity": "high",
        "appliesTo": [
          "windows"
        ]
      },
      {
        "id": "10.2",
        "title": "Removable-media auto-run disabled",
        "severity": "medium",
        "appliesTo": [
          "windows"
        ]
      },
      {
        "id": "10.3",
        "title": "Behavioral / EDR coverage",
        "severity": "medium",
        "appliesTo": [
          "windows"
        ]
      }
    ]
  },
  {
    "controlId": "CIS-11",
    "name": "Data recovery",
    "weight": 1,
    "description": "Establish and maintain data-recovery practices sufficient to restore in-scope assets to a trusted state.",
    "subControls": [
      {
        "id": "11.1",
        "title": "Configuration / project backups taken",
        "severity": "high",
        "appliesTo": [
          "windows",
          "plc"
        ]
      },
      {
        "id": "11.2",
        "title": "Backups tested by restore",
        "severity": "medium",
        "appliesTo": [
          "windows",
          "plc"
        ]
      },
      {
        "id": "11.3",
        "title": "Backups stored isolated / offline",
        "severity": "medium",
        "appliesTo": [
          "windows"
        ]
      }
    ]
  },
  {
    "controlId": "CIS-12",
    "name": "Network infrastructure management",
    "weight": 1.1,
    "description": "Establish, implement, and actively manage network devices to prevent attackers exploiting services.",
    "subControls": [
      {
        "id": "12.1",
        "title": "Network device running supported firmware",
        "severity": "high",
        "appliesTo": [
          "network"
        ]
      },
      {
        "id": "12.2",
        "title": "Secure management protocols only (SSH/HTTPS)",
        "severity": "high",
        "appliesTo": [
          "network"
        ]
      },
      {
        "id": "12.3",
        "title": "Network segmentation / zone enforcement",
        "severity": "high",
        "appliesTo": [
          "network",
          "plc"
        ]
      },
      {
        "id": "12.4",
        "title": "Configuration backups maintained",
        "severity": "medium",
        "appliesTo": [
          "network"
        ]
      }
    ]
  },
  {
    "controlId": "CIS-13",
    "name": "Network monitoring and defense",
    "weight": 1.1,
    "description": "Operate processes and tooling to establish and maintain comprehensive network monitoring and defense.",
    "subControls": [
      {
        "id": "13.1",
        "title": "Traffic monitored on the segment (IDS/NSM)",
        "severity": "medium",
        "appliesTo": [
          "network",
          "plc",
          "field"
        ]
      },
      {
        "id": "13.2",
        "title": "Alerting on anomalous OT traffic",
        "severity": "medium",
        "appliesTo": [
          "network",
          "plc"
        ]
      },
      {
        "id": "13.3",
        "title": "Port-level access control (802.1X / MAC)",
        "severity": "low",
        "appliesTo": [
          "network"
        ]
      }
    ]
  },
  {
    "controlId": "CIS-14",
    "name": "Security awareness and skills training",
    "weight": 0.7,
    "description": "Establish and maintain a security-awareness program to influence safe behavior.",
    "subControls": [
      {
        "id": "14.1",
        "title": "Operators trained on OT security procedures",
        "severity": "low",
        "appliesTo": [
          "windows",
          "plc"
        ]
      }
    ]
  },
  {
    "controlId": "CIS-15",
    "name": "Service provider management",
    "weight": 0.7,
    "description": "Evaluate service providers who hold sensitive data or are responsible for critical platforms.",
    "subControls": [
      {
        "id": "15.1",
        "title": "Vendor remote-access governed and logged",
        "severity": "medium",
        "appliesTo": [
          "windows",
          "network",
          "plc"
        ]
      }
    ]
  },
  {
    "controlId": "CIS-16",
    "name": "Application software security",
    "weight": 1,
    "description": "Manage the security lifecycle of in-house and acquired software to prevent, detect, and remediate weaknesses.",
    "subControls": [
      {
        "id": "16.1",
        "title": "Vendor application security patches tracked",
        "severity": "medium",
        "appliesTo": [
          "windows",
          "plc"
        ]
      },
      {
        "id": "16.2",
        "title": "Hardened application configuration",
        "severity": "low",
        "appliesTo": [
          "windows"
        ]
      }
    ]
  },
  {
    "controlId": "CIS-17",
    "name": "Incident response management",
    "weight": 0.9,
    "description": "Establish a program to prepare, detect, and quickly respond to an attack.",
    "subControls": [
      {
        "id": "17.1",
        "title": "Asset mapped in incident-response runbook",
        "severity": "medium",
        "appliesTo": [
          "windows",
          "network",
          "plc"
        ]
      },
      {
        "id": "17.2",
        "title": "Recovery contacts / escalation defined",
        "severity": "low",
        "appliesTo": [
          "windows",
          "network",
          "plc",
          "field"
        ]
      }
    ]
  },
  {
    "controlId": "CIS-18",
    "name": "Penetration testing",
    "weight": 0.7,
    "description": "Test the effectiveness and resiliency of assets through identifying and exploiting weaknesses.",
    "subControls": [
      {
        "id": "18.1",
        "title": "Included in scope of latest assessment",
        "severity": "low",
        "appliesTo": [
          "windows",
          "network",
          "plc"
        ]
      }
    ]
  }
];

/** Per-asset resilience indices. One entry per assessed asset; its `score`
 *  equals that asset's `resilienceScore`. Unassessed assets have no entry. */
export const ASSET_RESILIENCE: AssetResilienceIndex[] = [
  {
    "assetId": "AST-0002",
    "score": 61,
    "calculatedAt": "2026-06-24T12:00:00.000Z",
    "controlResults": [
      {
        "controlId": "CIS-1",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "1.1",
            "title": "Maintained, authoritative asset inventory entry",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "1.2",
            "title": "Unauthorized assets are detected and addressed",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "1.3",
            "title": "Passive asset discovery in use on the segment",
            "severity": "low",
            "status": "passed"
          },
          {
            "id": "1.4",
            "title": "DHCP / address-assignment logging reconciled to inventory",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-2",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "2.1",
            "title": "Authorized software inventory maintained",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "2.2",
            "title": "Unsupported / end-of-life software removed or documented",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "2.3",
            "title": "Application allowlisting enforced",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-3",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "3.1",
            "title": "Sensitive configuration/project data inventory maintained",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "3.2",
            "title": "Data-at-rest encryption on engineering data",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "3.3",
            "title": "Removable-media controls enforced",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-4",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "4.1",
            "title": "Hardened baseline applied (CIS Benchmark)",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "4.2",
            "title": "Default credentials changed",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "4.3",
            "title": "Unnecessary services / ports disabled",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "4.4",
            "title": "Controller keyswitch / write-protection enabled",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "4.5",
            "title": "Session lock / automatic timeout configured",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-5",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "5.1",
            "title": "Inventory of accounts maintained",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "5.2",
            "title": "Default / shared accounts disabled",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "5.3",
            "title": "Dormant accounts disabled",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-6",
        "score": 0,
        "passed": 0,
        "failed": 1,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "6.1",
            "title": "Least-privilege access enforced",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "6.2",
            "title": "Multi-factor authentication for remote / privileged access",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "6.3",
            "title": "Access revoked on role change / departure",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-7",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "7.1",
            "title": "Asset covered by vulnerability scanning",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "7.2",
            "title": "Security patches applied within policy SLA",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "7.3",
            "title": "Firmware updates tracked and applied",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "7.4",
            "title": "Risk-based remediation plan documented",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-8",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "8.1",
            "title": "Security event logging enabled",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "8.2",
            "title": "Logs forwarded to central SIEM",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "8.3",
            "title": "Time synchronized to trusted source",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-11",
        "score": 50,
        "passed": 1,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "11.1",
            "title": "Configuration / project backups taken",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "11.2",
            "title": "Backups tested by restore",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "11.3",
            "title": "Backups stored isolated / offline",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-12",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 3,
        "subControls": [
          {
            "id": "12.1",
            "title": "Network device running supported firmware",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "12.2",
            "title": "Secure management protocols only (SSH/HTTPS)",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "12.3",
            "title": "Network segmentation / zone enforcement",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "12.4",
            "title": "Configuration backups maintained",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-13",
        "score": 50,
        "passed": 1,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "13.1",
            "title": "Traffic monitored on the segment (IDS/NSM)",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "13.2",
            "title": "Alerting on anomalous OT traffic",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "13.3",
            "title": "Port-level access control (802.1X / MAC)",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-14",
        "score": 0,
        "passed": 0,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "14.1",
            "title": "Operators trained on OT security procedures",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-15",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "15.1",
            "title": "Vendor remote-access governed and logged",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-16",
        "score": 0,
        "passed": 0,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "16.1",
            "title": "Vendor application security patches tracked",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "16.2",
            "title": "Hardened application configuration",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-17",
        "score": 50,
        "passed": 1,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "17.1",
            "title": "Asset mapped in incident-response runbook",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "17.2",
            "title": "Recovery contacts / escalation defined",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-18",
        "score": 0,
        "passed": 0,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "18.1",
            "title": "Included in scope of latest assessment",
            "severity": "low",
            "status": "failed"
          }
        ]
      }
    ]
  },
  {
    "assetId": "AST-0003",
    "score": 44,
    "calculatedAt": "2026-06-23T12:00:00.000Z",
    "controlResults": [
      {
        "controlId": "CIS-1",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "1.1",
            "title": "Maintained, authoritative asset inventory entry",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "1.2",
            "title": "Unauthorized assets are detected and addressed",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "1.3",
            "title": "Passive asset discovery in use on the segment",
            "severity": "low",
            "status": "failed"
          },
          {
            "id": "1.4",
            "title": "DHCP / address-assignment logging reconciled to inventory",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-2",
        "score": 0,
        "passed": 0,
        "failed": 1,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "2.1",
            "title": "Authorized software inventory maintained",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "2.2",
            "title": "Unsupported / end-of-life software removed or documented",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "2.3",
            "title": "Application allowlisting enforced",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-3",
        "score": 0,
        "passed": 0,
        "failed": 1,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "3.1",
            "title": "Sensitive configuration/project data inventory maintained",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "3.2",
            "title": "Data-at-rest encryption on engineering data",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "3.3",
            "title": "Removable-media controls enforced",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-4",
        "score": 33,
        "passed": 1,
        "failed": 2,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "4.1",
            "title": "Hardened baseline applied (CIS Benchmark)",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "4.2",
            "title": "Default credentials changed",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "4.3",
            "title": "Unnecessary services / ports disabled",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "4.4",
            "title": "Controller keyswitch / write-protection enabled",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "4.5",
            "title": "Session lock / automatic timeout configured",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-5",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "5.1",
            "title": "Inventory of accounts maintained",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "5.2",
            "title": "Default / shared accounts disabled",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "5.3",
            "title": "Dormant accounts disabled",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-6",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "6.1",
            "title": "Least-privilege access enforced",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "6.2",
            "title": "Multi-factor authentication for remote / privileged access",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "6.3",
            "title": "Access revoked on role change / departure",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-7",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "7.1",
            "title": "Asset covered by vulnerability scanning",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "7.2",
            "title": "Security patches applied within policy SLA",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "7.3",
            "title": "Firmware updates tracked and applied",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "7.4",
            "title": "Risk-based remediation plan documented",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-8",
        "score": 0,
        "passed": 0,
        "failed": 1,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "8.1",
            "title": "Security event logging enabled",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "8.2",
            "title": "Logs forwarded to central SIEM",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "8.3",
            "title": "Time synchronized to trusted source",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-11",
        "score": 50,
        "passed": 1,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "11.1",
            "title": "Configuration / project backups taken",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "11.2",
            "title": "Backups tested by restore",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "11.3",
            "title": "Backups stored isolated / offline",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-12",
        "score": 0,
        "passed": 0,
        "failed": 1,
        "notApplicable": 3,
        "subControls": [
          {
            "id": "12.1",
            "title": "Network device running supported firmware",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "12.2",
            "title": "Secure management protocols only (SSH/HTTPS)",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "12.3",
            "title": "Network segmentation / zone enforcement",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "12.4",
            "title": "Configuration backups maintained",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-13",
        "score": 50,
        "passed": 1,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "13.1",
            "title": "Traffic monitored on the segment (IDS/NSM)",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "13.2",
            "title": "Alerting on anomalous OT traffic",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "13.3",
            "title": "Port-level access control (802.1X / MAC)",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-14",
        "score": 0,
        "passed": 0,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "14.1",
            "title": "Operators trained on OT security procedures",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-15",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "15.1",
            "title": "Vendor remote-access governed and logged",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-16",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "16.1",
            "title": "Vendor application security patches tracked",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "16.2",
            "title": "Hardened application configuration",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-17",
        "score": 0,
        "passed": 0,
        "failed": 2,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "17.1",
            "title": "Asset mapped in incident-response runbook",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "17.2",
            "title": "Recovery contacts / escalation defined",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-18",
        "score": 0,
        "passed": 0,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "18.1",
            "title": "Included in scope of latest assessment",
            "severity": "low",
            "status": "failed"
          }
        ]
      }
    ]
  },
  {
    "assetId": "AST-0004",
    "score": 36,
    "calculatedAt": "2026-06-09T12:00:00.000Z",
    "controlResults": [
      {
        "controlId": "CIS-1",
        "score": 33,
        "passed": 1,
        "failed": 2,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "1.1",
            "title": "Maintained, authoritative asset inventory entry",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "1.2",
            "title": "Unauthorized assets are detected and addressed",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "1.3",
            "title": "Passive asset discovery in use on the segment",
            "severity": "low",
            "status": "not_applicable"
          },
          {
            "id": "1.4",
            "title": "DHCP / address-assignment logging reconciled to inventory",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-2",
        "score": 33,
        "passed": 1,
        "failed": 2,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "2.1",
            "title": "Authorized software inventory maintained",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "2.2",
            "title": "Unsupported / end-of-life software removed or documented",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "2.3",
            "title": "Application allowlisting enforced",
            "severity": "medium",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-3",
        "score": 33,
        "passed": 1,
        "failed": 2,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "3.1",
            "title": "Sensitive configuration/project data inventory maintained",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "3.2",
            "title": "Data-at-rest encryption on engineering data",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "3.3",
            "title": "Removable-media controls enforced",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-4",
        "score": 25,
        "passed": 1,
        "failed": 3,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "4.1",
            "title": "Hardened baseline applied (CIS Benchmark)",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "4.2",
            "title": "Default credentials changed",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "4.3",
            "title": "Unnecessary services / ports disabled",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "4.4",
            "title": "Controller keyswitch / write-protection enabled",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "4.5",
            "title": "Session lock / automatic timeout configured",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-5",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "5.1",
            "title": "Inventory of accounts maintained",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "5.2",
            "title": "Default / shared accounts disabled",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "5.3",
            "title": "Dormant accounts disabled",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-6",
        "score": 33,
        "passed": 1,
        "failed": 2,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "6.1",
            "title": "Least-privilege access enforced",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "6.2",
            "title": "Multi-factor authentication for remote / privileged access",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "6.3",
            "title": "Access revoked on role change / departure",
            "severity": "medium",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-7",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "7.1",
            "title": "Asset covered by vulnerability scanning",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "7.2",
            "title": "Security patches applied within policy SLA",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "7.3",
            "title": "Firmware updates tracked and applied",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "7.4",
            "title": "Risk-based remediation plan documented",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-8",
        "score": 33,
        "passed": 1,
        "failed": 2,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "8.1",
            "title": "Security event logging enabled",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "8.2",
            "title": "Logs forwarded to central SIEM",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "8.3",
            "title": "Time synchronized to trusted source",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-9",
        "score": 50,
        "passed": 1,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "9.1",
            "title": "Supported browser/email client only",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "9.2",
            "title": "URL / content filtering enforced",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-10",
        "score": 33,
        "passed": 1,
        "failed": 2,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "10.1",
            "title": "Anti-malware deployed and current",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "10.2",
            "title": "Removable-media auto-run disabled",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "10.3",
            "title": "Behavioral / EDR coverage",
            "severity": "medium",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-11",
        "score": 33,
        "passed": 1,
        "failed": 2,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "11.1",
            "title": "Configuration / project backups taken",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "11.2",
            "title": "Backups tested by restore",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "11.3",
            "title": "Backups stored isolated / offline",
            "severity": "medium",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-14",
        "score": 0,
        "passed": 0,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "14.1",
            "title": "Operators trained on OT security procedures",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-15",
        "score": 0,
        "passed": 0,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "15.1",
            "title": "Vendor remote-access governed and logged",
            "severity": "medium",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-16",
        "score": 50,
        "passed": 1,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "16.1",
            "title": "Vendor application security patches tracked",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "16.2",
            "title": "Hardened application configuration",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-17",
        "score": 50,
        "passed": 1,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "17.1",
            "title": "Asset mapped in incident-response runbook",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "17.2",
            "title": "Recovery contacts / escalation defined",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-18",
        "score": 0,
        "passed": 0,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "18.1",
            "title": "Included in scope of latest assessment",
            "severity": "low",
            "status": "failed"
          }
        ]
      }
    ]
  },
  {
    "assetId": "AST-0009",
    "score": 54,
    "calculatedAt": "2026-06-17T12:00:00.000Z",
    "controlResults": [
      {
        "controlId": "CIS-1",
        "score": 50,
        "passed": 2,
        "failed": 2,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "1.1",
            "title": "Maintained, authoritative asset inventory entry",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "1.2",
            "title": "Unauthorized assets are detected and addressed",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "1.3",
            "title": "Passive asset discovery in use on the segment",
            "severity": "low",
            "status": "failed"
          },
          {
            "id": "1.4",
            "title": "DHCP / address-assignment logging reconciled to inventory",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-4",
        "score": 33,
        "passed": 1,
        "failed": 2,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "4.1",
            "title": "Hardened baseline applied (CIS Benchmark)",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "4.2",
            "title": "Default credentials changed",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "4.3",
            "title": "Unnecessary services / ports disabled",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "4.4",
            "title": "Controller keyswitch / write-protection enabled",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "4.5",
            "title": "Session lock / automatic timeout configured",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-5",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "5.1",
            "title": "Inventory of accounts maintained",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "5.2",
            "title": "Default / shared accounts disabled",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "5.3",
            "title": "Dormant accounts disabled",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-6",
        "score": 33,
        "passed": 1,
        "failed": 2,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "6.1",
            "title": "Least-privilege access enforced",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "6.2",
            "title": "Multi-factor authentication for remote / privileged access",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "6.3",
            "title": "Access revoked on role change / departure",
            "severity": "medium",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-7",
        "score": 50,
        "passed": 2,
        "failed": 2,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "7.1",
            "title": "Asset covered by vulnerability scanning",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "7.2",
            "title": "Security patches applied within policy SLA",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "7.3",
            "title": "Firmware updates tracked and applied",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "7.4",
            "title": "Risk-based remediation plan documented",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-8",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "8.1",
            "title": "Security event logging enabled",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "8.2",
            "title": "Logs forwarded to central SIEM",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "8.3",
            "title": "Time synchronized to trusted source",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-12",
        "score": 75,
        "passed": 3,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "12.1",
            "title": "Network device running supported firmware",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "12.2",
            "title": "Secure management protocols only (SSH/HTTPS)",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "12.3",
            "title": "Network segmentation / zone enforcement",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "12.4",
            "title": "Configuration backups maintained",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-13",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "13.1",
            "title": "Traffic monitored on the segment (IDS/NSM)",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "13.2",
            "title": "Alerting on anomalous OT traffic",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "13.3",
            "title": "Port-level access control (802.1X / MAC)",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-15",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "15.1",
            "title": "Vendor remote-access governed and logged",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-17",
        "score": 50,
        "passed": 1,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "17.1",
            "title": "Asset mapped in incident-response runbook",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "17.2",
            "title": "Recovery contacts / escalation defined",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-18",
        "score": 0,
        "passed": 0,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "18.1",
            "title": "Included in scope of latest assessment",
            "severity": "low",
            "status": "failed"
          }
        ]
      }
    ]
  },
  {
    "assetId": "AST-0010",
    "score": 52,
    "calculatedAt": "2026-06-07T12:00:00.000Z",
    "controlResults": [
      {
        "controlId": "CIS-1",
        "score": 33,
        "passed": 1,
        "failed": 2,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "1.1",
            "title": "Maintained, authoritative asset inventory entry",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "1.2",
            "title": "Unauthorized assets are detected and addressed",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "1.3",
            "title": "Passive asset discovery in use on the segment",
            "severity": "low",
            "status": "failed"
          },
          {
            "id": "1.4",
            "title": "DHCP / address-assignment logging reconciled to inventory",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-2",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "2.1",
            "title": "Authorized software inventory maintained",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "2.2",
            "title": "Unsupported / end-of-life software removed or documented",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "2.3",
            "title": "Application allowlisting enforced",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-3",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "3.1",
            "title": "Sensitive configuration/project data inventory maintained",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "3.2",
            "title": "Data-at-rest encryption on engineering data",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "3.3",
            "title": "Removable-media controls enforced",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-4",
        "score": 33,
        "passed": 1,
        "failed": 2,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "4.1",
            "title": "Hardened baseline applied (CIS Benchmark)",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "4.2",
            "title": "Default credentials changed",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "4.3",
            "title": "Unnecessary services / ports disabled",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "4.4",
            "title": "Controller keyswitch / write-protection enabled",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "4.5",
            "title": "Session lock / automatic timeout configured",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-5",
        "score": 0,
        "passed": 0,
        "failed": 1,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "5.1",
            "title": "Inventory of accounts maintained",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "5.2",
            "title": "Default / shared accounts disabled",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "5.3",
            "title": "Dormant accounts disabled",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-6",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "6.1",
            "title": "Least-privilege access enforced",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "6.2",
            "title": "Multi-factor authentication for remote / privileged access",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "6.3",
            "title": "Access revoked on role change / departure",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-7",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "7.1",
            "title": "Asset covered by vulnerability scanning",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "7.2",
            "title": "Security patches applied within policy SLA",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "7.3",
            "title": "Firmware updates tracked and applied",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "7.4",
            "title": "Risk-based remediation plan documented",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-8",
        "score": 0,
        "passed": 0,
        "failed": 1,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "8.1",
            "title": "Security event logging enabled",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "8.2",
            "title": "Logs forwarded to central SIEM",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "8.3",
            "title": "Time synchronized to trusted source",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-11",
        "score": 50,
        "passed": 1,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "11.1",
            "title": "Configuration / project backups taken",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "11.2",
            "title": "Backups tested by restore",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "11.3",
            "title": "Backups stored isolated / offline",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-12",
        "score": 0,
        "passed": 0,
        "failed": 1,
        "notApplicable": 3,
        "subControls": [
          {
            "id": "12.1",
            "title": "Network device running supported firmware",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "12.2",
            "title": "Secure management protocols only (SSH/HTTPS)",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "12.3",
            "title": "Network segmentation / zone enforcement",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "12.4",
            "title": "Configuration backups maintained",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-13",
        "score": 50,
        "passed": 1,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "13.1",
            "title": "Traffic monitored on the segment (IDS/NSM)",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "13.2",
            "title": "Alerting on anomalous OT traffic",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "13.3",
            "title": "Port-level access control (802.1X / MAC)",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-14",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "14.1",
            "title": "Operators trained on OT security procedures",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-15",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "15.1",
            "title": "Vendor remote-access governed and logged",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-16",
        "score": 0,
        "passed": 0,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "16.1",
            "title": "Vendor application security patches tracked",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "16.2",
            "title": "Hardened application configuration",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-17",
        "score": 50,
        "passed": 1,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "17.1",
            "title": "Asset mapped in incident-response runbook",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "17.2",
            "title": "Recovery contacts / escalation defined",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-18",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "18.1",
            "title": "Included in scope of latest assessment",
            "severity": "low",
            "status": "passed"
          }
        ]
      }
    ]
  },
  {
    "assetId": "AST-0013",
    "score": 66,
    "calculatedAt": "2026-06-10T12:00:00.000Z",
    "controlResults": [
      {
        "controlId": "CIS-1",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "1.1",
            "title": "Maintained, authoritative asset inventory entry",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "1.2",
            "title": "Unauthorized assets are detected and addressed",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "1.3",
            "title": "Passive asset discovery in use on the segment",
            "severity": "low",
            "status": "passed"
          },
          {
            "id": "1.4",
            "title": "DHCP / address-assignment logging reconciled to inventory",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-2",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "2.1",
            "title": "Authorized software inventory maintained",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "2.2",
            "title": "Unsupported / end-of-life software removed or documented",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "2.3",
            "title": "Application allowlisting enforced",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-3",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "3.1",
            "title": "Sensitive configuration/project data inventory maintained",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "3.2",
            "title": "Data-at-rest encryption on engineering data",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "3.3",
            "title": "Removable-media controls enforced",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-4",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "4.1",
            "title": "Hardened baseline applied (CIS Benchmark)",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "4.2",
            "title": "Default credentials changed",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "4.3",
            "title": "Unnecessary services / ports disabled",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "4.4",
            "title": "Controller keyswitch / write-protection enabled",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "4.5",
            "title": "Session lock / automatic timeout configured",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-5",
        "score": 0,
        "passed": 0,
        "failed": 1,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "5.1",
            "title": "Inventory of accounts maintained",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "5.2",
            "title": "Default / shared accounts disabled",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "5.3",
            "title": "Dormant accounts disabled",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-6",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "6.1",
            "title": "Least-privilege access enforced",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "6.2",
            "title": "Multi-factor authentication for remote / privileged access",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "6.3",
            "title": "Access revoked on role change / departure",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-7",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "7.1",
            "title": "Asset covered by vulnerability scanning",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "7.2",
            "title": "Security patches applied within policy SLA",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "7.3",
            "title": "Firmware updates tracked and applied",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "7.4",
            "title": "Risk-based remediation plan documented",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-8",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "8.1",
            "title": "Security event logging enabled",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "8.2",
            "title": "Logs forwarded to central SIEM",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "8.3",
            "title": "Time synchronized to trusted source",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-11",
        "score": 50,
        "passed": 1,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "11.1",
            "title": "Configuration / project backups taken",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "11.2",
            "title": "Backups tested by restore",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "11.3",
            "title": "Backups stored isolated / offline",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-12",
        "score": 0,
        "passed": 0,
        "failed": 1,
        "notApplicable": 3,
        "subControls": [
          {
            "id": "12.1",
            "title": "Network device running supported firmware",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "12.2",
            "title": "Secure management protocols only (SSH/HTTPS)",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "12.3",
            "title": "Network segmentation / zone enforcement",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "12.4",
            "title": "Configuration backups maintained",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-13",
        "score": 50,
        "passed": 1,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "13.1",
            "title": "Traffic monitored on the segment (IDS/NSM)",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "13.2",
            "title": "Alerting on anomalous OT traffic",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "13.3",
            "title": "Port-level access control (802.1X / MAC)",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-14",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "14.1",
            "title": "Operators trained on OT security procedures",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-15",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "15.1",
            "title": "Vendor remote-access governed and logged",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-16",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "16.1",
            "title": "Vendor application security patches tracked",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "16.2",
            "title": "Hardened application configuration",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-17",
        "score": 50,
        "passed": 1,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "17.1",
            "title": "Asset mapped in incident-response runbook",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "17.2",
            "title": "Recovery contacts / escalation defined",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-18",
        "score": 0,
        "passed": 0,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "18.1",
            "title": "Included in scope of latest assessment",
            "severity": "low",
            "status": "failed"
          }
        ]
      }
    ]
  },
  {
    "assetId": "AST-0015",
    "score": 24,
    "calculatedAt": "2026-06-20T12:00:00.000Z",
    "controlResults": [
      {
        "controlId": "CIS-1",
        "score": 33,
        "passed": 1,
        "failed": 2,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "1.1",
            "title": "Maintained, authoritative asset inventory entry",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "1.2",
            "title": "Unauthorized assets are detected and addressed",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "1.3",
            "title": "Passive asset discovery in use on the segment",
            "severity": "low",
            "status": "failed"
          },
          {
            "id": "1.4",
            "title": "DHCP / address-assignment logging reconciled to inventory",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-2",
        "score": 0,
        "passed": 0,
        "failed": 1,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "2.1",
            "title": "Authorized software inventory maintained",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "2.2",
            "title": "Unsupported / end-of-life software removed or documented",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "2.3",
            "title": "Application allowlisting enforced",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-3",
        "score": 0,
        "passed": 0,
        "failed": 1,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "3.1",
            "title": "Sensitive configuration/project data inventory maintained",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "3.2",
            "title": "Data-at-rest encryption on engineering data",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "3.3",
            "title": "Removable-media controls enforced",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-4",
        "score": 33,
        "passed": 1,
        "failed": 2,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "4.1",
            "title": "Hardened baseline applied (CIS Benchmark)",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "4.2",
            "title": "Default credentials changed",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "4.3",
            "title": "Unnecessary services / ports disabled",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "4.4",
            "title": "Controller keyswitch / write-protection enabled",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "4.5",
            "title": "Session lock / automatic timeout configured",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-5",
        "score": 0,
        "passed": 0,
        "failed": 1,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "5.1",
            "title": "Inventory of accounts maintained",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "5.2",
            "title": "Default / shared accounts disabled",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "5.3",
            "title": "Dormant accounts disabled",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-6",
        "score": 0,
        "passed": 0,
        "failed": 1,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "6.1",
            "title": "Least-privilege access enforced",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "6.2",
            "title": "Multi-factor authentication for remote / privileged access",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "6.3",
            "title": "Access revoked on role change / departure",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-7",
        "score": 33,
        "passed": 1,
        "failed": 2,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "7.1",
            "title": "Asset covered by vulnerability scanning",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "7.2",
            "title": "Security patches applied within policy SLA",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "7.3",
            "title": "Firmware updates tracked and applied",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "7.4",
            "title": "Risk-based remediation plan documented",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-8",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "8.1",
            "title": "Security event logging enabled",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "8.2",
            "title": "Logs forwarded to central SIEM",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "8.3",
            "title": "Time synchronized to trusted source",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-11",
        "score": 0,
        "passed": 0,
        "failed": 2,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "11.1",
            "title": "Configuration / project backups taken",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "11.2",
            "title": "Backups tested by restore",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "11.3",
            "title": "Backups stored isolated / offline",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-12",
        "score": 0,
        "passed": 0,
        "failed": 1,
        "notApplicable": 3,
        "subControls": [
          {
            "id": "12.1",
            "title": "Network device running supported firmware",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "12.2",
            "title": "Secure management protocols only (SSH/HTTPS)",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "12.3",
            "title": "Network segmentation / zone enforcement",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "12.4",
            "title": "Configuration backups maintained",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-13",
        "score": 50,
        "passed": 1,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "13.1",
            "title": "Traffic monitored on the segment (IDS/NSM)",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "13.2",
            "title": "Alerting on anomalous OT traffic",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "13.3",
            "title": "Port-level access control (802.1X / MAC)",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-14",
        "score": 0,
        "passed": 0,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "14.1",
            "title": "Operators trained on OT security procedures",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-15",
        "score": 0,
        "passed": 0,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "15.1",
            "title": "Vendor remote-access governed and logged",
            "severity": "medium",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-16",
        "score": 0,
        "passed": 0,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "16.1",
            "title": "Vendor application security patches tracked",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "16.2",
            "title": "Hardened application configuration",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-17",
        "score": 50,
        "passed": 1,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "17.1",
            "title": "Asset mapped in incident-response runbook",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "17.2",
            "title": "Recovery contacts / escalation defined",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-18",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "18.1",
            "title": "Included in scope of latest assessment",
            "severity": "low",
            "status": "passed"
          }
        ]
      }
    ]
  },
  {
    "assetId": "AST-0016",
    "score": 72,
    "calculatedAt": "2026-06-25T12:00:00.000Z",
    "controlResults": [
      {
        "controlId": "CIS-1",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "1.1",
            "title": "Maintained, authoritative asset inventory entry",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "1.2",
            "title": "Unauthorized assets are detected and addressed",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "1.3",
            "title": "Passive asset discovery in use on the segment",
            "severity": "low",
            "status": "not_applicable"
          },
          {
            "id": "1.4",
            "title": "DHCP / address-assignment logging reconciled to inventory",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-2",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "2.1",
            "title": "Authorized software inventory maintained",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "2.2",
            "title": "Unsupported / end-of-life software removed or documented",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "2.3",
            "title": "Application allowlisting enforced",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-3",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "3.1",
            "title": "Sensitive configuration/project data inventory maintained",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "3.2",
            "title": "Data-at-rest encryption on engineering data",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "3.3",
            "title": "Removable-media controls enforced",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-4",
        "score": 75,
        "passed": 3,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "4.1",
            "title": "Hardened baseline applied (CIS Benchmark)",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "4.2",
            "title": "Default credentials changed",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "4.3",
            "title": "Unnecessary services / ports disabled",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "4.4",
            "title": "Controller keyswitch / write-protection enabled",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "4.5",
            "title": "Session lock / automatic timeout configured",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-5",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "5.1",
            "title": "Inventory of accounts maintained",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "5.2",
            "title": "Default / shared accounts disabled",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "5.3",
            "title": "Dormant accounts disabled",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-6",
        "score": 33,
        "passed": 1,
        "failed": 2,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "6.1",
            "title": "Least-privilege access enforced",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "6.2",
            "title": "Multi-factor authentication for remote / privileged access",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "6.3",
            "title": "Access revoked on role change / departure",
            "severity": "medium",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-7",
        "score": 100,
        "passed": 3,
        "failed": 0,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "7.1",
            "title": "Asset covered by vulnerability scanning",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "7.2",
            "title": "Security patches applied within policy SLA",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "7.3",
            "title": "Firmware updates tracked and applied",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "7.4",
            "title": "Risk-based remediation plan documented",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-8",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "8.1",
            "title": "Security event logging enabled",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "8.2",
            "title": "Logs forwarded to central SIEM",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "8.3",
            "title": "Time synchronized to trusted source",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-9",
        "score": 50,
        "passed": 1,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "9.1",
            "title": "Supported browser/email client only",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "9.2",
            "title": "URL / content filtering enforced",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-10",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "10.1",
            "title": "Anti-malware deployed and current",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "10.2",
            "title": "Removable-media auto-run disabled",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "10.3",
            "title": "Behavioral / EDR coverage",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-11",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "11.1",
            "title": "Configuration / project backups taken",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "11.2",
            "title": "Backups tested by restore",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "11.3",
            "title": "Backups stored isolated / offline",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-14",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "14.1",
            "title": "Operators trained on OT security procedures",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-15",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "15.1",
            "title": "Vendor remote-access governed and logged",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-16",
        "score": 100,
        "passed": 2,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "16.1",
            "title": "Vendor application security patches tracked",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "16.2",
            "title": "Hardened application configuration",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-17",
        "score": 50,
        "passed": 1,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "17.1",
            "title": "Asset mapped in incident-response runbook",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "17.2",
            "title": "Recovery contacts / escalation defined",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-18",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "18.1",
            "title": "Included in scope of latest assessment",
            "severity": "low",
            "status": "passed"
          }
        ]
      }
    ]
  },
  {
    "assetId": "AST-0017",
    "score": 44,
    "calculatedAt": "2026-06-09T12:00:00.000Z",
    "controlResults": [
      {
        "controlId": "CIS-1",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "1.1",
            "title": "Maintained, authoritative asset inventory entry",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "1.2",
            "title": "Unauthorized assets are detected and addressed",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "1.3",
            "title": "Passive asset discovery in use on the segment",
            "severity": "low",
            "status": "not_applicable"
          },
          {
            "id": "1.4",
            "title": "DHCP / address-assignment logging reconciled to inventory",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-2",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "2.1",
            "title": "Authorized software inventory maintained",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "2.2",
            "title": "Unsupported / end-of-life software removed or documented",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "2.3",
            "title": "Application allowlisting enforced",
            "severity": "medium",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-3",
        "score": 33,
        "passed": 1,
        "failed": 2,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "3.1",
            "title": "Sensitive configuration/project data inventory maintained",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "3.2",
            "title": "Data-at-rest encryption on engineering data",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "3.3",
            "title": "Removable-media controls enforced",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-4",
        "score": 50,
        "passed": 2,
        "failed": 2,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "4.1",
            "title": "Hardened baseline applied (CIS Benchmark)",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "4.2",
            "title": "Default credentials changed",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "4.3",
            "title": "Unnecessary services / ports disabled",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "4.4",
            "title": "Controller keyswitch / write-protection enabled",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "4.5",
            "title": "Session lock / automatic timeout configured",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-5",
        "score": 33,
        "passed": 1,
        "failed": 2,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "5.1",
            "title": "Inventory of accounts maintained",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "5.2",
            "title": "Default / shared accounts disabled",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "5.3",
            "title": "Dormant accounts disabled",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-6",
        "score": 33,
        "passed": 1,
        "failed": 2,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "6.1",
            "title": "Least-privilege access enforced",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "6.2",
            "title": "Multi-factor authentication for remote / privileged access",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "6.3",
            "title": "Access revoked on role change / departure",
            "severity": "medium",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-7",
        "score": 33,
        "passed": 1,
        "failed": 2,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "7.1",
            "title": "Asset covered by vulnerability scanning",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "7.2",
            "title": "Security patches applied within policy SLA",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "7.3",
            "title": "Firmware updates tracked and applied",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "7.4",
            "title": "Risk-based remediation plan documented",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-8",
        "score": 33,
        "passed": 1,
        "failed": 2,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "8.1",
            "title": "Security event logging enabled",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "8.2",
            "title": "Logs forwarded to central SIEM",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "8.3",
            "title": "Time synchronized to trusted source",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-9",
        "score": 50,
        "passed": 1,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "9.1",
            "title": "Supported browser/email client only",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "9.2",
            "title": "URL / content filtering enforced",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-10",
        "score": 33,
        "passed": 1,
        "failed": 2,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "10.1",
            "title": "Anti-malware deployed and current",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "10.2",
            "title": "Removable-media auto-run disabled",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "10.3",
            "title": "Behavioral / EDR coverage",
            "severity": "medium",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-11",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "11.1",
            "title": "Configuration / project backups taken",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "11.2",
            "title": "Backups tested by restore",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "11.3",
            "title": "Backups stored isolated / offline",
            "severity": "medium",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-14",
        "score": 0,
        "passed": 0,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "14.1",
            "title": "Operators trained on OT security procedures",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-15",
        "score": 0,
        "passed": 0,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "15.1",
            "title": "Vendor remote-access governed and logged",
            "severity": "medium",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-16",
        "score": 50,
        "passed": 1,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "16.1",
            "title": "Vendor application security patches tracked",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "16.2",
            "title": "Hardened application configuration",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-17",
        "score": 50,
        "passed": 1,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "17.1",
            "title": "Asset mapped in incident-response runbook",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "17.2",
            "title": "Recovery contacts / escalation defined",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-18",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "18.1",
            "title": "Included in scope of latest assessment",
            "severity": "low",
            "status": "passed"
          }
        ]
      }
    ]
  },
  {
    "assetId": "AST-0021",
    "score": 69,
    "calculatedAt": "2026-06-13T12:00:00.000Z",
    "controlResults": [
      {
        "controlId": "CIS-1",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "1.1",
            "title": "Maintained, authoritative asset inventory entry",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "1.2",
            "title": "Unauthorized assets are detected and addressed",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "1.3",
            "title": "Passive asset discovery in use on the segment",
            "severity": "low",
            "status": "failed"
          },
          {
            "id": "1.4",
            "title": "DHCP / address-assignment logging reconciled to inventory",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-2",
        "score": 0,
        "passed": 0,
        "failed": 1,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "2.1",
            "title": "Authorized software inventory maintained",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "2.2",
            "title": "Unsupported / end-of-life software removed or documented",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "2.3",
            "title": "Application allowlisting enforced",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-3",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "3.1",
            "title": "Sensitive configuration/project data inventory maintained",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "3.2",
            "title": "Data-at-rest encryption on engineering data",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "3.3",
            "title": "Removable-media controls enforced",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-4",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "4.1",
            "title": "Hardened baseline applied (CIS Benchmark)",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "4.2",
            "title": "Default credentials changed",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "4.3",
            "title": "Unnecessary services / ports disabled",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "4.4",
            "title": "Controller keyswitch / write-protection enabled",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "4.5",
            "title": "Session lock / automatic timeout configured",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-5",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "5.1",
            "title": "Inventory of accounts maintained",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "5.2",
            "title": "Default / shared accounts disabled",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "5.3",
            "title": "Dormant accounts disabled",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-6",
        "score": 0,
        "passed": 0,
        "failed": 1,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "6.1",
            "title": "Least-privilege access enforced",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "6.2",
            "title": "Multi-factor authentication for remote / privileged access",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "6.3",
            "title": "Access revoked on role change / departure",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-7",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "7.1",
            "title": "Asset covered by vulnerability scanning",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "7.2",
            "title": "Security patches applied within policy SLA",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "7.3",
            "title": "Firmware updates tracked and applied",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "7.4",
            "title": "Risk-based remediation plan documented",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-8",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "8.1",
            "title": "Security event logging enabled",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "8.2",
            "title": "Logs forwarded to central SIEM",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "8.3",
            "title": "Time synchronized to trusted source",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-11",
        "score": 50,
        "passed": 1,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "11.1",
            "title": "Configuration / project backups taken",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "11.2",
            "title": "Backups tested by restore",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "11.3",
            "title": "Backups stored isolated / offline",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-12",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 3,
        "subControls": [
          {
            "id": "12.1",
            "title": "Network device running supported firmware",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "12.2",
            "title": "Secure management protocols only (SSH/HTTPS)",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "12.3",
            "title": "Network segmentation / zone enforcement",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "12.4",
            "title": "Configuration backups maintained",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-13",
        "score": 50,
        "passed": 1,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "13.1",
            "title": "Traffic monitored on the segment (IDS/NSM)",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "13.2",
            "title": "Alerting on anomalous OT traffic",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "13.3",
            "title": "Port-level access control (802.1X / MAC)",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-14",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "14.1",
            "title": "Operators trained on OT security procedures",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-15",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "15.1",
            "title": "Vendor remote-access governed and logged",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-16",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "16.1",
            "title": "Vendor application security patches tracked",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "16.2",
            "title": "Hardened application configuration",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-17",
        "score": 50,
        "passed": 1,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "17.1",
            "title": "Asset mapped in incident-response runbook",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "17.2",
            "title": "Recovery contacts / escalation defined",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-18",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "18.1",
            "title": "Included in scope of latest assessment",
            "severity": "low",
            "status": "passed"
          }
        ]
      }
    ]
  },
  {
    "assetId": "AST-0023",
    "score": 95,
    "calculatedAt": "2026-06-13T12:00:00.000Z",
    "controlResults": [
      {
        "controlId": "CIS-1",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "1.1",
            "title": "Maintained, authoritative asset inventory entry",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "1.2",
            "title": "Unauthorized assets are detected and addressed",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "1.3",
            "title": "Passive asset discovery in use on the segment",
            "severity": "low",
            "status": "passed"
          },
          {
            "id": "1.4",
            "title": "DHCP / address-assignment logging reconciled to inventory",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-2",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "2.1",
            "title": "Authorized software inventory maintained",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "2.2",
            "title": "Unsupported / end-of-life software removed or documented",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "2.3",
            "title": "Application allowlisting enforced",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-3",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "3.1",
            "title": "Sensitive configuration/project data inventory maintained",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "3.2",
            "title": "Data-at-rest encryption on engineering data",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "3.3",
            "title": "Removable-media controls enforced",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-4",
        "score": 100,
        "passed": 3,
        "failed": 0,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "4.1",
            "title": "Hardened baseline applied (CIS Benchmark)",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "4.2",
            "title": "Default credentials changed",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "4.3",
            "title": "Unnecessary services / ports disabled",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "4.4",
            "title": "Controller keyswitch / write-protection enabled",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "4.5",
            "title": "Session lock / automatic timeout configured",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-5",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "5.1",
            "title": "Inventory of accounts maintained",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "5.2",
            "title": "Default / shared accounts disabled",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "5.3",
            "title": "Dormant accounts disabled",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-6",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "6.1",
            "title": "Least-privilege access enforced",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "6.2",
            "title": "Multi-factor authentication for remote / privileged access",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "6.3",
            "title": "Access revoked on role change / departure",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-7",
        "score": 100,
        "passed": 3,
        "failed": 0,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "7.1",
            "title": "Asset covered by vulnerability scanning",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "7.2",
            "title": "Security patches applied within policy SLA",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "7.3",
            "title": "Firmware updates tracked and applied",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "7.4",
            "title": "Risk-based remediation plan documented",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-8",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "8.1",
            "title": "Security event logging enabled",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "8.2",
            "title": "Logs forwarded to central SIEM",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "8.3",
            "title": "Time synchronized to trusted source",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-11",
        "score": 100,
        "passed": 2,
        "failed": 0,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "11.1",
            "title": "Configuration / project backups taken",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "11.2",
            "title": "Backups tested by restore",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "11.3",
            "title": "Backups stored isolated / offline",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-12",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 3,
        "subControls": [
          {
            "id": "12.1",
            "title": "Network device running supported firmware",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "12.2",
            "title": "Secure management protocols only (SSH/HTTPS)",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "12.3",
            "title": "Network segmentation / zone enforcement",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "12.4",
            "title": "Configuration backups maintained",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-13",
        "score": 100,
        "passed": 2,
        "failed": 0,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "13.1",
            "title": "Traffic monitored on the segment (IDS/NSM)",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "13.2",
            "title": "Alerting on anomalous OT traffic",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "13.3",
            "title": "Port-level access control (802.1X / MAC)",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-14",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "14.1",
            "title": "Operators trained on OT security procedures",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-15",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "15.1",
            "title": "Vendor remote-access governed and logged",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-16",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "16.1",
            "title": "Vendor application security patches tracked",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "16.2",
            "title": "Hardened application configuration",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-17",
        "score": 50,
        "passed": 1,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "17.1",
            "title": "Asset mapped in incident-response runbook",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "17.2",
            "title": "Recovery contacts / escalation defined",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-18",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "18.1",
            "title": "Included in scope of latest assessment",
            "severity": "low",
            "status": "passed"
          }
        ]
      }
    ]
  },
  {
    "assetId": "AST-0025",
    "score": 39,
    "calculatedAt": "2026-06-15T12:00:00.000Z",
    "controlResults": [
      {
        "controlId": "CIS-1",
        "score": 33,
        "passed": 1,
        "failed": 2,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "1.1",
            "title": "Maintained, authoritative asset inventory entry",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "1.2",
            "title": "Unauthorized assets are detected and addressed",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "1.3",
            "title": "Passive asset discovery in use on the segment",
            "severity": "low",
            "status": "failed"
          },
          {
            "id": "1.4",
            "title": "DHCP / address-assignment logging reconciled to inventory",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-2",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "2.1",
            "title": "Authorized software inventory maintained",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "2.2",
            "title": "Unsupported / end-of-life software removed or documented",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "2.3",
            "title": "Application allowlisting enforced",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-3",
        "score": 0,
        "passed": 0,
        "failed": 1,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "3.1",
            "title": "Sensitive configuration/project data inventory maintained",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "3.2",
            "title": "Data-at-rest encryption on engineering data",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "3.3",
            "title": "Removable-media controls enforced",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-4",
        "score": 33,
        "passed": 1,
        "failed": 2,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "4.1",
            "title": "Hardened baseline applied (CIS Benchmark)",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "4.2",
            "title": "Default credentials changed",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "4.3",
            "title": "Unnecessary services / ports disabled",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "4.4",
            "title": "Controller keyswitch / write-protection enabled",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "4.5",
            "title": "Session lock / automatic timeout configured",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-5",
        "score": 0,
        "passed": 0,
        "failed": 1,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "5.1",
            "title": "Inventory of accounts maintained",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "5.2",
            "title": "Default / shared accounts disabled",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "5.3",
            "title": "Dormant accounts disabled",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-6",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "6.1",
            "title": "Least-privilege access enforced",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "6.2",
            "title": "Multi-factor authentication for remote / privileged access",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "6.3",
            "title": "Access revoked on role change / departure",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-7",
        "score": 33,
        "passed": 1,
        "failed": 2,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "7.1",
            "title": "Asset covered by vulnerability scanning",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "7.2",
            "title": "Security patches applied within policy SLA",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "7.3",
            "title": "Firmware updates tracked and applied",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "7.4",
            "title": "Risk-based remediation plan documented",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-8",
        "score": 0,
        "passed": 0,
        "failed": 1,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "8.1",
            "title": "Security event logging enabled",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "8.2",
            "title": "Logs forwarded to central SIEM",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "8.3",
            "title": "Time synchronized to trusted source",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-11",
        "score": 50,
        "passed": 1,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "11.1",
            "title": "Configuration / project backups taken",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "11.2",
            "title": "Backups tested by restore",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "11.3",
            "title": "Backups stored isolated / offline",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-12",
        "score": 0,
        "passed": 0,
        "failed": 1,
        "notApplicable": 3,
        "subControls": [
          {
            "id": "12.1",
            "title": "Network device running supported firmware",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "12.2",
            "title": "Secure management protocols only (SSH/HTTPS)",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "12.3",
            "title": "Network segmentation / zone enforcement",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "12.4",
            "title": "Configuration backups maintained",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-13",
        "score": 50,
        "passed": 1,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "13.1",
            "title": "Traffic monitored on the segment (IDS/NSM)",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "13.2",
            "title": "Alerting on anomalous OT traffic",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "13.3",
            "title": "Port-level access control (802.1X / MAC)",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-14",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "14.1",
            "title": "Operators trained on OT security procedures",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-15",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "15.1",
            "title": "Vendor remote-access governed and logged",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-16",
        "score": 0,
        "passed": 0,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "16.1",
            "title": "Vendor application security patches tracked",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "16.2",
            "title": "Hardened application configuration",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-17",
        "score": 50,
        "passed": 1,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "17.1",
            "title": "Asset mapped in incident-response runbook",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "17.2",
            "title": "Recovery contacts / escalation defined",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-18",
        "score": 0,
        "passed": 0,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "18.1",
            "title": "Included in scope of latest assessment",
            "severity": "low",
            "status": "failed"
          }
        ]
      }
    ]
  },
  {
    "assetId": "AST-0027",
    "score": 92,
    "calculatedAt": "2026-06-09T12:00:00.000Z",
    "controlResults": [
      {
        "controlId": "CIS-1",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "1.1",
            "title": "Maintained, authoritative asset inventory entry",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "1.2",
            "title": "Unauthorized assets are detected and addressed",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "1.3",
            "title": "Passive asset discovery in use on the segment",
            "severity": "low",
            "status": "passed"
          },
          {
            "id": "1.4",
            "title": "DHCP / address-assignment logging reconciled to inventory",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-2",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "2.1",
            "title": "Authorized software inventory maintained",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "2.2",
            "title": "Unsupported / end-of-life software removed or documented",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "2.3",
            "title": "Application allowlisting enforced",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-3",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "3.1",
            "title": "Sensitive configuration/project data inventory maintained",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "3.2",
            "title": "Data-at-rest encryption on engineering data",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "3.3",
            "title": "Removable-media controls enforced",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-4",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "4.1",
            "title": "Hardened baseline applied (CIS Benchmark)",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "4.2",
            "title": "Default credentials changed",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "4.3",
            "title": "Unnecessary services / ports disabled",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "4.4",
            "title": "Controller keyswitch / write-protection enabled",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "4.5",
            "title": "Session lock / automatic timeout configured",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-5",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "5.1",
            "title": "Inventory of accounts maintained",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "5.2",
            "title": "Default / shared accounts disabled",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "5.3",
            "title": "Dormant accounts disabled",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-6",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "6.1",
            "title": "Least-privilege access enforced",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "6.2",
            "title": "Multi-factor authentication for remote / privileged access",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "6.3",
            "title": "Access revoked on role change / departure",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-7",
        "score": 100,
        "passed": 3,
        "failed": 0,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "7.1",
            "title": "Asset covered by vulnerability scanning",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "7.2",
            "title": "Security patches applied within policy SLA",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "7.3",
            "title": "Firmware updates tracked and applied",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "7.4",
            "title": "Risk-based remediation plan documented",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-8",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "8.1",
            "title": "Security event logging enabled",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "8.2",
            "title": "Logs forwarded to central SIEM",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "8.3",
            "title": "Time synchronized to trusted source",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-11",
        "score": 100,
        "passed": 2,
        "failed": 0,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "11.1",
            "title": "Configuration / project backups taken",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "11.2",
            "title": "Backups tested by restore",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "11.3",
            "title": "Backups stored isolated / offline",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-12",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 3,
        "subControls": [
          {
            "id": "12.1",
            "title": "Network device running supported firmware",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "12.2",
            "title": "Secure management protocols only (SSH/HTTPS)",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "12.3",
            "title": "Network segmentation / zone enforcement",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "12.4",
            "title": "Configuration backups maintained",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-13",
        "score": 50,
        "passed": 1,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "13.1",
            "title": "Traffic monitored on the segment (IDS/NSM)",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "13.2",
            "title": "Alerting on anomalous OT traffic",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "13.3",
            "title": "Port-level access control (802.1X / MAC)",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-14",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "14.1",
            "title": "Operators trained on OT security procedures",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-15",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "15.1",
            "title": "Vendor remote-access governed and logged",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-16",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "16.1",
            "title": "Vendor application security patches tracked",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "16.2",
            "title": "Hardened application configuration",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-17",
        "score": 100,
        "passed": 2,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "17.1",
            "title": "Asset mapped in incident-response runbook",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "17.2",
            "title": "Recovery contacts / escalation defined",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-18",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "18.1",
            "title": "Included in scope of latest assessment",
            "severity": "low",
            "status": "passed"
          }
        ]
      }
    ]
  },
  {
    "assetId": "AST-0030",
    "score": 88,
    "calculatedAt": "2026-06-07T12:00:00.000Z",
    "controlResults": [
      {
        "controlId": "CIS-1",
        "score": 75,
        "passed": 3,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "1.1",
            "title": "Maintained, authoritative asset inventory entry",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "1.2",
            "title": "Unauthorized assets are detected and addressed",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "1.3",
            "title": "Passive asset discovery in use on the segment",
            "severity": "low",
            "status": "passed"
          },
          {
            "id": "1.4",
            "title": "DHCP / address-assignment logging reconciled to inventory",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-4",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "4.1",
            "title": "Hardened baseline applied (CIS Benchmark)",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "4.2",
            "title": "Default credentials changed",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "4.3",
            "title": "Unnecessary services / ports disabled",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "4.4",
            "title": "Controller keyswitch / write-protection enabled",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "4.5",
            "title": "Session lock / automatic timeout configured",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-5",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "5.1",
            "title": "Inventory of accounts maintained",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "5.2",
            "title": "Default / shared accounts disabled",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "5.3",
            "title": "Dormant accounts disabled",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-6",
        "score": 100,
        "passed": 3,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "6.1",
            "title": "Least-privilege access enforced",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "6.2",
            "title": "Multi-factor authentication for remote / privileged access",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "6.3",
            "title": "Access revoked on role change / departure",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-7",
        "score": 75,
        "passed": 3,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "7.1",
            "title": "Asset covered by vulnerability scanning",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "7.2",
            "title": "Security patches applied within policy SLA",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "7.3",
            "title": "Firmware updates tracked and applied",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "7.4",
            "title": "Risk-based remediation plan documented",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-8",
        "score": 100,
        "passed": 3,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "8.1",
            "title": "Security event logging enabled",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "8.2",
            "title": "Logs forwarded to central SIEM",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "8.3",
            "title": "Time synchronized to trusted source",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-12",
        "score": 100,
        "passed": 4,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "12.1",
            "title": "Network device running supported firmware",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "12.2",
            "title": "Secure management protocols only (SSH/HTTPS)",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "12.3",
            "title": "Network segmentation / zone enforcement",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "12.4",
            "title": "Configuration backups maintained",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-13",
        "score": 100,
        "passed": 3,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "13.1",
            "title": "Traffic monitored on the segment (IDS/NSM)",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "13.2",
            "title": "Alerting on anomalous OT traffic",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "13.3",
            "title": "Port-level access control (802.1X / MAC)",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-15",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "15.1",
            "title": "Vendor remote-access governed and logged",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-17",
        "score": 100,
        "passed": 2,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "17.1",
            "title": "Asset mapped in incident-response runbook",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "17.2",
            "title": "Recovery contacts / escalation defined",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-18",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "18.1",
            "title": "Included in scope of latest assessment",
            "severity": "low",
            "status": "passed"
          }
        ]
      }
    ]
  },
  {
    "assetId": "AST-0031",
    "score": 93,
    "calculatedAt": "2026-06-16T12:00:00.000Z",
    "controlResults": [
      {
        "controlId": "CIS-1",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "1.1",
            "title": "Maintained, authoritative asset inventory entry",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "1.2",
            "title": "Unauthorized assets are detected and addressed",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "1.3",
            "title": "Passive asset discovery in use on the segment",
            "severity": "low",
            "status": "passed"
          },
          {
            "id": "1.4",
            "title": "DHCP / address-assignment logging reconciled to inventory",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-2",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "2.1",
            "title": "Authorized software inventory maintained",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "2.2",
            "title": "Unsupported / end-of-life software removed or documented",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "2.3",
            "title": "Application allowlisting enforced",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-3",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "3.1",
            "title": "Sensitive configuration/project data inventory maintained",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "3.2",
            "title": "Data-at-rest encryption on engineering data",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "3.3",
            "title": "Removable-media controls enforced",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-4",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "4.1",
            "title": "Hardened baseline applied (CIS Benchmark)",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "4.2",
            "title": "Default credentials changed",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "4.3",
            "title": "Unnecessary services / ports disabled",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "4.4",
            "title": "Controller keyswitch / write-protection enabled",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "4.5",
            "title": "Session lock / automatic timeout configured",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-5",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "5.1",
            "title": "Inventory of accounts maintained",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "5.2",
            "title": "Default / shared accounts disabled",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "5.3",
            "title": "Dormant accounts disabled",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-6",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "6.1",
            "title": "Least-privilege access enforced",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "6.2",
            "title": "Multi-factor authentication for remote / privileged access",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "6.3",
            "title": "Access revoked on role change / departure",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-7",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "7.1",
            "title": "Asset covered by vulnerability scanning",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "7.2",
            "title": "Security patches applied within policy SLA",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "7.3",
            "title": "Firmware updates tracked and applied",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "7.4",
            "title": "Risk-based remediation plan documented",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-8",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "8.1",
            "title": "Security event logging enabled",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "8.2",
            "title": "Logs forwarded to central SIEM",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "8.3",
            "title": "Time synchronized to trusted source",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-11",
        "score": 100,
        "passed": 2,
        "failed": 0,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "11.1",
            "title": "Configuration / project backups taken",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "11.2",
            "title": "Backups tested by restore",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "11.3",
            "title": "Backups stored isolated / offline",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-12",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 3,
        "subControls": [
          {
            "id": "12.1",
            "title": "Network device running supported firmware",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "12.2",
            "title": "Secure management protocols only (SSH/HTTPS)",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "12.3",
            "title": "Network segmentation / zone enforcement",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "12.4",
            "title": "Configuration backups maintained",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-13",
        "score": 100,
        "passed": 2,
        "failed": 0,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "13.1",
            "title": "Traffic monitored on the segment (IDS/NSM)",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "13.2",
            "title": "Alerting on anomalous OT traffic",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "13.3",
            "title": "Port-level access control (802.1X / MAC)",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-14",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "14.1",
            "title": "Operators trained on OT security procedures",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-15",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "15.1",
            "title": "Vendor remote-access governed and logged",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-16",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "16.1",
            "title": "Vendor application security patches tracked",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "16.2",
            "title": "Hardened application configuration",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-17",
        "score": 100,
        "passed": 2,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "17.1",
            "title": "Asset mapped in incident-response runbook",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "17.2",
            "title": "Recovery contacts / escalation defined",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-18",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "18.1",
            "title": "Included in scope of latest assessment",
            "severity": "low",
            "status": "passed"
          }
        ]
      }
    ]
  },
  {
    "assetId": "AST-0033",
    "score": 89,
    "calculatedAt": "2026-06-19T12:00:00.000Z",
    "controlResults": [
      {
        "controlId": "CIS-1",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "1.1",
            "title": "Maintained, authoritative asset inventory entry",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "1.2",
            "title": "Unauthorized assets are detected and addressed",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "1.3",
            "title": "Passive asset discovery in use on the segment",
            "severity": "low",
            "status": "passed"
          },
          {
            "id": "1.4",
            "title": "DHCP / address-assignment logging reconciled to inventory",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-2",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "2.1",
            "title": "Authorized software inventory maintained",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "2.2",
            "title": "Unsupported / end-of-life software removed or documented",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "2.3",
            "title": "Application allowlisting enforced",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-3",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "3.1",
            "title": "Sensitive configuration/project data inventory maintained",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "3.2",
            "title": "Data-at-rest encryption on engineering data",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "3.3",
            "title": "Removable-media controls enforced",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-4",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "4.1",
            "title": "Hardened baseline applied (CIS Benchmark)",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "4.2",
            "title": "Default credentials changed",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "4.3",
            "title": "Unnecessary services / ports disabled",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "4.4",
            "title": "Controller keyswitch / write-protection enabled",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "4.5",
            "title": "Session lock / automatic timeout configured",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-5",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "5.1",
            "title": "Inventory of accounts maintained",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "5.2",
            "title": "Default / shared accounts disabled",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "5.3",
            "title": "Dormant accounts disabled",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-6",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "6.1",
            "title": "Least-privilege access enforced",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "6.2",
            "title": "Multi-factor authentication for remote / privileged access",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "6.3",
            "title": "Access revoked on role change / departure",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-7",
        "score": 100,
        "passed": 3,
        "failed": 0,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "7.1",
            "title": "Asset covered by vulnerability scanning",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "7.2",
            "title": "Security patches applied within policy SLA",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "7.3",
            "title": "Firmware updates tracked and applied",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "7.4",
            "title": "Risk-based remediation plan documented",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-8",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "8.1",
            "title": "Security event logging enabled",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "8.2",
            "title": "Logs forwarded to central SIEM",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "8.3",
            "title": "Time synchronized to trusted source",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-11",
        "score": 50,
        "passed": 1,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "11.1",
            "title": "Configuration / project backups taken",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "11.2",
            "title": "Backups tested by restore",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "11.3",
            "title": "Backups stored isolated / offline",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-12",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 3,
        "subControls": [
          {
            "id": "12.1",
            "title": "Network device running supported firmware",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "12.2",
            "title": "Secure management protocols only (SSH/HTTPS)",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "12.3",
            "title": "Network segmentation / zone enforcement",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "12.4",
            "title": "Configuration backups maintained",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-13",
        "score": 100,
        "passed": 2,
        "failed": 0,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "13.1",
            "title": "Traffic monitored on the segment (IDS/NSM)",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "13.2",
            "title": "Alerting on anomalous OT traffic",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "13.3",
            "title": "Port-level access control (802.1X / MAC)",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-14",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "14.1",
            "title": "Operators trained on OT security procedures",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-15",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "15.1",
            "title": "Vendor remote-access governed and logged",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-16",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "16.1",
            "title": "Vendor application security patches tracked",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "16.2",
            "title": "Hardened application configuration",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-17",
        "score": 50,
        "passed": 1,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "17.1",
            "title": "Asset mapped in incident-response runbook",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "17.2",
            "title": "Recovery contacts / escalation defined",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-18",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "18.1",
            "title": "Included in scope of latest assessment",
            "severity": "low",
            "status": "passed"
          }
        ]
      }
    ]
  },
  {
    "assetId": "AST-0034",
    "score": 73,
    "calculatedAt": "2026-06-24T12:00:00.000Z",
    "controlResults": [
      {
        "controlId": "CIS-1",
        "score": 50,
        "passed": 2,
        "failed": 2,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "1.1",
            "title": "Maintained, authoritative asset inventory entry",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "1.2",
            "title": "Unauthorized assets are detected and addressed",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "1.3",
            "title": "Passive asset discovery in use on the segment",
            "severity": "low",
            "status": "failed"
          },
          {
            "id": "1.4",
            "title": "DHCP / address-assignment logging reconciled to inventory",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-4",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "4.1",
            "title": "Hardened baseline applied (CIS Benchmark)",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "4.2",
            "title": "Default credentials changed",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "4.3",
            "title": "Unnecessary services / ports disabled",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "4.4",
            "title": "Controller keyswitch / write-protection enabled",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "4.5",
            "title": "Session lock / automatic timeout configured",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-5",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "5.1",
            "title": "Inventory of accounts maintained",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "5.2",
            "title": "Default / shared accounts disabled",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "5.3",
            "title": "Dormant accounts disabled",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-6",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "6.1",
            "title": "Least-privilege access enforced",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "6.2",
            "title": "Multi-factor authentication for remote / privileged access",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "6.3",
            "title": "Access revoked on role change / departure",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-7",
        "score": 75,
        "passed": 3,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "7.1",
            "title": "Asset covered by vulnerability scanning",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "7.2",
            "title": "Security patches applied within policy SLA",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "7.3",
            "title": "Firmware updates tracked and applied",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "7.4",
            "title": "Risk-based remediation plan documented",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-8",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "8.1",
            "title": "Security event logging enabled",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "8.2",
            "title": "Logs forwarded to central SIEM",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "8.3",
            "title": "Time synchronized to trusted source",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-12",
        "score": 75,
        "passed": 3,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "12.1",
            "title": "Network device running supported firmware",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "12.2",
            "title": "Secure management protocols only (SSH/HTTPS)",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "12.3",
            "title": "Network segmentation / zone enforcement",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "12.4",
            "title": "Configuration backups maintained",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-13",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "13.1",
            "title": "Traffic monitored on the segment (IDS/NSM)",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "13.2",
            "title": "Alerting on anomalous OT traffic",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "13.3",
            "title": "Port-level access control (802.1X / MAC)",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-15",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "15.1",
            "title": "Vendor remote-access governed and logged",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-17",
        "score": 100,
        "passed": 2,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "17.1",
            "title": "Asset mapped in incident-response runbook",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "17.2",
            "title": "Recovery contacts / escalation defined",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-18",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "18.1",
            "title": "Included in scope of latest assessment",
            "severity": "low",
            "status": "passed"
          }
        ]
      }
    ]
  },
  {
    "assetId": "AST-0035",
    "score": 94,
    "calculatedAt": "2026-06-22T12:00:00.000Z",
    "controlResults": [
      {
        "controlId": "CIS-1",
        "score": 100,
        "passed": 3,
        "failed": 0,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "1.1",
            "title": "Maintained, authoritative asset inventory entry",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "1.2",
            "title": "Unauthorized assets are detected and addressed",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "1.3",
            "title": "Passive asset discovery in use on the segment",
            "severity": "low",
            "status": "passed"
          },
          {
            "id": "1.4",
            "title": "DHCP / address-assignment logging reconciled to inventory",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-2",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "2.1",
            "title": "Authorized software inventory maintained",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "2.2",
            "title": "Unsupported / end-of-life software removed or documented",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "2.3",
            "title": "Application allowlisting enforced",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-3",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "3.1",
            "title": "Sensitive configuration/project data inventory maintained",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "3.2",
            "title": "Data-at-rest encryption on engineering data",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "3.3",
            "title": "Removable-media controls enforced",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-4",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "4.1",
            "title": "Hardened baseline applied (CIS Benchmark)",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "4.2",
            "title": "Default credentials changed",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "4.3",
            "title": "Unnecessary services / ports disabled",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "4.4",
            "title": "Controller keyswitch / write-protection enabled",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "4.5",
            "title": "Session lock / automatic timeout configured",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-5",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "5.1",
            "title": "Inventory of accounts maintained",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "5.2",
            "title": "Default / shared accounts disabled",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "5.3",
            "title": "Dormant accounts disabled",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-6",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "6.1",
            "title": "Least-privilege access enforced",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "6.2",
            "title": "Multi-factor authentication for remote / privileged access",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "6.3",
            "title": "Access revoked on role change / departure",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-7",
        "score": 100,
        "passed": 3,
        "failed": 0,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "7.1",
            "title": "Asset covered by vulnerability scanning",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "7.2",
            "title": "Security patches applied within policy SLA",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "7.3",
            "title": "Firmware updates tracked and applied",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "7.4",
            "title": "Risk-based remediation plan documented",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-8",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "8.1",
            "title": "Security event logging enabled",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "8.2",
            "title": "Logs forwarded to central SIEM",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "8.3",
            "title": "Time synchronized to trusted source",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-11",
        "score": 50,
        "passed": 1,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "11.1",
            "title": "Configuration / project backups taken",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "11.2",
            "title": "Backups tested by restore",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "11.3",
            "title": "Backups stored isolated / offline",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-12",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 3,
        "subControls": [
          {
            "id": "12.1",
            "title": "Network device running supported firmware",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "12.2",
            "title": "Secure management protocols only (SSH/HTTPS)",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "12.3",
            "title": "Network segmentation / zone enforcement",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "12.4",
            "title": "Configuration backups maintained",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-13",
        "score": 100,
        "passed": 2,
        "failed": 0,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "13.1",
            "title": "Traffic monitored on the segment (IDS/NSM)",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "13.2",
            "title": "Alerting on anomalous OT traffic",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "13.3",
            "title": "Port-level access control (802.1X / MAC)",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-14",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "14.1",
            "title": "Operators trained on OT security procedures",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-15",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "15.1",
            "title": "Vendor remote-access governed and logged",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-16",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "16.1",
            "title": "Vendor application security patches tracked",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "16.2",
            "title": "Hardened application configuration",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-17",
        "score": 100,
        "passed": 2,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "17.1",
            "title": "Asset mapped in incident-response runbook",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "17.2",
            "title": "Recovery contacts / escalation defined",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-18",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "18.1",
            "title": "Included in scope of latest assessment",
            "severity": "low",
            "status": "passed"
          }
        ]
      }
    ]
  },
  {
    "assetId": "AST-0036",
    "score": 51,
    "calculatedAt": "2026-06-23T12:00:00.000Z",
    "controlResults": [
      {
        "controlId": "CIS-1",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "1.1",
            "title": "Maintained, authoritative asset inventory entry",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "1.2",
            "title": "Unauthorized assets are detected and addressed",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "1.3",
            "title": "Passive asset discovery in use on the segment",
            "severity": "low",
            "status": "not_applicable"
          },
          {
            "id": "1.4",
            "title": "DHCP / address-assignment logging reconciled to inventory",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-2",
        "score": 33,
        "passed": 1,
        "failed": 2,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "2.1",
            "title": "Authorized software inventory maintained",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "2.2",
            "title": "Unsupported / end-of-life software removed or documented",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "2.3",
            "title": "Application allowlisting enforced",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-3",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "3.1",
            "title": "Sensitive configuration/project data inventory maintained",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "3.2",
            "title": "Data-at-rest encryption on engineering data",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "3.3",
            "title": "Removable-media controls enforced",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-4",
        "score": 75,
        "passed": 3,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "4.1",
            "title": "Hardened baseline applied (CIS Benchmark)",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "4.2",
            "title": "Default credentials changed",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "4.3",
            "title": "Unnecessary services / ports disabled",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "4.4",
            "title": "Controller keyswitch / write-protection enabled",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "4.5",
            "title": "Session lock / automatic timeout configured",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-5",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "5.1",
            "title": "Inventory of accounts maintained",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "5.2",
            "title": "Default / shared accounts disabled",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "5.3",
            "title": "Dormant accounts disabled",
            "severity": "medium",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-6",
        "score": 33,
        "passed": 1,
        "failed": 2,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "6.1",
            "title": "Least-privilege access enforced",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "6.2",
            "title": "Multi-factor authentication for remote / privileged access",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "6.3",
            "title": "Access revoked on role change / departure",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-7",
        "score": 33,
        "passed": 1,
        "failed": 2,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "7.1",
            "title": "Asset covered by vulnerability scanning",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "7.2",
            "title": "Security patches applied within policy SLA",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "7.3",
            "title": "Firmware updates tracked and applied",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "7.4",
            "title": "Risk-based remediation plan documented",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-8",
        "score": 33,
        "passed": 1,
        "failed": 2,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "8.1",
            "title": "Security event logging enabled",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "8.2",
            "title": "Logs forwarded to central SIEM",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "8.3",
            "title": "Time synchronized to trusted source",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-9",
        "score": 50,
        "passed": 1,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "9.1",
            "title": "Supported browser/email client only",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "9.2",
            "title": "URL / content filtering enforced",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-10",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "10.1",
            "title": "Anti-malware deployed and current",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "10.2",
            "title": "Removable-media auto-run disabled",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "10.3",
            "title": "Behavioral / EDR coverage",
            "severity": "medium",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-11",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "11.1",
            "title": "Configuration / project backups taken",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "11.2",
            "title": "Backups tested by restore",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "11.3",
            "title": "Backups stored isolated / offline",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-14",
        "score": 0,
        "passed": 0,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "14.1",
            "title": "Operators trained on OT security procedures",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-15",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "15.1",
            "title": "Vendor remote-access governed and logged",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-16",
        "score": 50,
        "passed": 1,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "16.1",
            "title": "Vendor application security patches tracked",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "16.2",
            "title": "Hardened application configuration",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-17",
        "score": 50,
        "passed": 1,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "17.1",
            "title": "Asset mapped in incident-response runbook",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "17.2",
            "title": "Recovery contacts / escalation defined",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-18",
        "score": 0,
        "passed": 0,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "18.1",
            "title": "Included in scope of latest assessment",
            "severity": "low",
            "status": "failed"
          }
        ]
      }
    ]
  },
  {
    "assetId": "AST-0037",
    "score": 60,
    "calculatedAt": "2026-06-18T12:00:00.000Z",
    "controlResults": [
      {
        "controlId": "CIS-1",
        "score": 50,
        "passed": 1,
        "failed": 1,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "1.1",
            "title": "Maintained, authoritative asset inventory entry",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "1.2",
            "title": "Unauthorized assets are detected and addressed",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "1.3",
            "title": "Passive asset discovery in use on the segment",
            "severity": "low",
            "status": "failed"
          },
          {
            "id": "1.4",
            "title": "DHCP / address-assignment logging reconciled to inventory",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-4",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 4,
        "subControls": [
          {
            "id": "4.1",
            "title": "Hardened baseline applied (CIS Benchmark)",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "4.2",
            "title": "Default credentials changed",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "4.3",
            "title": "Unnecessary services / ports disabled",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "4.4",
            "title": "Controller keyswitch / write-protection enabled",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "4.5",
            "title": "Session lock / automatic timeout configured",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-5",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "5.1",
            "title": "Inventory of accounts maintained",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "5.2",
            "title": "Default / shared accounts disabled",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "5.3",
            "title": "Dormant accounts disabled",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-7",
        "score": 50,
        "passed": 1,
        "failed": 1,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "7.1",
            "title": "Asset covered by vulnerability scanning",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "7.2",
            "title": "Security patches applied within policy SLA",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "7.3",
            "title": "Firmware updates tracked and applied",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "7.4",
            "title": "Risk-based remediation plan documented",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-8",
        "score": 0,
        "passed": 0,
        "failed": 1,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "8.1",
            "title": "Security event logging enabled",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "8.2",
            "title": "Logs forwarded to central SIEM",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "8.3",
            "title": "Time synchronized to trusted source",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-13",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "13.1",
            "title": "Traffic monitored on the segment (IDS/NSM)",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "13.2",
            "title": "Alerting on anomalous OT traffic",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "13.3",
            "title": "Port-level access control (802.1X / MAC)",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-17",
        "score": 0,
        "passed": 0,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "17.1",
            "title": "Asset mapped in incident-response runbook",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "17.2",
            "title": "Recovery contacts / escalation defined",
            "severity": "low",
            "status": "failed"
          }
        ]
      }
    ]
  },
  {
    "assetId": "AST-0039",
    "score": 94,
    "calculatedAt": "2026-06-11T12:00:00.000Z",
    "controlResults": [
      {
        "controlId": "CIS-1",
        "score": 100,
        "passed": 4,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "1.1",
            "title": "Maintained, authoritative asset inventory entry",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "1.2",
            "title": "Unauthorized assets are detected and addressed",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "1.3",
            "title": "Passive asset discovery in use on the segment",
            "severity": "low",
            "status": "passed"
          },
          {
            "id": "1.4",
            "title": "DHCP / address-assignment logging reconciled to inventory",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-4",
        "score": 100,
        "passed": 3,
        "failed": 0,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "4.1",
            "title": "Hardened baseline applied (CIS Benchmark)",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "4.2",
            "title": "Default credentials changed",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "4.3",
            "title": "Unnecessary services / ports disabled",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "4.4",
            "title": "Controller keyswitch / write-protection enabled",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "4.5",
            "title": "Session lock / automatic timeout configured",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-5",
        "score": 100,
        "passed": 3,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "5.1",
            "title": "Inventory of accounts maintained",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "5.2",
            "title": "Default / shared accounts disabled",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "5.3",
            "title": "Dormant accounts disabled",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-6",
        "score": 100,
        "passed": 3,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "6.1",
            "title": "Least-privilege access enforced",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "6.2",
            "title": "Multi-factor authentication for remote / privileged access",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "6.3",
            "title": "Access revoked on role change / departure",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-7",
        "score": 100,
        "passed": 4,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "7.1",
            "title": "Asset covered by vulnerability scanning",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "7.2",
            "title": "Security patches applied within policy SLA",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "7.3",
            "title": "Firmware updates tracked and applied",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "7.4",
            "title": "Risk-based remediation plan documented",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-8",
        "score": 100,
        "passed": 3,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "8.1",
            "title": "Security event logging enabled",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "8.2",
            "title": "Logs forwarded to central SIEM",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "8.3",
            "title": "Time synchronized to trusted source",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-12",
        "score": 75,
        "passed": 3,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "12.1",
            "title": "Network device running supported firmware",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "12.2",
            "title": "Secure management protocols only (SSH/HTTPS)",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "12.3",
            "title": "Network segmentation / zone enforcement",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "12.4",
            "title": "Configuration backups maintained",
            "severity": "medium",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-13",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "13.1",
            "title": "Traffic monitored on the segment (IDS/NSM)",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "13.2",
            "title": "Alerting on anomalous OT traffic",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "13.3",
            "title": "Port-level access control (802.1X / MAC)",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-15",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "15.1",
            "title": "Vendor remote-access governed and logged",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-17",
        "score": 100,
        "passed": 2,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "17.1",
            "title": "Asset mapped in incident-response runbook",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "17.2",
            "title": "Recovery contacts / escalation defined",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-18",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "18.1",
            "title": "Included in scope of latest assessment",
            "severity": "low",
            "status": "passed"
          }
        ]
      }
    ]
  },
  {
    "assetId": "AST-0042",
    "score": 52,
    "calculatedAt": "2026-06-15T12:00:00.000Z",
    "controlResults": [
      {
        "controlId": "CIS-1",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "1.1",
            "title": "Maintained, authoritative asset inventory entry",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "1.2",
            "title": "Unauthorized assets are detected and addressed",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "1.3",
            "title": "Passive asset discovery in use on the segment",
            "severity": "low",
            "status": "passed"
          },
          {
            "id": "1.4",
            "title": "DHCP / address-assignment logging reconciled to inventory",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-2",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "2.1",
            "title": "Authorized software inventory maintained",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "2.2",
            "title": "Unsupported / end-of-life software removed or documented",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "2.3",
            "title": "Application allowlisting enforced",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-3",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "3.1",
            "title": "Sensitive configuration/project data inventory maintained",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "3.2",
            "title": "Data-at-rest encryption on engineering data",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "3.3",
            "title": "Removable-media controls enforced",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-4",
        "score": 33,
        "passed": 1,
        "failed": 2,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "4.1",
            "title": "Hardened baseline applied (CIS Benchmark)",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "4.2",
            "title": "Default credentials changed",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "4.3",
            "title": "Unnecessary services / ports disabled",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "4.4",
            "title": "Controller keyswitch / write-protection enabled",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "4.5",
            "title": "Session lock / automatic timeout configured",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-5",
        "score": 0,
        "passed": 0,
        "failed": 1,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "5.1",
            "title": "Inventory of accounts maintained",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "5.2",
            "title": "Default / shared accounts disabled",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "5.3",
            "title": "Dormant accounts disabled",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-6",
        "score": 0,
        "passed": 0,
        "failed": 1,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "6.1",
            "title": "Least-privilege access enforced",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "6.2",
            "title": "Multi-factor authentication for remote / privileged access",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "6.3",
            "title": "Access revoked on role change / departure",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-7",
        "score": 33,
        "passed": 1,
        "failed": 2,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "7.1",
            "title": "Asset covered by vulnerability scanning",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "7.2",
            "title": "Security patches applied within policy SLA",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "7.3",
            "title": "Firmware updates tracked and applied",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "7.4",
            "title": "Risk-based remediation plan documented",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-8",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "8.1",
            "title": "Security event logging enabled",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "8.2",
            "title": "Logs forwarded to central SIEM",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "8.3",
            "title": "Time synchronized to trusted source",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-11",
        "score": 50,
        "passed": 1,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "11.1",
            "title": "Configuration / project backups taken",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "11.2",
            "title": "Backups tested by restore",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "11.3",
            "title": "Backups stored isolated / offline",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-12",
        "score": 0,
        "passed": 0,
        "failed": 1,
        "notApplicable": 3,
        "subControls": [
          {
            "id": "12.1",
            "title": "Network device running supported firmware",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "12.2",
            "title": "Secure management protocols only (SSH/HTTPS)",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "12.3",
            "title": "Network segmentation / zone enforcement",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "12.4",
            "title": "Configuration backups maintained",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-13",
        "score": 100,
        "passed": 2,
        "failed": 0,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "13.1",
            "title": "Traffic monitored on the segment (IDS/NSM)",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "13.2",
            "title": "Alerting on anomalous OT traffic",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "13.3",
            "title": "Port-level access control (802.1X / MAC)",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-14",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "14.1",
            "title": "Operators trained on OT security procedures",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-15",
        "score": 0,
        "passed": 0,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "15.1",
            "title": "Vendor remote-access governed and logged",
            "severity": "medium",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-16",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "16.1",
            "title": "Vendor application security patches tracked",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "16.2",
            "title": "Hardened application configuration",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-17",
        "score": 50,
        "passed": 1,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "17.1",
            "title": "Asset mapped in incident-response runbook",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "17.2",
            "title": "Recovery contacts / escalation defined",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-18",
        "score": 0,
        "passed": 0,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "18.1",
            "title": "Included in scope of latest assessment",
            "severity": "low",
            "status": "failed"
          }
        ]
      }
    ]
  },
  {
    "assetId": "AST-0043",
    "score": 64,
    "calculatedAt": "2026-06-19T12:00:00.000Z",
    "controlResults": [
      {
        "controlId": "CIS-1",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "1.1",
            "title": "Maintained, authoritative asset inventory entry",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "1.2",
            "title": "Unauthorized assets are detected and addressed",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "1.3",
            "title": "Passive asset discovery in use on the segment",
            "severity": "low",
            "status": "failed"
          },
          {
            "id": "1.4",
            "title": "DHCP / address-assignment logging reconciled to inventory",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-2",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "2.1",
            "title": "Authorized software inventory maintained",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "2.2",
            "title": "Unsupported / end-of-life software removed or documented",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "2.3",
            "title": "Application allowlisting enforced",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-3",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "3.1",
            "title": "Sensitive configuration/project data inventory maintained",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "3.2",
            "title": "Data-at-rest encryption on engineering data",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "3.3",
            "title": "Removable-media controls enforced",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-4",
        "score": 33,
        "passed": 1,
        "failed": 2,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "4.1",
            "title": "Hardened baseline applied (CIS Benchmark)",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "4.2",
            "title": "Default credentials changed",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "4.3",
            "title": "Unnecessary services / ports disabled",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "4.4",
            "title": "Controller keyswitch / write-protection enabled",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "4.5",
            "title": "Session lock / automatic timeout configured",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-5",
        "score": 0,
        "passed": 0,
        "failed": 1,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "5.1",
            "title": "Inventory of accounts maintained",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "5.2",
            "title": "Default / shared accounts disabled",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "5.3",
            "title": "Dormant accounts disabled",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-6",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "6.1",
            "title": "Least-privilege access enforced",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "6.2",
            "title": "Multi-factor authentication for remote / privileged access",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "6.3",
            "title": "Access revoked on role change / departure",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-7",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "7.1",
            "title": "Asset covered by vulnerability scanning",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "7.2",
            "title": "Security patches applied within policy SLA",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "7.3",
            "title": "Firmware updates tracked and applied",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "7.4",
            "title": "Risk-based remediation plan documented",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-8",
        "score": 0,
        "passed": 0,
        "failed": 1,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "8.1",
            "title": "Security event logging enabled",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "8.2",
            "title": "Logs forwarded to central SIEM",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "8.3",
            "title": "Time synchronized to trusted source",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-11",
        "score": 50,
        "passed": 1,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "11.1",
            "title": "Configuration / project backups taken",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "11.2",
            "title": "Backups tested by restore",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "11.3",
            "title": "Backups stored isolated / offline",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-12",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 3,
        "subControls": [
          {
            "id": "12.1",
            "title": "Network device running supported firmware",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "12.2",
            "title": "Secure management protocols only (SSH/HTTPS)",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "12.3",
            "title": "Network segmentation / zone enforcement",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "12.4",
            "title": "Configuration backups maintained",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-13",
        "score": 50,
        "passed": 1,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "13.1",
            "title": "Traffic monitored on the segment (IDS/NSM)",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "13.2",
            "title": "Alerting on anomalous OT traffic",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "13.3",
            "title": "Port-level access control (802.1X / MAC)",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-14",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "14.1",
            "title": "Operators trained on OT security procedures",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-15",
        "score": 0,
        "passed": 0,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "15.1",
            "title": "Vendor remote-access governed and logged",
            "severity": "medium",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-16",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "16.1",
            "title": "Vendor application security patches tracked",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "16.2",
            "title": "Hardened application configuration",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-17",
        "score": 50,
        "passed": 1,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "17.1",
            "title": "Asset mapped in incident-response runbook",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "17.2",
            "title": "Recovery contacts / escalation defined",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-18",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "18.1",
            "title": "Included in scope of latest assessment",
            "severity": "low",
            "status": "passed"
          }
        ]
      }
    ]
  },
  {
    "assetId": "AST-0044",
    "score": 86,
    "calculatedAt": "2026-06-14T12:00:00.000Z",
    "controlResults": [
      {
        "controlId": "CIS-1",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "1.1",
            "title": "Maintained, authoritative asset inventory entry",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "1.2",
            "title": "Unauthorized assets are detected and addressed",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "1.3",
            "title": "Passive asset discovery in use on the segment",
            "severity": "low",
            "status": "passed"
          },
          {
            "id": "1.4",
            "title": "DHCP / address-assignment logging reconciled to inventory",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-2",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "2.1",
            "title": "Authorized software inventory maintained",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "2.2",
            "title": "Unsupported / end-of-life software removed or documented",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "2.3",
            "title": "Application allowlisting enforced",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-3",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "3.1",
            "title": "Sensitive configuration/project data inventory maintained",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "3.2",
            "title": "Data-at-rest encryption on engineering data",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "3.3",
            "title": "Removable-media controls enforced",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-4",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "4.1",
            "title": "Hardened baseline applied (CIS Benchmark)",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "4.2",
            "title": "Default credentials changed",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "4.3",
            "title": "Unnecessary services / ports disabled",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "4.4",
            "title": "Controller keyswitch / write-protection enabled",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "4.5",
            "title": "Session lock / automatic timeout configured",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-5",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "5.1",
            "title": "Inventory of accounts maintained",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "5.2",
            "title": "Default / shared accounts disabled",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "5.3",
            "title": "Dormant accounts disabled",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-6",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "6.1",
            "title": "Least-privilege access enforced",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "6.2",
            "title": "Multi-factor authentication for remote / privileged access",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "6.3",
            "title": "Access revoked on role change / departure",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-7",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "7.1",
            "title": "Asset covered by vulnerability scanning",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "7.2",
            "title": "Security patches applied within policy SLA",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "7.3",
            "title": "Firmware updates tracked and applied",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "7.4",
            "title": "Risk-based remediation plan documented",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-8",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "8.1",
            "title": "Security event logging enabled",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "8.2",
            "title": "Logs forwarded to central SIEM",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "8.3",
            "title": "Time synchronized to trusted source",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-11",
        "score": 50,
        "passed": 1,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "11.1",
            "title": "Configuration / project backups taken",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "11.2",
            "title": "Backups tested by restore",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "11.3",
            "title": "Backups stored isolated / offline",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-12",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 3,
        "subControls": [
          {
            "id": "12.1",
            "title": "Network device running supported firmware",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "12.2",
            "title": "Secure management protocols only (SSH/HTTPS)",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "12.3",
            "title": "Network segmentation / zone enforcement",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "12.4",
            "title": "Configuration backups maintained",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-13",
        "score": 50,
        "passed": 1,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "13.1",
            "title": "Traffic monitored on the segment (IDS/NSM)",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "13.2",
            "title": "Alerting on anomalous OT traffic",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "13.3",
            "title": "Port-level access control (802.1X / MAC)",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-14",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "14.1",
            "title": "Operators trained on OT security procedures",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-15",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "15.1",
            "title": "Vendor remote-access governed and logged",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-16",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "16.1",
            "title": "Vendor application security patches tracked",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "16.2",
            "title": "Hardened application configuration",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-17",
        "score": 100,
        "passed": 2,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "17.1",
            "title": "Asset mapped in incident-response runbook",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "17.2",
            "title": "Recovery contacts / escalation defined",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-18",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "18.1",
            "title": "Included in scope of latest assessment",
            "severity": "low",
            "status": "passed"
          }
        ]
      }
    ]
  },
  {
    "assetId": "AST-0045",
    "score": 75,
    "calculatedAt": "2026-06-23T12:00:00.000Z",
    "controlResults": [
      {
        "controlId": "CIS-1",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "1.1",
            "title": "Maintained, authoritative asset inventory entry",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "1.2",
            "title": "Unauthorized assets are detected and addressed",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "1.3",
            "title": "Passive asset discovery in use on the segment",
            "severity": "low",
            "status": "passed"
          },
          {
            "id": "1.4",
            "title": "DHCP / address-assignment logging reconciled to inventory",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-2",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "2.1",
            "title": "Authorized software inventory maintained",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "2.2",
            "title": "Unsupported / end-of-life software removed or documented",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "2.3",
            "title": "Application allowlisting enforced",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-3",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "3.1",
            "title": "Sensitive configuration/project data inventory maintained",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "3.2",
            "title": "Data-at-rest encryption on engineering data",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "3.3",
            "title": "Removable-media controls enforced",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-4",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "4.1",
            "title": "Hardened baseline applied (CIS Benchmark)",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "4.2",
            "title": "Default credentials changed",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "4.3",
            "title": "Unnecessary services / ports disabled",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "4.4",
            "title": "Controller keyswitch / write-protection enabled",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "4.5",
            "title": "Session lock / automatic timeout configured",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-5",
        "score": 0,
        "passed": 0,
        "failed": 1,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "5.1",
            "title": "Inventory of accounts maintained",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "5.2",
            "title": "Default / shared accounts disabled",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "5.3",
            "title": "Dormant accounts disabled",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-6",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "6.1",
            "title": "Least-privilege access enforced",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "6.2",
            "title": "Multi-factor authentication for remote / privileged access",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "6.3",
            "title": "Access revoked on role change / departure",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-7",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "7.1",
            "title": "Asset covered by vulnerability scanning",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "7.2",
            "title": "Security patches applied within policy SLA",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "7.3",
            "title": "Firmware updates tracked and applied",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "7.4",
            "title": "Risk-based remediation plan documented",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-8",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "8.1",
            "title": "Security event logging enabled",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "8.2",
            "title": "Logs forwarded to central SIEM",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "8.3",
            "title": "Time synchronized to trusted source",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-11",
        "score": 50,
        "passed": 1,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "11.1",
            "title": "Configuration / project backups taken",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "11.2",
            "title": "Backups tested by restore",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "11.3",
            "title": "Backups stored isolated / offline",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-12",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 3,
        "subControls": [
          {
            "id": "12.1",
            "title": "Network device running supported firmware",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "12.2",
            "title": "Secure management protocols only (SSH/HTTPS)",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "12.3",
            "title": "Network segmentation / zone enforcement",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "12.4",
            "title": "Configuration backups maintained",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-13",
        "score": 50,
        "passed": 1,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "13.1",
            "title": "Traffic monitored on the segment (IDS/NSM)",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "13.2",
            "title": "Alerting on anomalous OT traffic",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "13.3",
            "title": "Port-level access control (802.1X / MAC)",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-14",
        "score": 0,
        "passed": 0,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "14.1",
            "title": "Operators trained on OT security procedures",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-15",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "15.1",
            "title": "Vendor remote-access governed and logged",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-16",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "16.1",
            "title": "Vendor application security patches tracked",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "16.2",
            "title": "Hardened application configuration",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-17",
        "score": 100,
        "passed": 2,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "17.1",
            "title": "Asset mapped in incident-response runbook",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "17.2",
            "title": "Recovery contacts / escalation defined",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-18",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "18.1",
            "title": "Included in scope of latest assessment",
            "severity": "low",
            "status": "passed"
          }
        ]
      }
    ]
  },
  {
    "assetId": "AST-0047",
    "score": 8,
    "calculatedAt": "2026-06-18T12:00:00.000Z",
    "controlResults": [
      {
        "controlId": "CIS-1",
        "score": 0,
        "passed": 0,
        "failed": 2,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "1.1",
            "title": "Maintained, authoritative asset inventory entry",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "1.2",
            "title": "Unauthorized assets are detected and addressed",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "1.3",
            "title": "Passive asset discovery in use on the segment",
            "severity": "low",
            "status": "failed"
          },
          {
            "id": "1.4",
            "title": "DHCP / address-assignment logging reconciled to inventory",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-4",
        "score": 0,
        "passed": 0,
        "failed": 1,
        "notApplicable": 4,
        "subControls": [
          {
            "id": "4.1",
            "title": "Hardened baseline applied (CIS Benchmark)",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "4.2",
            "title": "Default credentials changed",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "4.3",
            "title": "Unnecessary services / ports disabled",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "4.4",
            "title": "Controller keyswitch / write-protection enabled",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "4.5",
            "title": "Session lock / automatic timeout configured",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-5",
        "score": 0,
        "passed": 0,
        "failed": 1,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "5.1",
            "title": "Inventory of accounts maintained",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "5.2",
            "title": "Default / shared accounts disabled",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "5.3",
            "title": "Dormant accounts disabled",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-7",
        "score": 50,
        "passed": 1,
        "failed": 1,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "7.1",
            "title": "Asset covered by vulnerability scanning",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "7.2",
            "title": "Security patches applied within policy SLA",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "7.3",
            "title": "Firmware updates tracked and applied",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "7.4",
            "title": "Risk-based remediation plan documented",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-8",
        "score": 0,
        "passed": 0,
        "failed": 1,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "8.1",
            "title": "Security event logging enabled",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "8.2",
            "title": "Logs forwarded to central SIEM",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "8.3",
            "title": "Time synchronized to trusted source",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-13",
        "score": 0,
        "passed": 0,
        "failed": 1,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "13.1",
            "title": "Traffic monitored on the segment (IDS/NSM)",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "13.2",
            "title": "Alerting on anomalous OT traffic",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "13.3",
            "title": "Port-level access control (802.1X / MAC)",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-17",
        "score": 0,
        "passed": 0,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "17.1",
            "title": "Asset mapped in incident-response runbook",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "17.2",
            "title": "Recovery contacts / escalation defined",
            "severity": "low",
            "status": "failed"
          }
        ]
      }
    ]
  },
  {
    "assetId": "AST-0048",
    "score": 86,
    "calculatedAt": "2026-06-14T12:00:00.000Z",
    "controlResults": [
      {
        "controlId": "CIS-1",
        "score": 75,
        "passed": 3,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "1.1",
            "title": "Maintained, authoritative asset inventory entry",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "1.2",
            "title": "Unauthorized assets are detected and addressed",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "1.3",
            "title": "Passive asset discovery in use on the segment",
            "severity": "low",
            "status": "passed"
          },
          {
            "id": "1.4",
            "title": "DHCP / address-assignment logging reconciled to inventory",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-4",
        "score": 100,
        "passed": 3,
        "failed": 0,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "4.1",
            "title": "Hardened baseline applied (CIS Benchmark)",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "4.2",
            "title": "Default credentials changed",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "4.3",
            "title": "Unnecessary services / ports disabled",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "4.4",
            "title": "Controller keyswitch / write-protection enabled",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "4.5",
            "title": "Session lock / automatic timeout configured",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-5",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "5.1",
            "title": "Inventory of accounts maintained",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "5.2",
            "title": "Default / shared accounts disabled",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "5.3",
            "title": "Dormant accounts disabled",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-6",
        "score": 100,
        "passed": 3,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "6.1",
            "title": "Least-privilege access enforced",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "6.2",
            "title": "Multi-factor authentication for remote / privileged access",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "6.3",
            "title": "Access revoked on role change / departure",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-7",
        "score": 75,
        "passed": 3,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "7.1",
            "title": "Asset covered by vulnerability scanning",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "7.2",
            "title": "Security patches applied within policy SLA",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "7.3",
            "title": "Firmware updates tracked and applied",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "7.4",
            "title": "Risk-based remediation plan documented",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-8",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "8.1",
            "title": "Security event logging enabled",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "8.2",
            "title": "Logs forwarded to central SIEM",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "8.3",
            "title": "Time synchronized to trusted source",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-12",
        "score": 75,
        "passed": 3,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "12.1",
            "title": "Network device running supported firmware",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "12.2",
            "title": "Secure management protocols only (SSH/HTTPS)",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "12.3",
            "title": "Network segmentation / zone enforcement",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "12.4",
            "title": "Configuration backups maintained",
            "severity": "medium",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-13",
        "score": 100,
        "passed": 3,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "13.1",
            "title": "Traffic monitored on the segment (IDS/NSM)",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "13.2",
            "title": "Alerting on anomalous OT traffic",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "13.3",
            "title": "Port-level access control (802.1X / MAC)",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-15",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "15.1",
            "title": "Vendor remote-access governed and logged",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-17",
        "score": 100,
        "passed": 2,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "17.1",
            "title": "Asset mapped in incident-response runbook",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "17.2",
            "title": "Recovery contacts / escalation defined",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-18",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "18.1",
            "title": "Included in scope of latest assessment",
            "severity": "low",
            "status": "passed"
          }
        ]
      }
    ]
  },
  {
    "assetId": "AST-0051",
    "score": 55,
    "calculatedAt": "2026-06-22T12:00:00.000Z",
    "controlResults": [
      {
        "controlId": "CIS-1",
        "score": 50,
        "passed": 2,
        "failed": 2,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "1.1",
            "title": "Maintained, authoritative asset inventory entry",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "1.2",
            "title": "Unauthorized assets are detected and addressed",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "1.3",
            "title": "Passive asset discovery in use on the segment",
            "severity": "low",
            "status": "failed"
          },
          {
            "id": "1.4",
            "title": "DHCP / address-assignment logging reconciled to inventory",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-4",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "4.1",
            "title": "Hardened baseline applied (CIS Benchmark)",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "4.2",
            "title": "Default credentials changed",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "4.3",
            "title": "Unnecessary services / ports disabled",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "4.4",
            "title": "Controller keyswitch / write-protection enabled",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "4.5",
            "title": "Session lock / automatic timeout configured",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-5",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "5.1",
            "title": "Inventory of accounts maintained",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "5.2",
            "title": "Default / shared accounts disabled",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "5.3",
            "title": "Dormant accounts disabled",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-6",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "6.1",
            "title": "Least-privilege access enforced",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "6.2",
            "title": "Multi-factor authentication for remote / privileged access",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "6.3",
            "title": "Access revoked on role change / departure",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-7",
        "score": 25,
        "passed": 1,
        "failed": 3,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "7.1",
            "title": "Asset covered by vulnerability scanning",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "7.2",
            "title": "Security patches applied within policy SLA",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "7.3",
            "title": "Firmware updates tracked and applied",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "7.4",
            "title": "Risk-based remediation plan documented",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-8",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "8.1",
            "title": "Security event logging enabled",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "8.2",
            "title": "Logs forwarded to central SIEM",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "8.3",
            "title": "Time synchronized to trusted source",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-12",
        "score": 75,
        "passed": 3,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "12.1",
            "title": "Network device running supported firmware",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "12.2",
            "title": "Secure management protocols only (SSH/HTTPS)",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "12.3",
            "title": "Network segmentation / zone enforcement",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "12.4",
            "title": "Configuration backups maintained",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-13",
        "score": 33,
        "passed": 1,
        "failed": 2,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "13.1",
            "title": "Traffic monitored on the segment (IDS/NSM)",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "13.2",
            "title": "Alerting on anomalous OT traffic",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "13.3",
            "title": "Port-level access control (802.1X / MAC)",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-15",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "15.1",
            "title": "Vendor remote-access governed and logged",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-17",
        "score": 50,
        "passed": 1,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "17.1",
            "title": "Asset mapped in incident-response runbook",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "17.2",
            "title": "Recovery contacts / escalation defined",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-18",
        "score": 0,
        "passed": 0,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "18.1",
            "title": "Included in scope of latest assessment",
            "severity": "low",
            "status": "failed"
          }
        ]
      }
    ]
  },
  {
    "assetId": "AST-0054",
    "score": 67,
    "calculatedAt": "2026-06-18T12:00:00.000Z",
    "controlResults": [
      {
        "controlId": "CIS-1",
        "score": 33,
        "passed": 1,
        "failed": 2,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "1.1",
            "title": "Maintained, authoritative asset inventory entry",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "1.2",
            "title": "Unauthorized assets are detected and addressed",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "1.3",
            "title": "Passive asset discovery in use on the segment",
            "severity": "low",
            "status": "not_applicable"
          },
          {
            "id": "1.4",
            "title": "DHCP / address-assignment logging reconciled to inventory",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-2",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "2.1",
            "title": "Authorized software inventory maintained",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "2.2",
            "title": "Unsupported / end-of-life software removed or documented",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "2.3",
            "title": "Application allowlisting enforced",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-3",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "3.1",
            "title": "Sensitive configuration/project data inventory maintained",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "3.2",
            "title": "Data-at-rest encryption on engineering data",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "3.3",
            "title": "Removable-media controls enforced",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-4",
        "score": 75,
        "passed": 3,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "4.1",
            "title": "Hardened baseline applied (CIS Benchmark)",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "4.2",
            "title": "Default credentials changed",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "4.3",
            "title": "Unnecessary services / ports disabled",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "4.4",
            "title": "Controller keyswitch / write-protection enabled",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "4.5",
            "title": "Session lock / automatic timeout configured",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-5",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "5.1",
            "title": "Inventory of accounts maintained",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "5.2",
            "title": "Default / shared accounts disabled",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "5.3",
            "title": "Dormant accounts disabled",
            "severity": "medium",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-6",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "6.1",
            "title": "Least-privilege access enforced",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "6.2",
            "title": "Multi-factor authentication for remote / privileged access",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "6.3",
            "title": "Access revoked on role change / departure",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-7",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "7.1",
            "title": "Asset covered by vulnerability scanning",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "7.2",
            "title": "Security patches applied within policy SLA",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "7.3",
            "title": "Firmware updates tracked and applied",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "7.4",
            "title": "Risk-based remediation plan documented",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-8",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "8.1",
            "title": "Security event logging enabled",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "8.2",
            "title": "Logs forwarded to central SIEM",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "8.3",
            "title": "Time synchronized to trusted source",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-9",
        "score": 50,
        "passed": 1,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "9.1",
            "title": "Supported browser/email client only",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "9.2",
            "title": "URL / content filtering enforced",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-10",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "10.1",
            "title": "Anti-malware deployed and current",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "10.2",
            "title": "Removable-media auto-run disabled",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "10.3",
            "title": "Behavioral / EDR coverage",
            "severity": "medium",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-11",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "11.1",
            "title": "Configuration / project backups taken",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "11.2",
            "title": "Backups tested by restore",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "11.3",
            "title": "Backups stored isolated / offline",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-14",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "14.1",
            "title": "Operators trained on OT security procedures",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-15",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "15.1",
            "title": "Vendor remote-access governed and logged",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-16",
        "score": 50,
        "passed": 1,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "16.1",
            "title": "Vendor application security patches tracked",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "16.2",
            "title": "Hardened application configuration",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-17",
        "score": 50,
        "passed": 1,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "17.1",
            "title": "Asset mapped in incident-response runbook",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "17.2",
            "title": "Recovery contacts / escalation defined",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-18",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "18.1",
            "title": "Included in scope of latest assessment",
            "severity": "low",
            "status": "passed"
          }
        ]
      }
    ]
  },
  {
    "assetId": "AST-0056",
    "score": 36,
    "calculatedAt": "2026-06-07T12:00:00.000Z",
    "controlResults": [
      {
        "controlId": "CIS-1",
        "score": 50,
        "passed": 2,
        "failed": 2,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "1.1",
            "title": "Maintained, authoritative asset inventory entry",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "1.2",
            "title": "Unauthorized assets are detected and addressed",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "1.3",
            "title": "Passive asset discovery in use on the segment",
            "severity": "low",
            "status": "passed"
          },
          {
            "id": "1.4",
            "title": "DHCP / address-assignment logging reconciled to inventory",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-4",
        "score": 33,
        "passed": 1,
        "failed": 2,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "4.1",
            "title": "Hardened baseline applied (CIS Benchmark)",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "4.2",
            "title": "Default credentials changed",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "4.3",
            "title": "Unnecessary services / ports disabled",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "4.4",
            "title": "Controller keyswitch / write-protection enabled",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "4.5",
            "title": "Session lock / automatic timeout configured",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-5",
        "score": 33,
        "passed": 1,
        "failed": 2,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "5.1",
            "title": "Inventory of accounts maintained",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "5.2",
            "title": "Default / shared accounts disabled",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "5.3",
            "title": "Dormant accounts disabled",
            "severity": "medium",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-6",
        "score": 33,
        "passed": 1,
        "failed": 2,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "6.1",
            "title": "Least-privilege access enforced",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "6.2",
            "title": "Multi-factor authentication for remote / privileged access",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "6.3",
            "title": "Access revoked on role change / departure",
            "severity": "medium",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-7",
        "score": 50,
        "passed": 2,
        "failed": 2,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "7.1",
            "title": "Asset covered by vulnerability scanning",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "7.2",
            "title": "Security patches applied within policy SLA",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "7.3",
            "title": "Firmware updates tracked and applied",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "7.4",
            "title": "Risk-based remediation plan documented",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-8",
        "score": 33,
        "passed": 1,
        "failed": 2,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "8.1",
            "title": "Security event logging enabled",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "8.2",
            "title": "Logs forwarded to central SIEM",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "8.3",
            "title": "Time synchronized to trusted source",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-12",
        "score": 50,
        "passed": 2,
        "failed": 2,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "12.1",
            "title": "Network device running supported firmware",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "12.2",
            "title": "Secure management protocols only (SSH/HTTPS)",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "12.3",
            "title": "Network segmentation / zone enforcement",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "12.4",
            "title": "Configuration backups maintained",
            "severity": "medium",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-13",
        "score": 33,
        "passed": 1,
        "failed": 2,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "13.1",
            "title": "Traffic monitored on the segment (IDS/NSM)",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "13.2",
            "title": "Alerting on anomalous OT traffic",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "13.3",
            "title": "Port-level access control (802.1X / MAC)",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-15",
        "score": 0,
        "passed": 0,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "15.1",
            "title": "Vendor remote-access governed and logged",
            "severity": "medium",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-17",
        "score": 50,
        "passed": 1,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "17.1",
            "title": "Asset mapped in incident-response runbook",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "17.2",
            "title": "Recovery contacts / escalation defined",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-18",
        "score": 0,
        "passed": 0,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "18.1",
            "title": "Included in scope of latest assessment",
            "severity": "low",
            "status": "failed"
          }
        ]
      }
    ]
  },
  {
    "assetId": "AST-0057",
    "score": 89,
    "calculatedAt": "2026-06-15T12:00:00.000Z",
    "controlResults": [
      {
        "controlId": "CIS-1",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "1.1",
            "title": "Maintained, authoritative asset inventory entry",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "1.2",
            "title": "Unauthorized assets are detected and addressed",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "1.3",
            "title": "Passive asset discovery in use on the segment",
            "severity": "low",
            "status": "passed"
          },
          {
            "id": "1.4",
            "title": "DHCP / address-assignment logging reconciled to inventory",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-2",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "2.1",
            "title": "Authorized software inventory maintained",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "2.2",
            "title": "Unsupported / end-of-life software removed or documented",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "2.3",
            "title": "Application allowlisting enforced",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-3",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "3.1",
            "title": "Sensitive configuration/project data inventory maintained",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "3.2",
            "title": "Data-at-rest encryption on engineering data",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "3.3",
            "title": "Removable-media controls enforced",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-4",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "4.1",
            "title": "Hardened baseline applied (CIS Benchmark)",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "4.2",
            "title": "Default credentials changed",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "4.3",
            "title": "Unnecessary services / ports disabled",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "4.4",
            "title": "Controller keyswitch / write-protection enabled",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "4.5",
            "title": "Session lock / automatic timeout configured",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-5",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "5.1",
            "title": "Inventory of accounts maintained",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "5.2",
            "title": "Default / shared accounts disabled",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "5.3",
            "title": "Dormant accounts disabled",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-6",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "6.1",
            "title": "Least-privilege access enforced",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "6.2",
            "title": "Multi-factor authentication for remote / privileged access",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "6.3",
            "title": "Access revoked on role change / departure",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-7",
        "score": 100,
        "passed": 3,
        "failed": 0,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "7.1",
            "title": "Asset covered by vulnerability scanning",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "7.2",
            "title": "Security patches applied within policy SLA",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "7.3",
            "title": "Firmware updates tracked and applied",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "7.4",
            "title": "Risk-based remediation plan documented",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-8",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "8.1",
            "title": "Security event logging enabled",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "8.2",
            "title": "Logs forwarded to central SIEM",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "8.3",
            "title": "Time synchronized to trusted source",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-11",
        "score": 50,
        "passed": 1,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "11.1",
            "title": "Configuration / project backups taken",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "11.2",
            "title": "Backups tested by restore",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "11.3",
            "title": "Backups stored isolated / offline",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-12",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 3,
        "subControls": [
          {
            "id": "12.1",
            "title": "Network device running supported firmware",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "12.2",
            "title": "Secure management protocols only (SSH/HTTPS)",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "12.3",
            "title": "Network segmentation / zone enforcement",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "12.4",
            "title": "Configuration backups maintained",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-13",
        "score": 50,
        "passed": 1,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "13.1",
            "title": "Traffic monitored on the segment (IDS/NSM)",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "13.2",
            "title": "Alerting on anomalous OT traffic",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "13.3",
            "title": "Port-level access control (802.1X / MAC)",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-14",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "14.1",
            "title": "Operators trained on OT security procedures",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-15",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "15.1",
            "title": "Vendor remote-access governed and logged",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-16",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "16.1",
            "title": "Vendor application security patches tracked",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "16.2",
            "title": "Hardened application configuration",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-17",
        "score": 100,
        "passed": 2,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "17.1",
            "title": "Asset mapped in incident-response runbook",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "17.2",
            "title": "Recovery contacts / escalation defined",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-18",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "18.1",
            "title": "Included in scope of latest assessment",
            "severity": "low",
            "status": "passed"
          }
        ]
      }
    ]
  },
  {
    "assetId": "AST-0060",
    "score": 79,
    "calculatedAt": "2026-06-16T12:00:00.000Z",
    "controlResults": [
      {
        "controlId": "CIS-1",
        "score": 75,
        "passed": 3,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "1.1",
            "title": "Maintained, authoritative asset inventory entry",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "1.2",
            "title": "Unauthorized assets are detected and addressed",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "1.3",
            "title": "Passive asset discovery in use on the segment",
            "severity": "low",
            "status": "passed"
          },
          {
            "id": "1.4",
            "title": "DHCP / address-assignment logging reconciled to inventory",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-4",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "4.1",
            "title": "Hardened baseline applied (CIS Benchmark)",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "4.2",
            "title": "Default credentials changed",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "4.3",
            "title": "Unnecessary services / ports disabled",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "4.4",
            "title": "Controller keyswitch / write-protection enabled",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "4.5",
            "title": "Session lock / automatic timeout configured",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-5",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "5.1",
            "title": "Inventory of accounts maintained",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "5.2",
            "title": "Default / shared accounts disabled",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "5.3",
            "title": "Dormant accounts disabled",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-6",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "6.1",
            "title": "Least-privilege access enforced",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "6.2",
            "title": "Multi-factor authentication for remote / privileged access",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "6.3",
            "title": "Access revoked on role change / departure",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-7",
        "score": 75,
        "passed": 3,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "7.1",
            "title": "Asset covered by vulnerability scanning",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "7.2",
            "title": "Security patches applied within policy SLA",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "7.3",
            "title": "Firmware updates tracked and applied",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "7.4",
            "title": "Risk-based remediation plan documented",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-8",
        "score": 100,
        "passed": 3,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "8.1",
            "title": "Security event logging enabled",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "8.2",
            "title": "Logs forwarded to central SIEM",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "8.3",
            "title": "Time synchronized to trusted source",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-12",
        "score": 75,
        "passed": 3,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "12.1",
            "title": "Network device running supported firmware",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "12.2",
            "title": "Secure management protocols only (SSH/HTTPS)",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "12.3",
            "title": "Network segmentation / zone enforcement",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "12.4",
            "title": "Configuration backups maintained",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-13",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "13.1",
            "title": "Traffic monitored on the segment (IDS/NSM)",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "13.2",
            "title": "Alerting on anomalous OT traffic",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "13.3",
            "title": "Port-level access control (802.1X / MAC)",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-15",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "15.1",
            "title": "Vendor remote-access governed and logged",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-17",
        "score": 100,
        "passed": 2,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "17.1",
            "title": "Asset mapped in incident-response runbook",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "17.2",
            "title": "Recovery contacts / escalation defined",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-18",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "18.1",
            "title": "Included in scope of latest assessment",
            "severity": "low",
            "status": "passed"
          }
        ]
      }
    ]
  },
  {
    "assetId": "AST-0061",
    "score": 89,
    "calculatedAt": "2026-06-09T12:00:00.000Z",
    "controlResults": [
      {
        "controlId": "CIS-1",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "1.1",
            "title": "Maintained, authoritative asset inventory entry",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "1.2",
            "title": "Unauthorized assets are detected and addressed",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "1.3",
            "title": "Passive asset discovery in use on the segment",
            "severity": "low",
            "status": "failed"
          },
          {
            "id": "1.4",
            "title": "DHCP / address-assignment logging reconciled to inventory",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-2",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "2.1",
            "title": "Authorized software inventory maintained",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "2.2",
            "title": "Unsupported / end-of-life software removed or documented",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "2.3",
            "title": "Application allowlisting enforced",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-3",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "3.1",
            "title": "Sensitive configuration/project data inventory maintained",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "3.2",
            "title": "Data-at-rest encryption on engineering data",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "3.3",
            "title": "Removable-media controls enforced",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-4",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "4.1",
            "title": "Hardened baseline applied (CIS Benchmark)",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "4.2",
            "title": "Default credentials changed",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "4.3",
            "title": "Unnecessary services / ports disabled",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "4.4",
            "title": "Controller keyswitch / write-protection enabled",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "4.5",
            "title": "Session lock / automatic timeout configured",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-5",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "5.1",
            "title": "Inventory of accounts maintained",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "5.2",
            "title": "Default / shared accounts disabled",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "5.3",
            "title": "Dormant accounts disabled",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-6",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "6.1",
            "title": "Least-privilege access enforced",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "6.2",
            "title": "Multi-factor authentication for remote / privileged access",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "6.3",
            "title": "Access revoked on role change / departure",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-7",
        "score": 100,
        "passed": 3,
        "failed": 0,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "7.1",
            "title": "Asset covered by vulnerability scanning",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "7.2",
            "title": "Security patches applied within policy SLA",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "7.3",
            "title": "Firmware updates tracked and applied",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "7.4",
            "title": "Risk-based remediation plan documented",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-8",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "8.1",
            "title": "Security event logging enabled",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "8.2",
            "title": "Logs forwarded to central SIEM",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "8.3",
            "title": "Time synchronized to trusted source",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-11",
        "score": 50,
        "passed": 1,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "11.1",
            "title": "Configuration / project backups taken",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "11.2",
            "title": "Backups tested by restore",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "11.3",
            "title": "Backups stored isolated / offline",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-12",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 3,
        "subControls": [
          {
            "id": "12.1",
            "title": "Network device running supported firmware",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "12.2",
            "title": "Secure management protocols only (SSH/HTTPS)",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "12.3",
            "title": "Network segmentation / zone enforcement",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "12.4",
            "title": "Configuration backups maintained",
            "severity": "medium",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-13",
        "score": 100,
        "passed": 2,
        "failed": 0,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "13.1",
            "title": "Traffic monitored on the segment (IDS/NSM)",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "13.2",
            "title": "Alerting on anomalous OT traffic",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "13.3",
            "title": "Port-level access control (802.1X / MAC)",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-14",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "14.1",
            "title": "Operators trained on OT security procedures",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-15",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "15.1",
            "title": "Vendor remote-access governed and logged",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-16",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "16.1",
            "title": "Vendor application security patches tracked",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "16.2",
            "title": "Hardened application configuration",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-17",
        "score": 50,
        "passed": 1,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "17.1",
            "title": "Asset mapped in incident-response runbook",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "17.2",
            "title": "Recovery contacts / escalation defined",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-18",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "18.1",
            "title": "Included in scope of latest assessment",
            "severity": "low",
            "status": "passed"
          }
        ]
      }
    ]
  },
  {
    "assetId": "AST-0063",
    "score": 85,
    "calculatedAt": "2026-06-21T12:00:00.000Z",
    "controlResults": [
      {
        "controlId": "CIS-1",
        "score": 75,
        "passed": 3,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "1.1",
            "title": "Maintained, authoritative asset inventory entry",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "1.2",
            "title": "Unauthorized assets are detected and addressed",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "1.3",
            "title": "Passive asset discovery in use on the segment",
            "severity": "low",
            "status": "passed"
          },
          {
            "id": "1.4",
            "title": "DHCP / address-assignment logging reconciled to inventory",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-4",
        "score": 100,
        "passed": 3,
        "failed": 0,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "4.1",
            "title": "Hardened baseline applied (CIS Benchmark)",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "4.2",
            "title": "Default credentials changed",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "4.3",
            "title": "Unnecessary services / ports disabled",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "4.4",
            "title": "Controller keyswitch / write-protection enabled",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "4.5",
            "title": "Session lock / automatic timeout configured",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-5",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "5.1",
            "title": "Inventory of accounts maintained",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "5.2",
            "title": "Default / shared accounts disabled",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "5.3",
            "title": "Dormant accounts disabled",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-6",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "6.1",
            "title": "Least-privilege access enforced",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "6.2",
            "title": "Multi-factor authentication for remote / privileged access",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "6.3",
            "title": "Access revoked on role change / departure",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-7",
        "score": 100,
        "passed": 4,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "7.1",
            "title": "Asset covered by vulnerability scanning",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "7.2",
            "title": "Security patches applied within policy SLA",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "7.3",
            "title": "Firmware updates tracked and applied",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "7.4",
            "title": "Risk-based remediation plan documented",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-8",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "8.1",
            "title": "Security event logging enabled",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "8.2",
            "title": "Logs forwarded to central SIEM",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "8.3",
            "title": "Time synchronized to trusted source",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-12",
        "score": 75,
        "passed": 3,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "12.1",
            "title": "Network device running supported firmware",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "12.2",
            "title": "Secure management protocols only (SSH/HTTPS)",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "12.3",
            "title": "Network segmentation / zone enforcement",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "12.4",
            "title": "Configuration backups maintained",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-13",
        "score": 100,
        "passed": 3,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "13.1",
            "title": "Traffic monitored on the segment (IDS/NSM)",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "13.2",
            "title": "Alerting on anomalous OT traffic",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "13.3",
            "title": "Port-level access control (802.1X / MAC)",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-15",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "15.1",
            "title": "Vendor remote-access governed and logged",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-17",
        "score": 100,
        "passed": 2,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "17.1",
            "title": "Asset mapped in incident-response runbook",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "17.2",
            "title": "Recovery contacts / escalation defined",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-18",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "18.1",
            "title": "Included in scope of latest assessment",
            "severity": "low",
            "status": "passed"
          }
        ]
      }
    ]
  },
  {
    "assetId": "AST-0065",
    "score": 57,
    "calculatedAt": "2026-06-10T12:00:00.000Z",
    "controlResults": [
      {
        "controlId": "CIS-1",
        "score": 50,
        "passed": 2,
        "failed": 2,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "1.1",
            "title": "Maintained, authoritative asset inventory entry",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "1.2",
            "title": "Unauthorized assets are detected and addressed",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "1.3",
            "title": "Passive asset discovery in use on the segment",
            "severity": "low",
            "status": "failed"
          },
          {
            "id": "1.4",
            "title": "DHCP / address-assignment logging reconciled to inventory",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-4",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "4.1",
            "title": "Hardened baseline applied (CIS Benchmark)",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "4.2",
            "title": "Default credentials changed",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "4.3",
            "title": "Unnecessary services / ports disabled",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "4.4",
            "title": "Controller keyswitch / write-protection enabled",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "4.5",
            "title": "Session lock / automatic timeout configured",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-5",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "5.1",
            "title": "Inventory of accounts maintained",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "5.2",
            "title": "Default / shared accounts disabled",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "5.3",
            "title": "Dormant accounts disabled",
            "severity": "medium",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-6",
        "score": 33,
        "passed": 1,
        "failed": 2,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "6.1",
            "title": "Least-privilege access enforced",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "6.2",
            "title": "Multi-factor authentication for remote / privileged access",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "6.3",
            "title": "Access revoked on role change / departure",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-7",
        "score": 50,
        "passed": 2,
        "failed": 2,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "7.1",
            "title": "Asset covered by vulnerability scanning",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "7.2",
            "title": "Security patches applied within policy SLA",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "7.3",
            "title": "Firmware updates tracked and applied",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "7.4",
            "title": "Risk-based remediation plan documented",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-8",
        "score": 33,
        "passed": 1,
        "failed": 2,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "8.1",
            "title": "Security event logging enabled",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "8.2",
            "title": "Logs forwarded to central SIEM",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "8.3",
            "title": "Time synchronized to trusted source",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-12",
        "score": 75,
        "passed": 3,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "12.1",
            "title": "Network device running supported firmware",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "12.2",
            "title": "Secure management protocols only (SSH/HTTPS)",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "12.3",
            "title": "Network segmentation / zone enforcement",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "12.4",
            "title": "Configuration backups maintained",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-13",
        "score": 33,
        "passed": 1,
        "failed": 2,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "13.1",
            "title": "Traffic monitored on the segment (IDS/NSM)",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "13.2",
            "title": "Alerting on anomalous OT traffic",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "13.3",
            "title": "Port-level access control (802.1X / MAC)",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-15",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "15.1",
            "title": "Vendor remote-access governed and logged",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-17",
        "score": 50,
        "passed": 1,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "17.1",
            "title": "Asset mapped in incident-response runbook",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "17.2",
            "title": "Recovery contacts / escalation defined",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-18",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "18.1",
            "title": "Included in scope of latest assessment",
            "severity": "low",
            "status": "passed"
          }
        ]
      }
    ]
  },
  {
    "assetId": "AST-0066",
    "score": 83,
    "calculatedAt": "2026-06-22T12:00:00.000Z",
    "controlResults": [
      {
        "controlId": "CIS-1",
        "score": 75,
        "passed": 3,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "1.1",
            "title": "Maintained, authoritative asset inventory entry",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "1.2",
            "title": "Unauthorized assets are detected and addressed",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "1.3",
            "title": "Passive asset discovery in use on the segment",
            "severity": "low",
            "status": "passed"
          },
          {
            "id": "1.4",
            "title": "DHCP / address-assignment logging reconciled to inventory",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-4",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "4.1",
            "title": "Hardened baseline applied (CIS Benchmark)",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "4.2",
            "title": "Default credentials changed",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "4.3",
            "title": "Unnecessary services / ports disabled",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "4.4",
            "title": "Controller keyswitch / write-protection enabled",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "4.5",
            "title": "Session lock / automatic timeout configured",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-5",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "5.1",
            "title": "Inventory of accounts maintained",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "5.2",
            "title": "Default / shared accounts disabled",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "5.3",
            "title": "Dormant accounts disabled",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-6",
        "score": 100,
        "passed": 3,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "6.1",
            "title": "Least-privilege access enforced",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "6.2",
            "title": "Multi-factor authentication for remote / privileged access",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "6.3",
            "title": "Access revoked on role change / departure",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-7",
        "score": 75,
        "passed": 3,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "7.1",
            "title": "Asset covered by vulnerability scanning",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "7.2",
            "title": "Security patches applied within policy SLA",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "7.3",
            "title": "Firmware updates tracked and applied",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "7.4",
            "title": "Risk-based remediation plan documented",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-8",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "8.1",
            "title": "Security event logging enabled",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "8.2",
            "title": "Logs forwarded to central SIEM",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "8.3",
            "title": "Time synchronized to trusted source",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-12",
        "score": 75,
        "passed": 3,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "12.1",
            "title": "Network device running supported firmware",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "12.2",
            "title": "Secure management protocols only (SSH/HTTPS)",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "12.3",
            "title": "Network segmentation / zone enforcement",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "12.4",
            "title": "Configuration backups maintained",
            "severity": "medium",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-13",
        "score": 100,
        "passed": 3,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "13.1",
            "title": "Traffic monitored on the segment (IDS/NSM)",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "13.2",
            "title": "Alerting on anomalous OT traffic",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "13.3",
            "title": "Port-level access control (802.1X / MAC)",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-15",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "15.1",
            "title": "Vendor remote-access governed and logged",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-17",
        "score": 100,
        "passed": 2,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "17.1",
            "title": "Asset mapped in incident-response runbook",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "17.2",
            "title": "Recovery contacts / escalation defined",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-18",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "18.1",
            "title": "Included in scope of latest assessment",
            "severity": "low",
            "status": "passed"
          }
        ]
      }
    ]
  },
  {
    "assetId": "AST-0067",
    "score": 61,
    "calculatedAt": "2026-06-10T12:00:00.000Z",
    "controlResults": [
      {
        "controlId": "CIS-1",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "1.1",
            "title": "Maintained, authoritative asset inventory entry",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "1.2",
            "title": "Unauthorized assets are detected and addressed",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "1.3",
            "title": "Passive asset discovery in use on the segment",
            "severity": "low",
            "status": "not_applicable"
          },
          {
            "id": "1.4",
            "title": "DHCP / address-assignment logging reconciled to inventory",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-2",
        "score": 33,
        "passed": 1,
        "failed": 2,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "2.1",
            "title": "Authorized software inventory maintained",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "2.2",
            "title": "Unsupported / end-of-life software removed or documented",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "2.3",
            "title": "Application allowlisting enforced",
            "severity": "medium",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-3",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "3.1",
            "title": "Sensitive configuration/project data inventory maintained",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "3.2",
            "title": "Data-at-rest encryption on engineering data",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "3.3",
            "title": "Removable-media controls enforced",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-4",
        "score": 25,
        "passed": 1,
        "failed": 3,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "4.1",
            "title": "Hardened baseline applied (CIS Benchmark)",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "4.2",
            "title": "Default credentials changed",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "4.3",
            "title": "Unnecessary services / ports disabled",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "4.4",
            "title": "Controller keyswitch / write-protection enabled",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "4.5",
            "title": "Session lock / automatic timeout configured",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-5",
        "score": 33,
        "passed": 1,
        "failed": 2,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "5.1",
            "title": "Inventory of accounts maintained",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "5.2",
            "title": "Default / shared accounts disabled",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "5.3",
            "title": "Dormant accounts disabled",
            "severity": "medium",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-6",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "6.1",
            "title": "Least-privilege access enforced",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "6.2",
            "title": "Multi-factor authentication for remote / privileged access",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "6.3",
            "title": "Access revoked on role change / departure",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-7",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "7.1",
            "title": "Asset covered by vulnerability scanning",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "7.2",
            "title": "Security patches applied within policy SLA",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "7.3",
            "title": "Firmware updates tracked and applied",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "7.4",
            "title": "Risk-based remediation plan documented",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-8",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "8.1",
            "title": "Security event logging enabled",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "8.2",
            "title": "Logs forwarded to central SIEM",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "8.3",
            "title": "Time synchronized to trusted source",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-9",
        "score": 50,
        "passed": 1,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "9.1",
            "title": "Supported browser/email client only",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "9.2",
            "title": "URL / content filtering enforced",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-10",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "10.1",
            "title": "Anti-malware deployed and current",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "10.2",
            "title": "Removable-media auto-run disabled",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "10.3",
            "title": "Behavioral / EDR coverage",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-11",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "11.1",
            "title": "Configuration / project backups taken",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "11.2",
            "title": "Backups tested by restore",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "11.3",
            "title": "Backups stored isolated / offline",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-14",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "14.1",
            "title": "Operators trained on OT security procedures",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-15",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "15.1",
            "title": "Vendor remote-access governed and logged",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-16",
        "score": 50,
        "passed": 1,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "16.1",
            "title": "Vendor application security patches tracked",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "16.2",
            "title": "Hardened application configuration",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-17",
        "score": 50,
        "passed": 1,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "17.1",
            "title": "Asset mapped in incident-response runbook",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "17.2",
            "title": "Recovery contacts / escalation defined",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-18",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "18.1",
            "title": "Included in scope of latest assessment",
            "severity": "low",
            "status": "passed"
          }
        ]
      }
    ]
  },
  {
    "assetId": "AST-0068",
    "score": 80,
    "calculatedAt": "2026-06-25T12:00:00.000Z",
    "controlResults": [
      {
        "controlId": "CIS-1",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "1.1",
            "title": "Maintained, authoritative asset inventory entry",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "1.2",
            "title": "Unauthorized assets are detected and addressed",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "1.3",
            "title": "Passive asset discovery in use on the segment",
            "severity": "low",
            "status": "not_applicable"
          },
          {
            "id": "1.4",
            "title": "DHCP / address-assignment logging reconciled to inventory",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-2",
        "score": 100,
        "passed": 3,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "2.1",
            "title": "Authorized software inventory maintained",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "2.2",
            "title": "Unsupported / end-of-life software removed or documented",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "2.3",
            "title": "Application allowlisting enforced",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-3",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "3.1",
            "title": "Sensitive configuration/project data inventory maintained",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "3.2",
            "title": "Data-at-rest encryption on engineering data",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "3.3",
            "title": "Removable-media controls enforced",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-4",
        "score": 75,
        "passed": 3,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "4.1",
            "title": "Hardened baseline applied (CIS Benchmark)",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "4.2",
            "title": "Default credentials changed",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "4.3",
            "title": "Unnecessary services / ports disabled",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "4.4",
            "title": "Controller keyswitch / write-protection enabled",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "4.5",
            "title": "Session lock / automatic timeout configured",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-5",
        "score": 100,
        "passed": 3,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "5.1",
            "title": "Inventory of accounts maintained",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "5.2",
            "title": "Default / shared accounts disabled",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "5.3",
            "title": "Dormant accounts disabled",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-6",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "6.1",
            "title": "Least-privilege access enforced",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "6.2",
            "title": "Multi-factor authentication for remote / privileged access",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "6.3",
            "title": "Access revoked on role change / departure",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-7",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "7.1",
            "title": "Asset covered by vulnerability scanning",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "7.2",
            "title": "Security patches applied within policy SLA",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "7.3",
            "title": "Firmware updates tracked and applied",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "7.4",
            "title": "Risk-based remediation plan documented",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-8",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "8.1",
            "title": "Security event logging enabled",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "8.2",
            "title": "Logs forwarded to central SIEM",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "8.3",
            "title": "Time synchronized to trusted source",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-9",
        "score": 50,
        "passed": 1,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "9.1",
            "title": "Supported browser/email client only",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "9.2",
            "title": "URL / content filtering enforced",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-10",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "10.1",
            "title": "Anti-malware deployed and current",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "10.2",
            "title": "Removable-media auto-run disabled",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "10.3",
            "title": "Behavioral / EDR coverage",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-11",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "11.1",
            "title": "Configuration / project backups taken",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "11.2",
            "title": "Backups tested by restore",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "11.3",
            "title": "Backups stored isolated / offline",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-14",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "14.1",
            "title": "Operators trained on OT security procedures",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-15",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "15.1",
            "title": "Vendor remote-access governed and logged",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-16",
        "score": 100,
        "passed": 2,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "16.1",
            "title": "Vendor application security patches tracked",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "16.2",
            "title": "Hardened application configuration",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-17",
        "score": 100,
        "passed": 2,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "17.1",
            "title": "Asset mapped in incident-response runbook",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "17.2",
            "title": "Recovery contacts / escalation defined",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-18",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "18.1",
            "title": "Included in scope of latest assessment",
            "severity": "low",
            "status": "passed"
          }
        ]
      }
    ]
  },
  {
    "assetId": "AST-0069",
    "score": 87,
    "calculatedAt": "2026-06-13T12:00:00.000Z",
    "controlResults": [
      {
        "controlId": "CIS-1",
        "score": 100,
        "passed": 3,
        "failed": 0,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "1.1",
            "title": "Maintained, authoritative asset inventory entry",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "1.2",
            "title": "Unauthorized assets are detected and addressed",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "1.3",
            "title": "Passive asset discovery in use on the segment",
            "severity": "low",
            "status": "not_applicable"
          },
          {
            "id": "1.4",
            "title": "DHCP / address-assignment logging reconciled to inventory",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-2",
        "score": 100,
        "passed": 3,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "2.1",
            "title": "Authorized software inventory maintained",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "2.2",
            "title": "Unsupported / end-of-life software removed or documented",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "2.3",
            "title": "Application allowlisting enforced",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-3",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "3.1",
            "title": "Sensitive configuration/project data inventory maintained",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "3.2",
            "title": "Data-at-rest encryption on engineering data",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "3.3",
            "title": "Removable-media controls enforced",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-4",
        "score": 75,
        "passed": 3,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "4.1",
            "title": "Hardened baseline applied (CIS Benchmark)",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "4.2",
            "title": "Default credentials changed",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "4.3",
            "title": "Unnecessary services / ports disabled",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "4.4",
            "title": "Controller keyswitch / write-protection enabled",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "4.5",
            "title": "Session lock / automatic timeout configured",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-5",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "5.1",
            "title": "Inventory of accounts maintained",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "5.2",
            "title": "Default / shared accounts disabled",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "5.3",
            "title": "Dormant accounts disabled",
            "severity": "medium",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-6",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "6.1",
            "title": "Least-privilege access enforced",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "6.2",
            "title": "Multi-factor authentication for remote / privileged access",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "6.3",
            "title": "Access revoked on role change / departure",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-7",
        "score": 100,
        "passed": 3,
        "failed": 0,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "7.1",
            "title": "Asset covered by vulnerability scanning",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "7.2",
            "title": "Security patches applied within policy SLA",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "7.3",
            "title": "Firmware updates tracked and applied",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "7.4",
            "title": "Risk-based remediation plan documented",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-8",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "8.1",
            "title": "Security event logging enabled",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "8.2",
            "title": "Logs forwarded to central SIEM",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "8.3",
            "title": "Time synchronized to trusted source",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-9",
        "score": 100,
        "passed": 2,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "9.1",
            "title": "Supported browser/email client only",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "9.2",
            "title": "URL / content filtering enforced",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-10",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "10.1",
            "title": "Anti-malware deployed and current",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "10.2",
            "title": "Removable-media auto-run disabled",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "10.3",
            "title": "Behavioral / EDR coverage",
            "severity": "medium",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-11",
        "score": 100,
        "passed": 3,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "11.1",
            "title": "Configuration / project backups taken",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "11.2",
            "title": "Backups tested by restore",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "11.3",
            "title": "Backups stored isolated / offline",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-14",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "14.1",
            "title": "Operators trained on OT security procedures",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-15",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "15.1",
            "title": "Vendor remote-access governed and logged",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-16",
        "score": 100,
        "passed": 2,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "16.1",
            "title": "Vendor application security patches tracked",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "16.2",
            "title": "Hardened application configuration",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-17",
        "score": 100,
        "passed": 2,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "17.1",
            "title": "Asset mapped in incident-response runbook",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "17.2",
            "title": "Recovery contacts / escalation defined",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-18",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "18.1",
            "title": "Included in scope of latest assessment",
            "severity": "low",
            "status": "passed"
          }
        ]
      }
    ]
  },
  {
    "assetId": "AST-0070",
    "score": 50,
    "calculatedAt": "2026-06-06T12:00:00.000Z",
    "controlResults": [
      {
        "controlId": "CIS-1",
        "score": 33,
        "passed": 1,
        "failed": 2,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "1.1",
            "title": "Maintained, authoritative asset inventory entry",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "1.2",
            "title": "Unauthorized assets are detected and addressed",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "1.3",
            "title": "Passive asset discovery in use on the segment",
            "severity": "low",
            "status": "not_applicable"
          },
          {
            "id": "1.4",
            "title": "DHCP / address-assignment logging reconciled to inventory",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-2",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "2.1",
            "title": "Authorized software inventory maintained",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "2.2",
            "title": "Unsupported / end-of-life software removed or documented",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "2.3",
            "title": "Application allowlisting enforced",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-3",
        "score": 33,
        "passed": 1,
        "failed": 2,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "3.1",
            "title": "Sensitive configuration/project data inventory maintained",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "3.2",
            "title": "Data-at-rest encryption on engineering data",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "3.3",
            "title": "Removable-media controls enforced",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-4",
        "score": 75,
        "passed": 3,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "4.1",
            "title": "Hardened baseline applied (CIS Benchmark)",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "4.2",
            "title": "Default credentials changed",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "4.3",
            "title": "Unnecessary services / ports disabled",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "4.4",
            "title": "Controller keyswitch / write-protection enabled",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "4.5",
            "title": "Session lock / automatic timeout configured",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-5",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "5.1",
            "title": "Inventory of accounts maintained",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "5.2",
            "title": "Default / shared accounts disabled",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "5.3",
            "title": "Dormant accounts disabled",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-6",
        "score": 33,
        "passed": 1,
        "failed": 2,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "6.1",
            "title": "Least-privilege access enforced",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "6.2",
            "title": "Multi-factor authentication for remote / privileged access",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "6.3",
            "title": "Access revoked on role change / departure",
            "severity": "medium",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-7",
        "score": 33,
        "passed": 1,
        "failed": 2,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "7.1",
            "title": "Asset covered by vulnerability scanning",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "7.2",
            "title": "Security patches applied within policy SLA",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "7.3",
            "title": "Firmware updates tracked and applied",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "7.4",
            "title": "Risk-based remediation plan documented",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-8",
        "score": 33,
        "passed": 1,
        "failed": 2,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "8.1",
            "title": "Security event logging enabled",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "8.2",
            "title": "Logs forwarded to central SIEM",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "8.3",
            "title": "Time synchronized to trusted source",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-9",
        "score": 50,
        "passed": 1,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "9.1",
            "title": "Supported browser/email client only",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "9.2",
            "title": "URL / content filtering enforced",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-10",
        "score": 33,
        "passed": 1,
        "failed": 2,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "10.1",
            "title": "Anti-malware deployed and current",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "10.2",
            "title": "Removable-media auto-run disabled",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "10.3",
            "title": "Behavioral / EDR coverage",
            "severity": "medium",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-11",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "11.1",
            "title": "Configuration / project backups taken",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "11.2",
            "title": "Backups tested by restore",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "11.3",
            "title": "Backups stored isolated / offline",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-14",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "14.1",
            "title": "Operators trained on OT security procedures",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-15",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "15.1",
            "title": "Vendor remote-access governed and logged",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-16",
        "score": 50,
        "passed": 1,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "16.1",
            "title": "Vendor application security patches tracked",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "16.2",
            "title": "Hardened application configuration",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-17",
        "score": 50,
        "passed": 1,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "17.1",
            "title": "Asset mapped in incident-response runbook",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "17.2",
            "title": "Recovery contacts / escalation defined",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-18",
        "score": 0,
        "passed": 0,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "18.1",
            "title": "Included in scope of latest assessment",
            "severity": "low",
            "status": "failed"
          }
        ]
      }
    ]
  },
  {
    "assetId": "AST-0071",
    "score": 80,
    "calculatedAt": "2026-06-05T12:00:00.000Z",
    "controlResults": [
      {
        "controlId": "CIS-1",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "1.1",
            "title": "Maintained, authoritative asset inventory entry",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "1.2",
            "title": "Unauthorized assets are detected and addressed",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "1.3",
            "title": "Passive asset discovery in use on the segment",
            "severity": "low",
            "status": "not_applicable"
          },
          {
            "id": "1.4",
            "title": "DHCP / address-assignment logging reconciled to inventory",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-2",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "2.1",
            "title": "Authorized software inventory maintained",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "2.2",
            "title": "Unsupported / end-of-life software removed or documented",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "2.3",
            "title": "Application allowlisting enforced",
            "severity": "medium",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-3",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "3.1",
            "title": "Sensitive configuration/project data inventory maintained",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "3.2",
            "title": "Data-at-rest encryption on engineering data",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "3.3",
            "title": "Removable-media controls enforced",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-4",
        "score": 75,
        "passed": 3,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "4.1",
            "title": "Hardened baseline applied (CIS Benchmark)",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "4.2",
            "title": "Default credentials changed",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "4.3",
            "title": "Unnecessary services / ports disabled",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "4.4",
            "title": "Controller keyswitch / write-protection enabled",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "4.5",
            "title": "Session lock / automatic timeout configured",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-5",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "5.1",
            "title": "Inventory of accounts maintained",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "5.2",
            "title": "Default / shared accounts disabled",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "5.3",
            "title": "Dormant accounts disabled",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-6",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "6.1",
            "title": "Least-privilege access enforced",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "6.2",
            "title": "Multi-factor authentication for remote / privileged access",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "6.3",
            "title": "Access revoked on role change / departure",
            "severity": "medium",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-7",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "7.1",
            "title": "Asset covered by vulnerability scanning",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "7.2",
            "title": "Security patches applied within policy SLA",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "7.3",
            "title": "Firmware updates tracked and applied",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "7.4",
            "title": "Risk-based remediation plan documented",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-8",
        "score": 100,
        "passed": 3,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "8.1",
            "title": "Security event logging enabled",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "8.2",
            "title": "Logs forwarded to central SIEM",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "8.3",
            "title": "Time synchronized to trusted source",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-9",
        "score": 100,
        "passed": 2,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "9.1",
            "title": "Supported browser/email client only",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "9.2",
            "title": "URL / content filtering enforced",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-10",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "10.1",
            "title": "Anti-malware deployed and current",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "10.2",
            "title": "Removable-media auto-run disabled",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "10.3",
            "title": "Behavioral / EDR coverage",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-11",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "11.1",
            "title": "Configuration / project backups taken",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "11.2",
            "title": "Backups tested by restore",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "11.3",
            "title": "Backups stored isolated / offline",
            "severity": "medium",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-14",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "14.1",
            "title": "Operators trained on OT security procedures",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-15",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "15.1",
            "title": "Vendor remote-access governed and logged",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-16",
        "score": 100,
        "passed": 2,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "16.1",
            "title": "Vendor application security patches tracked",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "16.2",
            "title": "Hardened application configuration",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-17",
        "score": 100,
        "passed": 2,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "17.1",
            "title": "Asset mapped in incident-response runbook",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "17.2",
            "title": "Recovery contacts / escalation defined",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-18",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "18.1",
            "title": "Included in scope of latest assessment",
            "severity": "low",
            "status": "passed"
          }
        ]
      }
    ]
  },
  {
    "assetId": "AST-0072",
    "score": 95,
    "calculatedAt": "2026-06-17T12:00:00.000Z",
    "controlResults": [
      {
        "controlId": "CIS-1",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "1.1",
            "title": "Maintained, authoritative asset inventory entry",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "1.2",
            "title": "Unauthorized assets are detected and addressed",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "1.3",
            "title": "Passive asset discovery in use on the segment",
            "severity": "low",
            "status": "not_applicable"
          },
          {
            "id": "1.4",
            "title": "DHCP / address-assignment logging reconciled to inventory",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-2",
        "score": 100,
        "passed": 3,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "2.1",
            "title": "Authorized software inventory maintained",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "2.2",
            "title": "Unsupported / end-of-life software removed or documented",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "2.3",
            "title": "Application allowlisting enforced",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-3",
        "score": 100,
        "passed": 3,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "3.1",
            "title": "Sensitive configuration/project data inventory maintained",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "3.2",
            "title": "Data-at-rest encryption on engineering data",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "3.3",
            "title": "Removable-media controls enforced",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-4",
        "score": 100,
        "passed": 4,
        "failed": 0,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "4.1",
            "title": "Hardened baseline applied (CIS Benchmark)",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "4.2",
            "title": "Default credentials changed",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "4.3",
            "title": "Unnecessary services / ports disabled",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "4.4",
            "title": "Controller keyswitch / write-protection enabled",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "4.5",
            "title": "Session lock / automatic timeout configured",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-5",
        "score": 100,
        "passed": 3,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "5.1",
            "title": "Inventory of accounts maintained",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "5.2",
            "title": "Default / shared accounts disabled",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "5.3",
            "title": "Dormant accounts disabled",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-6",
        "score": 100,
        "passed": 3,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "6.1",
            "title": "Least-privilege access enforced",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "6.2",
            "title": "Multi-factor authentication for remote / privileged access",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "6.3",
            "title": "Access revoked on role change / departure",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-7",
        "score": 100,
        "passed": 3,
        "failed": 0,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "7.1",
            "title": "Asset covered by vulnerability scanning",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "7.2",
            "title": "Security patches applied within policy SLA",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "7.3",
            "title": "Firmware updates tracked and applied",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "7.4",
            "title": "Risk-based remediation plan documented",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-8",
        "score": 100,
        "passed": 3,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "8.1",
            "title": "Security event logging enabled",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "8.2",
            "title": "Logs forwarded to central SIEM",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "8.3",
            "title": "Time synchronized to trusted source",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-9",
        "score": 100,
        "passed": 2,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "9.1",
            "title": "Supported browser/email client only",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "9.2",
            "title": "URL / content filtering enforced",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-10",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "10.1",
            "title": "Anti-malware deployed and current",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "10.2",
            "title": "Removable-media auto-run disabled",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "10.3",
            "title": "Behavioral / EDR coverage",
            "severity": "medium",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-11",
        "score": 100,
        "passed": 3,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "11.1",
            "title": "Configuration / project backups taken",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "11.2",
            "title": "Backups tested by restore",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "11.3",
            "title": "Backups stored isolated / offline",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-14",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "14.1",
            "title": "Operators trained on OT security procedures",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-15",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "15.1",
            "title": "Vendor remote-access governed and logged",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-16",
        "score": 100,
        "passed": 2,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "16.1",
            "title": "Vendor application security patches tracked",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "16.2",
            "title": "Hardened application configuration",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-17",
        "score": 100,
        "passed": 2,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "17.1",
            "title": "Asset mapped in incident-response runbook",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "17.2",
            "title": "Recovery contacts / escalation defined",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-18",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "18.1",
            "title": "Included in scope of latest assessment",
            "severity": "low",
            "status": "passed"
          }
        ]
      }
    ]
  },
  {
    "assetId": "AST-0073",
    "score": 63,
    "calculatedAt": "2026-06-23T12:00:00.000Z",
    "controlResults": [
      {
        "controlId": "CIS-1",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "1.1",
            "title": "Maintained, authoritative asset inventory entry",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "1.2",
            "title": "Unauthorized assets are detected and addressed",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "1.3",
            "title": "Passive asset discovery in use on the segment",
            "severity": "low",
            "status": "not_applicable"
          },
          {
            "id": "1.4",
            "title": "DHCP / address-assignment logging reconciled to inventory",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-2",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "2.1",
            "title": "Authorized software inventory maintained",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "2.2",
            "title": "Unsupported / end-of-life software removed or documented",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "2.3",
            "title": "Application allowlisting enforced",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-3",
        "score": 33,
        "passed": 1,
        "failed": 2,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "3.1",
            "title": "Sensitive configuration/project data inventory maintained",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "3.2",
            "title": "Data-at-rest encryption on engineering data",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "3.3",
            "title": "Removable-media controls enforced",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-4",
        "score": 50,
        "passed": 2,
        "failed": 2,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "4.1",
            "title": "Hardened baseline applied (CIS Benchmark)",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "4.2",
            "title": "Default credentials changed",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "4.3",
            "title": "Unnecessary services / ports disabled",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "4.4",
            "title": "Controller keyswitch / write-protection enabled",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "4.5",
            "title": "Session lock / automatic timeout configured",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-5",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "5.1",
            "title": "Inventory of accounts maintained",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "5.2",
            "title": "Default / shared accounts disabled",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "5.3",
            "title": "Dormant accounts disabled",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-6",
        "score": 33,
        "passed": 1,
        "failed": 2,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "6.1",
            "title": "Least-privilege access enforced",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "6.2",
            "title": "Multi-factor authentication for remote / privileged access",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "6.3",
            "title": "Access revoked on role change / departure",
            "severity": "medium",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-7",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "7.1",
            "title": "Asset covered by vulnerability scanning",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "7.2",
            "title": "Security patches applied within policy SLA",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "7.3",
            "title": "Firmware updates tracked and applied",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "7.4",
            "title": "Risk-based remediation plan documented",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-8",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "8.1",
            "title": "Security event logging enabled",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "8.2",
            "title": "Logs forwarded to central SIEM",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "8.3",
            "title": "Time synchronized to trusted source",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-9",
        "score": 50,
        "passed": 1,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "9.1",
            "title": "Supported browser/email client only",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "9.2",
            "title": "URL / content filtering enforced",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-10",
        "score": 33,
        "passed": 1,
        "failed": 2,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "10.1",
            "title": "Anti-malware deployed and current",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "10.2",
            "title": "Removable-media auto-run disabled",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "10.3",
            "title": "Behavioral / EDR coverage",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-11",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "11.1",
            "title": "Configuration / project backups taken",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "11.2",
            "title": "Backups tested by restore",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "11.3",
            "title": "Backups stored isolated / offline",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-14",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "14.1",
            "title": "Operators trained on OT security procedures",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-15",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "15.1",
            "title": "Vendor remote-access governed and logged",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-16",
        "score": 100,
        "passed": 2,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "16.1",
            "title": "Vendor application security patches tracked",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "16.2",
            "title": "Hardened application configuration",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-17",
        "score": 50,
        "passed": 1,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "17.1",
            "title": "Asset mapped in incident-response runbook",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "17.2",
            "title": "Recovery contacts / escalation defined",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-18",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "18.1",
            "title": "Included in scope of latest assessment",
            "severity": "low",
            "status": "passed"
          }
        ]
      }
    ]
  },
  {
    "assetId": "AST-0075",
    "score": 63,
    "calculatedAt": "2026-06-05T12:00:00.000Z",
    "controlResults": [
      {
        "controlId": "CIS-1",
        "score": 33,
        "passed": 1,
        "failed": 2,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "1.1",
            "title": "Maintained, authoritative asset inventory entry",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "1.2",
            "title": "Unauthorized assets are detected and addressed",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "1.3",
            "title": "Passive asset discovery in use on the segment",
            "severity": "low",
            "status": "not_applicable"
          },
          {
            "id": "1.4",
            "title": "DHCP / address-assignment logging reconciled to inventory",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-2",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "2.1",
            "title": "Authorized software inventory maintained",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "2.2",
            "title": "Unsupported / end-of-life software removed or documented",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "2.3",
            "title": "Application allowlisting enforced",
            "severity": "medium",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-3",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "3.1",
            "title": "Sensitive configuration/project data inventory maintained",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "3.2",
            "title": "Data-at-rest encryption on engineering data",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "3.3",
            "title": "Removable-media controls enforced",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-4",
        "score": 75,
        "passed": 3,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "4.1",
            "title": "Hardened baseline applied (CIS Benchmark)",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "4.2",
            "title": "Default credentials changed",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "4.3",
            "title": "Unnecessary services / ports disabled",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "4.4",
            "title": "Controller keyswitch / write-protection enabled",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "4.5",
            "title": "Session lock / automatic timeout configured",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-5",
        "score": 33,
        "passed": 1,
        "failed": 2,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "5.1",
            "title": "Inventory of accounts maintained",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "5.2",
            "title": "Default / shared accounts disabled",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "5.3",
            "title": "Dormant accounts disabled",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-6",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "6.1",
            "title": "Least-privilege access enforced",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "6.2",
            "title": "Multi-factor authentication for remote / privileged access",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "6.3",
            "title": "Access revoked on role change / departure",
            "severity": "medium",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-7",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "7.1",
            "title": "Asset covered by vulnerability scanning",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "7.2",
            "title": "Security patches applied within policy SLA",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "7.3",
            "title": "Firmware updates tracked and applied",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "7.4",
            "title": "Risk-based remediation plan documented",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-8",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "8.1",
            "title": "Security event logging enabled",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "8.2",
            "title": "Logs forwarded to central SIEM",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "8.3",
            "title": "Time synchronized to trusted source",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-9",
        "score": 100,
        "passed": 2,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "9.1",
            "title": "Supported browser/email client only",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "9.2",
            "title": "URL / content filtering enforced",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-10",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "10.1",
            "title": "Anti-malware deployed and current",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "10.2",
            "title": "Removable-media auto-run disabled",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "10.3",
            "title": "Behavioral / EDR coverage",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-11",
        "score": 33,
        "passed": 1,
        "failed": 2,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "11.1",
            "title": "Configuration / project backups taken",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "11.2",
            "title": "Backups tested by restore",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "11.3",
            "title": "Backups stored isolated / offline",
            "severity": "medium",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-14",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "14.1",
            "title": "Operators trained on OT security procedures",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-15",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "15.1",
            "title": "Vendor remote-access governed and logged",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-16",
        "score": 50,
        "passed": 1,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "16.1",
            "title": "Vendor application security patches tracked",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "16.2",
            "title": "Hardened application configuration",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-17",
        "score": 100,
        "passed": 2,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "17.1",
            "title": "Asset mapped in incident-response runbook",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "17.2",
            "title": "Recovery contacts / escalation defined",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-18",
        "score": 0,
        "passed": 0,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "18.1",
            "title": "Included in scope of latest assessment",
            "severity": "low",
            "status": "failed"
          }
        ]
      }
    ]
  },
  {
    "assetId": "AST-0077",
    "score": 64,
    "calculatedAt": "2026-06-05T12:00:00.000Z",
    "controlResults": [
      {
        "controlId": "CIS-1",
        "score": 50,
        "passed": 2,
        "failed": 2,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "1.1",
            "title": "Maintained, authoritative asset inventory entry",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "1.2",
            "title": "Unauthorized assets are detected and addressed",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "1.3",
            "title": "Passive asset discovery in use on the segment",
            "severity": "low",
            "status": "passed"
          },
          {
            "id": "1.4",
            "title": "DHCP / address-assignment logging reconciled to inventory",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-4",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "4.1",
            "title": "Hardened baseline applied (CIS Benchmark)",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "4.2",
            "title": "Default credentials changed",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "4.3",
            "title": "Unnecessary services / ports disabled",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "4.4",
            "title": "Controller keyswitch / write-protection enabled",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "4.5",
            "title": "Session lock / automatic timeout configured",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-5",
        "score": 33,
        "passed": 1,
        "failed": 2,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "5.1",
            "title": "Inventory of accounts maintained",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "5.2",
            "title": "Default / shared accounts disabled",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "5.3",
            "title": "Dormant accounts disabled",
            "severity": "medium",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-6",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "6.1",
            "title": "Least-privilege access enforced",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "6.2",
            "title": "Multi-factor authentication for remote / privileged access",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "6.3",
            "title": "Access revoked on role change / departure",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-7",
        "score": 50,
        "passed": 2,
        "failed": 2,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "7.1",
            "title": "Asset covered by vulnerability scanning",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "7.2",
            "title": "Security patches applied within policy SLA",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "7.3",
            "title": "Firmware updates tracked and applied",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "7.4",
            "title": "Risk-based remediation plan documented",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-8",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "8.1",
            "title": "Security event logging enabled",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "8.2",
            "title": "Logs forwarded to central SIEM",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "8.3",
            "title": "Time synchronized to trusted source",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-12",
        "score": 75,
        "passed": 3,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "12.1",
            "title": "Network device running supported firmware",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "12.2",
            "title": "Secure management protocols only (SSH/HTTPS)",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "12.3",
            "title": "Network segmentation / zone enforcement",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "12.4",
            "title": "Configuration backups maintained",
            "severity": "medium",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-13",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "13.1",
            "title": "Traffic monitored on the segment (IDS/NSM)",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "13.2",
            "title": "Alerting on anomalous OT traffic",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "13.3",
            "title": "Port-level access control (802.1X / MAC)",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-15",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "15.1",
            "title": "Vendor remote-access governed and logged",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-17",
        "score": 50,
        "passed": 1,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "17.1",
            "title": "Asset mapped in incident-response runbook",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "17.2",
            "title": "Recovery contacts / escalation defined",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-18",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "18.1",
            "title": "Included in scope of latest assessment",
            "severity": "low",
            "status": "passed"
          }
        ]
      }
    ]
  },
  {
    "assetId": "AST-0078",
    "score": 42,
    "calculatedAt": "2026-06-12T12:00:00.000Z",
    "controlResults": [
      {
        "controlId": "CIS-1",
        "score": 50,
        "passed": 2,
        "failed": 2,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "1.1",
            "title": "Maintained, authoritative asset inventory entry",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "1.2",
            "title": "Unauthorized assets are detected and addressed",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "1.3",
            "title": "Passive asset discovery in use on the segment",
            "severity": "low",
            "status": "failed"
          },
          {
            "id": "1.4",
            "title": "DHCP / address-assignment logging reconciled to inventory",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-4",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "4.1",
            "title": "Hardened baseline applied (CIS Benchmark)",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "4.2",
            "title": "Default credentials changed",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "4.3",
            "title": "Unnecessary services / ports disabled",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "4.4",
            "title": "Controller keyswitch / write-protection enabled",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "4.5",
            "title": "Session lock / automatic timeout configured",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-5",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "5.1",
            "title": "Inventory of accounts maintained",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "5.2",
            "title": "Default / shared accounts disabled",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "5.3",
            "title": "Dormant accounts disabled",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-6",
        "score": 33,
        "passed": 1,
        "failed": 2,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "6.1",
            "title": "Least-privilege access enforced",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "6.2",
            "title": "Multi-factor authentication for remote / privileged access",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "6.3",
            "title": "Access revoked on role change / departure",
            "severity": "medium",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-7",
        "score": 50,
        "passed": 2,
        "failed": 2,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "7.1",
            "title": "Asset covered by vulnerability scanning",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "7.2",
            "title": "Security patches applied within policy SLA",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "7.3",
            "title": "Firmware updates tracked and applied",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "7.4",
            "title": "Risk-based remediation plan documented",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-8",
        "score": 33,
        "passed": 1,
        "failed": 2,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "8.1",
            "title": "Security event logging enabled",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "8.2",
            "title": "Logs forwarded to central SIEM",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "8.3",
            "title": "Time synchronized to trusted source",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-12",
        "score": 50,
        "passed": 2,
        "failed": 2,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "12.1",
            "title": "Network device running supported firmware",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "12.2",
            "title": "Secure management protocols only (SSH/HTTPS)",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "12.3",
            "title": "Network segmentation / zone enforcement",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "12.4",
            "title": "Configuration backups maintained",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-13",
        "score": 33,
        "passed": 1,
        "failed": 2,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "13.1",
            "title": "Traffic monitored on the segment (IDS/NSM)",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "13.2",
            "title": "Alerting on anomalous OT traffic",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "13.3",
            "title": "Port-level access control (802.1X / MAC)",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-15",
        "score": 0,
        "passed": 0,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "15.1",
            "title": "Vendor remote-access governed and logged",
            "severity": "medium",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-17",
        "score": 50,
        "passed": 1,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "17.1",
            "title": "Asset mapped in incident-response runbook",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "17.2",
            "title": "Recovery contacts / escalation defined",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-18",
        "score": 0,
        "passed": 0,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "18.1",
            "title": "Included in scope of latest assessment",
            "severity": "low",
            "status": "failed"
          }
        ]
      }
    ]
  },
  {
    "assetId": "AST-0079",
    "score": 61,
    "calculatedAt": "2026-06-13T12:00:00.000Z",
    "controlResults": [
      {
        "controlId": "CIS-1",
        "score": 75,
        "passed": 3,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "1.1",
            "title": "Maintained, authoritative asset inventory entry",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "1.2",
            "title": "Unauthorized assets are detected and addressed",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "1.3",
            "title": "Passive asset discovery in use on the segment",
            "severity": "low",
            "status": "passed"
          },
          {
            "id": "1.4",
            "title": "DHCP / address-assignment logging reconciled to inventory",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-4",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 2,
        "subControls": [
          {
            "id": "4.1",
            "title": "Hardened baseline applied (CIS Benchmark)",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "4.2",
            "title": "Default credentials changed",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "4.3",
            "title": "Unnecessary services / ports disabled",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "4.4",
            "title": "Controller keyswitch / write-protection enabled",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "4.5",
            "title": "Session lock / automatic timeout configured",
            "severity": "low",
            "status": "not_applicable"
          }
        ]
      },
      {
        "controlId": "CIS-5",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "5.1",
            "title": "Inventory of accounts maintained",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "5.2",
            "title": "Default / shared accounts disabled",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "5.3",
            "title": "Dormant accounts disabled",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-6",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "6.1",
            "title": "Least-privilege access enforced",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "6.2",
            "title": "Multi-factor authentication for remote / privileged access",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "6.3",
            "title": "Access revoked on role change / departure",
            "severity": "medium",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-7",
        "score": 50,
        "passed": 2,
        "failed": 2,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "7.1",
            "title": "Asset covered by vulnerability scanning",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "7.2",
            "title": "Security patches applied within policy SLA",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "7.3",
            "title": "Firmware updates tracked and applied",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "7.4",
            "title": "Risk-based remediation plan documented",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-8",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "8.1",
            "title": "Security event logging enabled",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "8.2",
            "title": "Logs forwarded to central SIEM",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "8.3",
            "title": "Time synchronized to trusted source",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-12",
        "score": 50,
        "passed": 2,
        "failed": 2,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "12.1",
            "title": "Network device running supported firmware",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "12.2",
            "title": "Secure management protocols only (SSH/HTTPS)",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "12.3",
            "title": "Network segmentation / zone enforcement",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "12.4",
            "title": "Configuration backups maintained",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-13",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "13.1",
            "title": "Traffic monitored on the segment (IDS/NSM)",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "13.2",
            "title": "Alerting on anomalous OT traffic",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "13.3",
            "title": "Port-level access control (802.1X / MAC)",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-15",
        "score": 0,
        "passed": 0,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "15.1",
            "title": "Vendor remote-access governed and logged",
            "severity": "medium",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-17",
        "score": 50,
        "passed": 1,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "17.1",
            "title": "Asset mapped in incident-response runbook",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "17.2",
            "title": "Recovery contacts / escalation defined",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-18",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "18.1",
            "title": "Included in scope of latest assessment",
            "severity": "low",
            "status": "passed"
          }
        ]
      }
    ]
  },
  {
    "assetId": "AST-0080",
    "score": 71,
    "calculatedAt": "2026-06-24T12:00:00.000Z",
    "controlResults": [
      {
        "controlId": "CIS-1",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "1.1",
            "title": "Maintained, authoritative asset inventory entry",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "1.2",
            "title": "Unauthorized assets are detected and addressed",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "1.3",
            "title": "Passive asset discovery in use on the segment",
            "severity": "low",
            "status": "not_applicable"
          },
          {
            "id": "1.4",
            "title": "DHCP / address-assignment logging reconciled to inventory",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-2",
        "score": 100,
        "passed": 3,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "2.1",
            "title": "Authorized software inventory maintained",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "2.2",
            "title": "Unsupported / end-of-life software removed or documented",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "2.3",
            "title": "Application allowlisting enforced",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-3",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "3.1",
            "title": "Sensitive configuration/project data inventory maintained",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "3.2",
            "title": "Data-at-rest encryption on engineering data",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "3.3",
            "title": "Removable-media controls enforced",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-4",
        "score": 75,
        "passed": 3,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "4.1",
            "title": "Hardened baseline applied (CIS Benchmark)",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "4.2",
            "title": "Default credentials changed",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "4.3",
            "title": "Unnecessary services / ports disabled",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "4.4",
            "title": "Controller keyswitch / write-protection enabled",
            "severity": "high",
            "status": "not_applicable"
          },
          {
            "id": "4.5",
            "title": "Session lock / automatic timeout configured",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-5",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "5.1",
            "title": "Inventory of accounts maintained",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "5.2",
            "title": "Default / shared accounts disabled",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "5.3",
            "title": "Dormant accounts disabled",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-6",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "6.1",
            "title": "Least-privilege access enforced",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "6.2",
            "title": "Multi-factor authentication for remote / privileged access",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "6.3",
            "title": "Access revoked on role change / departure",
            "severity": "medium",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-7",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 1,
        "subControls": [
          {
            "id": "7.1",
            "title": "Asset covered by vulnerability scanning",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "7.2",
            "title": "Security patches applied within policy SLA",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "7.3",
            "title": "Firmware updates tracked and applied",
            "severity": "medium",
            "status": "not_applicable"
          },
          {
            "id": "7.4",
            "title": "Risk-based remediation plan documented",
            "severity": "low",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-8",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "8.1",
            "title": "Security event logging enabled",
            "severity": "high",
            "status": "failed"
          },
          {
            "id": "8.2",
            "title": "Logs forwarded to central SIEM",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "8.3",
            "title": "Time synchronized to trusted source",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-9",
        "score": 50,
        "passed": 1,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "9.1",
            "title": "Supported browser/email client only",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "9.2",
            "title": "URL / content filtering enforced",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-10",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "10.1",
            "title": "Anti-malware deployed and current",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "10.2",
            "title": "Removable-media auto-run disabled",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "10.3",
            "title": "Behavioral / EDR coverage",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-11",
        "score": 67,
        "passed": 2,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "11.1",
            "title": "Configuration / project backups taken",
            "severity": "high",
            "status": "passed"
          },
          {
            "id": "11.2",
            "title": "Backups tested by restore",
            "severity": "medium",
            "status": "passed"
          },
          {
            "id": "11.3",
            "title": "Backups stored isolated / offline",
            "severity": "medium",
            "status": "failed"
          }
        ]
      },
      {
        "controlId": "CIS-14",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "14.1",
            "title": "Operators trained on OT security procedures",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-15",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "15.1",
            "title": "Vendor remote-access governed and logged",
            "severity": "medium",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-16",
        "score": 50,
        "passed": 1,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "16.1",
            "title": "Vendor application security patches tracked",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "16.2",
            "title": "Hardened application configuration",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-17",
        "score": 50,
        "passed": 1,
        "failed": 1,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "17.1",
            "title": "Asset mapped in incident-response runbook",
            "severity": "medium",
            "status": "failed"
          },
          {
            "id": "17.2",
            "title": "Recovery contacts / escalation defined",
            "severity": "low",
            "status": "passed"
          }
        ]
      },
      {
        "controlId": "CIS-18",
        "score": 100,
        "passed": 1,
        "failed": 0,
        "notApplicable": 0,
        "subControls": [
          {
            "id": "18.1",
            "title": "Included in scope of latest assessment",
            "severity": "low",
            "status": "passed"
          }
        ]
      }
    ]
  }
];
