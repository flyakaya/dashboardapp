// Vulnerability register
// Mock data for the Indurex technical assessment — Port Meridian refinery.
// Generated, static & deterministic. Safe to edit. See README.md for the data model.

import type { Vulnerability } from "./types";

/** 25 vulnerabilities. `affectedAssetIds` mirrors `Asset.vulnerabilityIds`. */
export const VULNERABILITIES: Vulnerability[] = [
  {
    "vulnerabilityId": "VLN-001",
    "cveId": "CVE-2022-38465",
    "title": "Siemens SIMATIC S7-1500 global private-key exposure",
    "severity": "critical",
    "cvssV3Score": 9.3,
    "cvssVector": "AV:N/AC:H/PR:N/UI:N/S:U/C:H/I:H/A:H",
    "isKev": false,
    "publishedAt": "2022-10-11T00:00:00.000Z",
    "summary": "Affected S7-1500 firmware protects confidential configuration data with a single hardcoded global private key shared across the product line. That key has been publicly extracted, voiding the protection and exposing engineering communications.",
    "recommendation": "Update to firmware ≥ V3.0.1 (per-device keys) and rotate PG/HMI TLS certificates. Until patched, restrict engineering-port access to authorized workstations and segment behind a zone boundary.",
    "affectedAssetIds": [
      "AST-0014",
      "AST-0015",
      "AST-0045"
    ]
  },
  {
    "vulnerabilityId": "VLN-002",
    "cveId": "CVE-2021-22681",
    "title": "Rockwell Logix controllers authentication bypass via key extraction",
    "severity": "critical",
    "cvssV3Score": 10,
    "cvssVector": "AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H",
    "isKev": false,
    "publishedAt": "2021-02-25T00:00:00.000Z",
    "summary": "Logix controllers authenticate engineering stations with a non-unique key extractable from Studio 5000. An attacker with the key can impersonate a workstation and download modified logic to the PLC over EtherNet/IP (TCP/44818).",
    "recommendation": "Deploy CIP Security, restrict TCP/44818 at zone/conduit boundaries, set the keyswitch to RUN where feasible, and enable change-detection monitoring.",
    "affectedAssetIds": [
      "AST-0001",
      "AST-0002",
      "AST-0021"
    ]
  },
  {
    "vulnerabilityId": "VLN-003",
    "cveId": "CVE-2020-0796",
    "title": "Windows SMBv3 compression remote code execution (SMBGhost)",
    "severity": "critical",
    "cvssV3Score": 10,
    "cvssVector": "AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H",
    "isKev": true,
    "publishedAt": "2020-03-12T00:00:00.000Z",
    "summary": "A buffer overflow in srv2.sys (SMB 3.1.1 compression) allows unauthenticated remote code execution against Windows 10 / Server 1903–1909 hosts with TCP/445 reachable. A single crafted packet is sufficient.",
    "recommendation": "Apply KB4551762, disable SMBv3 compression as an interim mitigation, and block TCP/445 across zone boundaries.",
    "affectedAssetIds": [
      "AST-0016"
    ]
  },
  {
    "vulnerabilityId": "VLN-004",
    "cveId": "CVE-2017-0144",
    "title": "Windows SMBv1 remote code execution (EternalBlue, MS17-010)",
    "severity": "critical",
    "cvssV3Score": 8.1,
    "cvssVector": "AV:N/AC:H/PR:N/UI:N/S:U/C:H/I:H/A:H",
    "cvssV2Score": 9.3,
    "isKev": true,
    "publishedAt": "2017-03-14T00:00:00.000Z",
    "summary": "The legacy SMBv1 server mishandles crafted packets, enabling wormable unauthenticated RCE. Exploited by WannaCry/NotPetya; legacy Windows 7 / Server 2008 R2 OT hosts remain widely exposed.",
    "recommendation": "Apply MS17-010, disable SMBv1 entirely, and isolate any device that cannot be patched.",
    "affectedAssetIds": [
      "AST-0017",
      "AST-0026",
      "AST-0070"
    ]
  },
  {
    "vulnerabilityId": "VLN-005",
    "cveId": "CVE-2020-1472",
    "title": "Netlogon elevation of privilege (Zerologon)",
    "severity": "critical",
    "cvssV3Score": 10,
    "cvssVector": "AV:N/AC:L/PR:N/UI:N/S:C/C:H/I:H/A:H",
    "isKev": true,
    "publishedAt": "2020-08-11T00:00:00.000Z",
    "summary": "A flaw in the Netlogon cryptographic protocol lets an unauthenticated attacker with network access to a domain controller set the DC computer-account password to empty and seize domain admin.",
    "recommendation": "Apply the August 2020 (and follow-up) patches, enable enforcement mode, and audit Netlogon secure-channel events.",
    "affectedAssetIds": [
      "AST-0070"
    ]
  },
  {
    "vulnerabilityId": "VLN-006",
    "cveId": "CVE-2019-0708",
    "title": "Windows RDP remote code execution (BlueKeep)",
    "severity": "critical",
    "cvssV3Score": 9.8,
    "cvssVector": "AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H",
    "isKev": true,
    "publishedAt": "2019-05-14T00:00:00.000Z",
    "summary": "A use-after-free in Remote Desktop Services allows pre-authentication, wormable RCE on legacy Windows 7 / Server 2008 R2 hosts exposing RDP (TCP/3389).",
    "recommendation": "Patch immediately, enable Network Level Authentication, and restrict RDP to the jump host only.",
    "affectedAssetIds": []
  },
  {
    "vulnerabilityId": "VLN-007",
    "cveId": "CVE-2021-44228",
    "title": "Apache Log4j2 JNDI remote code execution (Log4Shell)",
    "severity": "critical",
    "cvssV3Score": 10,
    "cvssVector": "AV:N/AC:L/PR:N/UI:N/S:C/C:H/I:H/A:H",
    "isKev": true,
    "publishedAt": "2021-12-10T00:00:00.000Z",
    "summary": "Log4j2 evaluates attacker-controlled JNDI lookups in logged strings, yielding trivial unauthenticated RCE. Bundled into many historian and SCADA web components.",
    "recommendation": "Upgrade Log4j to ≥ 2.17.1 or set log4j2.formatMsgNoLookups, and inventory all Java components for embedded Log4j.",
    "affectedAssetIds": [
      "AST-0067"
    ]
  },
  {
    "vulnerabilityId": "VLN-008",
    "cveId": "CVE-2021-1675",
    "title": "Windows Print Spooler remote code execution (PrintNightmare)",
    "severity": "critical",
    "cvssV3Score": 8.8,
    "cvssVector": "AV:N/AC:L/PR:L/UI:N/S:C/C:H/I:H/A:H",
    "isKev": true,
    "publishedAt": "2021-06-08T00:00:00.000Z",
    "summary": "The Print Spooler service improperly performs privileged file operations, allowing authenticated attackers to run code as SYSTEM and move laterally across Windows OT hosts.",
    "recommendation": "Apply patches, disable the Print Spooler service on servers that do not print, and restrict Point-and-Print.",
    "affectedAssetIds": [
      "AST-0026",
      "AST-0067",
      "AST-0068",
      "AST-0071",
      "AST-0074"
    ]
  },
  {
    "vulnerabilityId": "VLN-009",
    "cveId": "CVE-2022-30190",
    "title": "Microsoft Support Diagnostic Tool code execution (Follina)",
    "severity": "high",
    "cvssV3Score": 7.8,
    "cvssVector": "AV:L/AC:L/PR:N/UI:R/S:U/C:H/I:H/A:H",
    "isKev": true,
    "publishedAt": "2022-06-01T00:00:00.000Z",
    "summary": "MSDT can be abused via Office documents to execute code with the privileges of the calling application, frequently used for initial access on engineering workstations.",
    "recommendation": "Apply the June 2022 cumulative update, disable the MSDT URL protocol, and enable attack-surface-reduction rules.",
    "affectedAssetIds": [
      "AST-0004",
      "AST-0016",
      "AST-0017",
      "AST-0026",
      "AST-0036",
      "AST-0080"
    ]
  },
  {
    "vulnerabilityId": "VLN-010",
    "cveId": "CVE-2018-0171",
    "title": "Cisco IOS Smart Install remote code execution",
    "severity": "critical",
    "cvssV3Score": 9.8,
    "cvssVector": "AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H",
    "isKev": true,
    "publishedAt": "2018-03-28T00:00:00.000Z",
    "summary": "A buffer overflow in the Smart Install client (TCP/4786) allows unauthenticated RCE or device reload on Cisco IOS/IOS-XE switches. Frequently left enabled on OT-network gear.",
    "recommendation": "Disable Smart Install (no vstack), apply fixed IOS, and block TCP/4786 at boundaries.",
    "affectedAssetIds": [
      "AST-0030",
      "AST-0079"
    ]
  },
  {
    "vulnerabilityId": "VLN-011",
    "cveId": "CVE-2023-27997",
    "title": "Fortinet FortiOS SSL-VPN heap overflow (XORtigate)",
    "severity": "critical",
    "cvssV3Score": 9.8,
    "cvssVector": "AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H",
    "isKev": true,
    "publishedAt": "2023-06-11T00:00:00.000Z",
    "summary": "A heap buffer overflow in the FortiOS SSL-VPN pre-authentication path allows remote code execution on exposed FortiGate firewalls.",
    "recommendation": "Upgrade FortiOS to a fixed release, disable SSL-VPN if unused, and restrict management access.",
    "affectedAssetIds": [
      "AST-0076"
    ]
  },
  {
    "vulnerabilityId": "VLN-012",
    "cveId": "CVE-2018-13379",
    "title": "Fortinet FortiOS SSL-VPN path traversal credential disclosure",
    "severity": "high",
    "cvssV3Score": 9.8,
    "cvssVector": "AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N",
    "isKev": true,
    "publishedAt": "2019-06-04T00:00:00.000Z",
    "summary": "A path-traversal flaw lets unauthenticated attackers download SSL-VPN session files containing plaintext credentials from vulnerable FortiGate devices.",
    "recommendation": "Upgrade FortiOS, reset all VPN credentials, and enable multi-factor authentication.",
    "affectedAssetIds": [
      "AST-0076",
      "AST-0077"
    ]
  },
  {
    "vulnerabilityId": "VLN-013",
    "cveId": "CVE-2024-3400",
    "title": "Palo Alto PAN-OS GlobalProtect command injection",
    "severity": "critical",
    "cvssV3Score": 10,
    "cvssVector": "AV:N/AC:L/PR:N/UI:N/S:C/C:H/I:H/A:H",
    "isKev": true,
    "publishedAt": "2024-04-12T00:00:00.000Z",
    "summary": "A command-injection flaw in the GlobalProtect feature of PAN-OS allows unauthenticated remote code execution with root privileges on the firewall.",
    "recommendation": "Upgrade to a fixed PAN-OS release, apply the threat-prevention signature, and review device for indicators of compromise.",
    "affectedAssetIds": []
  },
  {
    "vulnerabilityId": "VLN-014",
    "cveId": "CVE-2023-3595",
    "title": "Rockwell ControlLogix communication-module RCE",
    "severity": "critical",
    "cvssV3Score": 9.8,
    "cvssVector": "AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H",
    "isKev": false,
    "publishedAt": "2023-07-12T00:00:00.000Z",
    "summary": "Malformed CIP messages to 1756 EN2T/EN3TR communication modules allow remote code execution and the ability to manipulate or wipe module memory, with potential to disrupt the controller.",
    "recommendation": "Apply Rockwell's firmware updates, restrict CIP access to authorized hosts, and monitor for anomalous CIP traffic.",
    "affectedAssetIds": [
      "AST-0001",
      "AST-0013",
      "AST-0025"
    ]
  },
  {
    "vulnerabilityId": "VLN-015",
    "cveId": "CVE-2022-1161",
    "title": "Rockwell Logix controllers hidden compiled-code injection",
    "severity": "high",
    "cvssV3Score": 7.7,
    "cvssVector": "AV:N/AC:L/PR:H/UI:N/S:C/C:H/I:H/A:N",
    "isKev": false,
    "publishedAt": "2022-04-13T00:00:00.000Z",
    "summary": "Affected Logix controllers can execute compiled boot/program code that differs from the visible ladder logic, letting an attacker hide malicious behavior from engineers.",
    "recommendation": "Update controller and Studio 5000 firmware, enforce keyswitch RUN, and verify program integrity against a known-good baseline.",
    "affectedAssetIds": [
      "AST-0001",
      "AST-0013"
    ]
  },
  {
    "vulnerabilityId": "VLN-016",
    "cveId": "CVE-2020-15782",
    "title": "Siemens SIMATIC S7-1200/1500 memory-protection bypass",
    "severity": "high",
    "cvssV3Score": 8.1,
    "cvssVector": "AV:N/AC:H/PR:N/UI:N/S:U/C:H/I:H/A:N",
    "isKev": false,
    "publishedAt": "2021-06-15T00:00:00.000Z",
    "summary": "A flaw in the S7 firmware lets a remote attacker bypass memory protection and read/write protected memory regions, enabling native-code execution on the controller.",
    "recommendation": "Update to fixed firmware and restrict network access to the controller's PG/HMI ports.",
    "affectedAssetIds": [
      "AST-0014",
      "AST-0015"
    ]
  },
  {
    "vulnerabilityId": "VLN-017",
    "cveId": "CVE-2019-10929",
    "title": "Siemens S7 PG/PC communication man-in-the-middle",
    "severity": "medium",
    "cvssV3Score": 5.3,
    "cvssVector": "AV:N/AC:H/PR:N/UI:N/S:U/C:N/I:H/A:N",
    "isKev": false,
    "publishedAt": "2019-09-10T00:00:00.000Z",
    "summary": "An attacker positioned between a PG/PC and an S7 controller can manipulate engineering traffic, potentially altering configuration data in transit.",
    "recommendation": "Use encrypted PG/HMI communication where supported and protect the engineering network against MITM.",
    "affectedAssetIds": [
      "AST-0014",
      "AST-0045"
    ]
  },
  {
    "vulnerabilityId": "VLN-018",
    "cveId": "CVE-2021-22779",
    "title": "Schneider Modicon Modbus authentication bypass",
    "severity": "critical",
    "cvssV3Score": 9.8,
    "cvssVector": "AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H",
    "isKev": false,
    "publishedAt": "2021-07-14T00:00:00.000Z",
    "summary": "A flaw in the Modicon UMAS protocol lets an attacker bypass authentication and perform privileged engineering operations on M340/M580 controllers over the network.",
    "recommendation": "Apply Schneider's fixes, enable application password and Modbus security, and segment controllers from untrusted networks.",
    "affectedAssetIds": [
      "AST-0042"
    ]
  },
  {
    "vulnerabilityId": "VLN-019",
    "cveId": "CVE-2017-12741",
    "title": "Siemens PROFINET DCP denial of service",
    "severity": "high",
    "cvssV3Score": 7.5,
    "cvssVector": "AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H",
    "isKev": false,
    "publishedAt": "2017-09-12T00:00:00.000Z",
    "summary": "Specially crafted PROFINET DCP packets can put affected Siemens devices into a defect state requiring a manual restart, disrupting the controlled process.",
    "recommendation": "Apply firmware updates and restrict PROFINET DCP to trusted local segments.",
    "affectedAssetIds": [
      "AST-0014"
    ]
  },
  {
    "vulnerabilityId": "VLN-020",
    "cveId": "CVE-2020-25159",
    "title": "ProConOS / 4CAPS stack-based buffer overflow",
    "severity": "critical",
    "cvssV3Score": 9.8,
    "cvssVector": "AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H",
    "isKev": false,
    "publishedAt": "2021-03-09T00:00:00.000Z",
    "summary": "A stack overflow in the ProConOS runtime used by several PLC platforms allows unauthenticated remote code execution via the controller's engineering protocol.",
    "recommendation": "Apply vendor firmware updates, restrict access to the runtime's TCP port, and monitor for anomalous connections.",
    "affectedAssetIds": [
      "AST-0005",
      "AST-0023",
      "AST-0035",
      "AST-0044"
    ]
  },
  {
    "vulnerabilityId": "VLN-021",
    "cveId": "CVE-2021-36260",
    "title": "Hikvision IP camera web-server command injection",
    "severity": "critical",
    "cvssV3Score": 9.8,
    "cvssVector": "AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H",
    "isKev": true,
    "publishedAt": "2021-09-18T00:00:00.000Z",
    "summary": "An unauthenticated command-injection flaw in the Hikvision camera web interface allows full device takeover and a pivot into the OT network.",
    "recommendation": "Upgrade camera firmware, place cameras on an isolated VLAN, and disable internet-facing access.",
    "affectedAssetIds": [
      "AST-0012",
      "AST-0024",
      "AST-0041",
      "AST-0050",
      "AST-0064"
    ]
  },
  {
    "vulnerabilityId": "VLN-022",
    "cveId": "CVE-2017-7921",
    "title": "Hikvision IP camera improper authentication",
    "severity": "critical",
    "cvssVector": "AV:N/AC:L/Au:N/C:C/I:C/A:C",
    "cvssV2Score": 10,
    "isKev": true,
    "publishedAt": "2017-05-04T00:00:00.000Z",
    "summary": "An improper-authentication flaw in older Hikvision firmware lets a remote attacker escalate to administrator and retrieve credentials, exposing the camera and connected network.",
    "recommendation": "Upgrade firmware to a fixed release, change default credentials, and isolate cameras on a dedicated VLAN.",
    "affectedAssetIds": [
      "AST-0012",
      "AST-0041",
      "AST-0050"
    ]
  },
  {
    "vulnerabilityId": "VLN-023",
    "cveId": "CVE-2014-0160",
    "title": "OpenSSL TLS heartbeat information disclosure (Heartbleed)",
    "severity": "high",
    "cvssVector": "AV:N/AC:L/Au:N/C:P/I:N/A:N",
    "cvssV2Score": 5,
    "isKev": false,
    "publishedAt": "2014-04-07T00:00:00.000Z",
    "summary": "A missing bounds check in the OpenSSL TLS heartbeat extension lets a remote attacker read up to 64 KB of process memory per request, leaking private keys and session data from exposed services.",
    "recommendation": "Update OpenSSL, reissue and rotate affected certificates and keys, and force credential resets.",
    "affectedAssetIds": [
      "AST-0074"
    ]
  },
  {
    "vulnerabilityId": "VLN-024",
    "cveId": "CVE-2019-18935",
    "title": "Progress Telerik UI .NET deserialization RCE",
    "severity": "critical",
    "cvssV3Score": 9.8,
    "cvssVector": "AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H",
    "isKev": true,
    "publishedAt": "2019-12-11T00:00:00.000Z",
    "summary": "Insecure deserialization in the Telerik UI for ASP.NET AJAX RadAsyncUpload control allows unauthenticated remote code execution on web front-ends bundled with some SCADA/historian portals.",
    "recommendation": "Upgrade Telerik UI, rotate the encryption keys, and remove the file-upload handler if unused.",
    "affectedAssetIds": [
      "AST-0067"
    ]
  },
  {
    "vulnerabilityId": "VLN-025",
    "cveId": "CVE-2022-26809",
    "title": "Windows RPC runtime remote code execution",
    "severity": "critical",
    "cvssV3Score": 9.8,
    "cvssVector": "AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H",
    "isKev": false,
    "publishedAt": "2022-04-12T00:00:00.000Z",
    "summary": "An integer overflow in the Windows RPC runtime allows unauthenticated remote code execution over TCP/135, affecting a broad range of Windows OT hosts.",
    "recommendation": "Apply the April 2022 update and block inbound TCP/135 at network boundaries.",
    "affectedAssetIds": [
      "AST-0016",
      "AST-0036",
      "AST-0068",
      "AST-0069",
      "AST-0073",
      "AST-0080"
    ]
  }
];
