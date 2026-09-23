// Asset inventory
// Mock data for the Indurex technical assessment — Port Meridian refinery.
// Generated, static & deterministic. Safe to edit. See README.md for the data model.

import type { Asset } from "./types";

/** Site the inventory belongs to. */
export const SITE = {
  "id": "site-port-meridian",
  "name": "Port Meridian refinery",
  "description": "Coastal crude-oil refinery — 240 kb/d, 8 process areas",
  "timezone": "Europe/Amsterdam"
} as const;

/** 80 assets. Each links to vulnerabilities via `vulnerabilityIds`
 *  and (when assessed) to a resilience index via `resilienceScore`. */
export const ASSETS: Asset[] = [
  {
    "assetId": "AST-0001",
    "name": "CDU-PLC-01",
    "type": "PLC",
    "assetClass": "plc",
    "status": "online",
    "vendor": "Rockwell Automation",
    "model": "ControlLogix 1756-L85E",
    "zone": "Crude distillation unit (CDU)",
    "purdueLevel": 1,
    "interfaces": [
      {
        "ip": "10.11.10.141",
        "mac": "00:00:BC:82:4E:E5"
      }
    ],
    "firmwareVersion": "3.1.7",
    "protocols": [
      "EtherNet/IP",
      "CIP"
    ],
    "firstSeen": "2026-06-22T12:00:00.000Z",
    "lastSeen": "2026-06-26T11:43:00.000Z",
    "vulnerabilityIds": [
      "VLN-002",
      "VLN-014",
      "VLN-015"
    ],
    "plcConfig": {
      "cpuModel": "ControlLogix 1756-L85E",
      "firmwareVersion": "3.1.7",
      "keyswitch": "run",
      "scanTimeMs": 28,
      "rackSlots": 5,
      "ioModules": [
        {
          "slot": 0,
          "type": "CPU",
          "model": "ControlLogix 1756-L85E"
        },
        {
          "slot": 1,
          "type": "DO",
          "model": "Digital output 32-ch",
          "channels": 32
        },
        {
          "slot": 2,
          "type": "AO",
          "model": "Analog output 8-ch",
          "channels": 8
        },
        {
          "slot": 3,
          "type": "AI",
          "model": "Analog input 16-ch HART",
          "channels": 16
        },
        {
          "slot": 4,
          "type": "AI",
          "model": "Analog input 16-ch HART",
          "channels": 16
        }
      ],
      "programName": "CDU_PLC_01_MAIN",
      "programChecksum": "0x17551655",
      "lastDownload": "2025-09-27T12:00:00.000Z",
      "redundancy": "none"
    },
    "connections": [
      {
        "direction": "outbound",
        "peerAssetId": "AST-0011",
        "protocol": "Modbus",
        "port": 502
      }
    ]
  },
  {
    "assetId": "AST-0002",
    "name": "CDU-PLC-02",
    "type": "PLC",
    "assetClass": "plc",
    "status": "online",
    "vendor": "Rockwell Automation",
    "model": "ControlLogix 1756-L85E",
    "criticality": "high",
    "zone": "Crude distillation unit (CDU)",
    "purdueLevel": 1,
    "interfaces": [
      {
        "ip": "10.11.10.137",
        "mac": "00:00:BC:40:52:FB"
      }
    ],
    "firmwareVersion": "4.8.23",
    "protocols": [
      "EtherNet/IP",
      "CIP"
    ],
    "firstSeen": "2025-10-23T12:00:00.000Z",
    "lastSeen": "2026-06-26T11:18:00.000Z",
    "vulnerabilityIds": [
      "VLN-002"
    ],
    "resilienceScore": 61,
    "plcConfig": {
      "cpuModel": "ControlLogix 1756-L85E",
      "firmwareVersion": "4.8.23",
      "keyswitch": "remote",
      "scanTimeMs": 43,
      "rackSlots": 4,
      "ioModules": [
        {
          "slot": 0,
          "type": "CPU",
          "model": "ControlLogix 1756-L85E"
        },
        {
          "slot": 1,
          "type": "COMM",
          "model": "Comms / fieldbus coupler"
        },
        {
          "slot": 2,
          "type": "AO",
          "model": "Analog output 8-ch",
          "channels": 8
        },
        {
          "slot": 3,
          "type": "DO",
          "model": "Digital output 32-ch",
          "channels": 32
        }
      ],
      "programName": "CDU_PLC_02_MAIN",
      "programChecksum": "0x7BA27CA2",
      "lastDownload": "2026-05-12T12:00:00.000Z",
      "redundancy": "hot-standby"
    }
  },
  {
    "assetId": "AST-0003",
    "name": "CDU-SIS-01",
    "type": "Safety controller",
    "assetClass": "plc",
    "status": "offline",
    "vendor": "Honeywell",
    "model": "Safety Manager SC",
    "zone": "Crude distillation unit (CDU)",
    "purdueLevel": 1,
    "interfaces": [
      {
        "ip": "10.11.10.103",
        "mac": "00:40:84:44:A1:0B"
      }
    ],
    "firmwareVersion": "6.3.4",
    "protocols": [
      "Modbus/TCP"
    ],
    "firstSeen": "2025-11-11T12:00:00.000Z",
    "lastSeen": "2026-05-23T12:00:00.000Z",
    "vulnerabilityIds": [],
    "resilienceScore": 44,
    "plcConfig": {
      "cpuModel": "Safety Manager SC",
      "firmwareVersion": "6.3.4",
      "keyswitch": "run",
      "scanTimeMs": 45,
      "rackSlots": 4,
      "ioModules": [
        {
          "slot": 0,
          "type": "CPU",
          "model": "Safety Manager SC"
        },
        {
          "slot": 1,
          "type": "COMM",
          "model": "Comms / fieldbus coupler"
        },
        {
          "slot": 2,
          "type": "DO",
          "model": "Digital output 32-ch",
          "channels": 32
        },
        {
          "slot": 3,
          "type": "AO",
          "model": "Analog output 8-ch",
          "channels": 8
        }
      ],
      "programName": "CDU_SIS_01_MAIN",
      "programChecksum": "0x85568456",
      "lastDownload": "2026-04-30T12:00:00.000Z",
      "redundancy": "hot-standby"
    }
  },
  {
    "assetId": "AST-0004",
    "name": "CDU-HMI-01",
    "type": "HMI",
    "assetClass": "windows",
    "status": "online",
    "vendor": "Rockwell Automation",
    "model": "PanelView Plus 7",
    "criticality": "medium",
    "zone": "Crude distillation unit (CDU)",
    "purdueLevel": 2,
    "interfaces": [
      {
        "ip": "10.11.20.68",
        "mac": "00:00:BC:23:FA:D6"
      }
    ],
    "operatingSystem": "Windows 7 SP1 (legacy embedded)",
    "protocols": [
      "OPC UA",
      "EtherNet/IP"
    ],
    "firstSeen": "2026-02-01T12:00:00.000Z",
    "lastSeen": "2026-06-26T11:31:00.000Z",
    "vulnerabilityIds": [
      "VLN-009"
    ],
    "resilienceScore": 36,
    "disks": [
      {
        "mount": "C:",
        "label": "System",
        "totalGb": 256,
        "freeGb": 45,
        "type": "SSD"
      }
    ]
  },
  {
    "assetId": "AST-0005",
    "name": "CDU-RTU-01",
    "type": "RTU",
    "assetClass": "plc",
    "status": "online",
    "vendor": "ABB",
    "model": "RTU560",
    "criticality": "medium",
    "zone": "Crude distillation unit (CDU)",
    "purdueLevel": 1,
    "interfaces": [
      {
        "ip": "10.11.10.232",
        "mac": "00:24:59:7D:D5:13"
      }
    ],
    "firmwareVersion": "2.2.12",
    "protocols": [
      "DNP3",
      "Modbus/TCP"
    ],
    "firstSeen": "2026-04-07T12:00:00.000Z",
    "lastSeen": "2026-06-26T11:09:00.000Z",
    "vulnerabilityIds": [
      "VLN-020"
    ]
  },
  {
    "assetId": "AST-0006",
    "name": "CDU-FT-01",
    "type": "Flow transmitter",
    "assetClass": "field",
    "status": "online",
    "vendor": "Emerson",
    "model": "Rosemount 8750W",
    "criticality": "low",
    "zone": "Crude distillation unit (CDU)",
    "purdueLevel": 0,
    "interfaces": [
      {
        "ip": "10.11.0.222",
        "mac": "00:0F:4B:7A:40:5E"
      }
    ],
    "firmwareVersion": "5.5.28",
    "protocols": [
      "HART",
      "Modbus"
    ],
    "firstSeen": "2026-06-20T12:00:00.000Z",
    "lastSeen": "2026-06-26T11:59:00.000Z",
    "vulnerabilityIds": []
  },
  {
    "assetId": "AST-0007",
    "name": "CDU-FT-02",
    "type": "Flow transmitter",
    "assetClass": "field",
    "status": "online",
    "vendor": "Yokogawa",
    "model": "ADMAG AXR",
    "criticality": "low",
    "zone": "Crude distillation unit (CDU)",
    "purdueLevel": 0,
    "interfaces": [
      {
        "ip": "10.11.0.139",
        "mac": "00:00:64:D4:7E:7A"
      }
    ],
    "firmwareVersion": "1.5.1",
    "protocols": [
      "HART",
      "Modbus"
    ],
    "firstSeen": "2026-03-20T12:00:00.000Z",
    "lastSeen": "2026-06-26T11:16:00.000Z",
    "vulnerabilityIds": []
  },
  {
    "assetId": "AST-0008",
    "name": "CDU-PT-01",
    "type": "Pressure transmitter",
    "assetClass": "field",
    "status": "online",
    "vendor": "Emerson",
    "model": "Rosemount 3051S",
    "criticality": "low",
    "zone": "Crude distillation unit (CDU)",
    "purdueLevel": 0,
    "interfaces": [
      {
        "ip": "10.11.0.76",
        "mac": "00:0F:4B:99:20:A2"
      }
    ],
    "firmwareVersion": "2.1.12",
    "protocols": [
      "HART"
    ],
    "firstSeen": "2026-01-11T12:00:00.000Z",
    "lastSeen": "2026-06-26T11:09:00.000Z",
    "vulnerabilityIds": []
  },
  {
    "assetId": "AST-0009",
    "name": "CDU-SW-01",
    "type": "Network switch",
    "assetClass": "network",
    "status": "online",
    "vendor": "Hirschmann",
    "model": "RSP35",
    "criticality": "low",
    "zone": "Crude distillation unit (CDU)",
    "purdueLevel": 2,
    "interfaces": [
      {
        "ip": "10.11.20.198",
        "mac": "00:80:63:39:C9:D0"
      },
      {
        "ip": "10.11.21.198",
        "mac": "00:80:63:FC:4B:67"
      }
    ],
    "firmwareVersion": "5.1.28",
    "protocols": [
      "SNMP",
      "SSH"
    ],
    "firstSeen": "2025-10-13T12:00:00.000Z",
    "lastSeen": "2026-06-26T11:59:00.000Z",
    "vulnerabilityIds": [],
    "resilienceScore": 54
  },
  {
    "assetId": "AST-0010",
    "name": "CDU-VFD-01",
    "type": "Variable frequency drive",
    "assetClass": "plc",
    "status": "online",
    "vendor": "Siemens",
    "model": "SINAMICS G120",
    "criticality": "medium",
    "zone": "Crude distillation unit (CDU)",
    "purdueLevel": 1,
    "interfaces": [
      {
        "ip": "10.11.10.205",
        "mac": "00:1B:1B:53:59:CB"
      }
    ],
    "firmwareVersion": "4.5.21",
    "protocols": [
      "PROFINET"
    ],
    "firstSeen": "2026-01-02T12:00:00.000Z",
    "lastSeen": "2026-06-26T11:38:00.000Z",
    "vulnerabilityIds": [],
    "resilienceScore": 52
  },
  {
    "assetId": "AST-0011",
    "name": "CDU-AIT-01",
    "type": "Gas analyzer",
    "assetClass": "field",
    "status": "online",
    "vendor": "ABB",
    "model": "AO2000 LS25",
    "zone": "Crude distillation unit (CDU)",
    "purdueLevel": 1,
    "interfaces": [
      {
        "ip": "10.11.10.58",
        "mac": "00:24:59:D9:CB:18"
      }
    ],
    "firmwareVersion": "2.8.30",
    "protocols": [
      "Modbus",
      "HART"
    ],
    "firstSeen": "2026-02-06T12:00:00.000Z",
    "lastSeen": "2026-06-26T11:29:00.000Z",
    "vulnerabilityIds": []
  },
  {
    "assetId": "AST-0012",
    "name": "CDU-CAM-01",
    "type": "IP camera",
    "assetClass": "field",
    "status": "offline",
    "vendor": "Hikvision",
    "model": "DS-2CD2T47G2",
    "criticality": "low",
    "zone": "Crude distillation unit (CDU)",
    "purdueLevel": 2,
    "interfaces": [
      {
        "ip": "10.11.20.172",
        "mac": "44:19:B6:0F:79:46"
      }
    ],
    "firmwareVersion": "V5.5.5 build 202673",
    "protocols": [
      "RTSP",
      "ONVIF"
    ],
    "firstSeen": "2026-06-24T12:00:00.000Z",
    "lastSeen": "2026-06-01T12:00:00.000Z",
    "vulnerabilityIds": [
      "VLN-021",
      "VLN-022"
    ]
  },
  {
    "assetId": "AST-0013",
    "name": "FCC-PLC-01",
    "type": "PLC",
    "assetClass": "plc",
    "status": "online",
    "vendor": "Rockwell Automation",
    "model": "ControlLogix 1756-L85E",
    "criticality": "high",
    "zone": "Fluid catalytic cracker (FCC)",
    "purdueLevel": 1,
    "interfaces": [
      {
        "ip": "10.12.10.113",
        "mac": "00:00:BC:37:46:1B"
      }
    ],
    "firmwareVersion": "3.4.27",
    "protocols": [
      "EtherNet/IP",
      "CIP"
    ],
    "firstSeen": "2026-01-08T12:00:00.000Z",
    "lastSeen": "2026-06-26T11:14:00.000Z",
    "vulnerabilityIds": [
      "VLN-014",
      "VLN-015"
    ],
    "resilienceScore": 66,
    "plcConfig": {
      "cpuModel": "ControlLogix 1756-L85E",
      "firmwareVersion": "3.4.27",
      "keyswitch": "run",
      "scanTimeMs": 26,
      "rackSlots": 10,
      "ioModules": [
        {
          "slot": 0,
          "type": "CPU",
          "model": "ControlLogix 1756-L85E"
        },
        {
          "slot": 1,
          "type": "COMM",
          "model": "Comms / fieldbus coupler"
        },
        {
          "slot": 2,
          "type": "DO",
          "model": "Digital output 32-ch",
          "channels": 32
        },
        {
          "slot": 3,
          "type": "DI",
          "model": "Digital input 32-ch",
          "channels": 32
        },
        {
          "slot": 4,
          "type": "DO",
          "model": "Digital output 32-ch",
          "channels": 32
        }
      ],
      "programName": "FCC_PLC_01_MAIN",
      "programChecksum": "0x83668466",
      "lastDownload": "2026-03-27T12:00:00.000Z",
      "redundancy": "none"
    },
    "connections": [
      {
        "direction": "outbound",
        "peerAssetId": "AST-0019",
        "protocol": "HART",
        "port": 5094
      },
      {
        "direction": "outbound",
        "peerAssetId": "AST-0022",
        "protocol": "Modbus",
        "port": 502
      }
    ]
  },
  {
    "assetId": "AST-0014",
    "name": "FCC-PLC-02",
    "type": "PLC",
    "assetClass": "plc",
    "status": "online",
    "vendor": "Siemens",
    "model": "SIMATIC S7-1518-4 PN/DP",
    "criticality": "high",
    "zone": "Fluid catalytic cracker (FCC)",
    "purdueLevel": 1,
    "interfaces": [
      {
        "ip": "10.12.10.151",
        "mac": "00:1B:1B:AB:95:BE"
      }
    ],
    "firmwareVersion": "6.3.24",
    "protocols": [
      "S7comm",
      "PROFINET"
    ],
    "firstSeen": "2026-06-22T12:00:00.000Z",
    "lastSeen": "2026-06-26T11:29:00.000Z",
    "vulnerabilityIds": [
      "VLN-001",
      "VLN-016",
      "VLN-019",
      "VLN-017"
    ],
    "plcConfig": {
      "cpuModel": "SIMATIC S7-1518-4 PN/DP",
      "firmwareVersion": "6.3.24",
      "keyswitch": "run",
      "scanTimeMs": 2,
      "rackSlots": 10,
      "ioModules": [
        {
          "slot": 0,
          "type": "CPU",
          "model": "SIMATIC S7-1518-4 PN/DP"
        },
        {
          "slot": 1,
          "type": "DI",
          "model": "Digital input 32-ch",
          "channels": 32
        },
        {
          "slot": 2,
          "type": "AI",
          "model": "Analog input 16-ch HART",
          "channels": 16
        },
        {
          "slot": 3,
          "type": "AI",
          "model": "Analog input 16-ch HART",
          "channels": 16
        },
        {
          "slot": 4,
          "type": "COMM",
          "model": "Comms / fieldbus coupler"
        },
        {
          "slot": 5,
          "type": "AI",
          "model": "Analog input 16-ch HART",
          "channels": 16
        },
        {
          "slot": 6,
          "type": "AI",
          "model": "Analog input 16-ch HART",
          "channels": 16
        },
        {
          "slot": 7,
          "type": "DO",
          "model": "Digital output 32-ch",
          "channels": 32
        }
      ],
      "programName": "FCC_PLC_02_MAIN",
      "programChecksum": "0x4B884A88",
      "lastDownload": "2026-05-01T12:00:00.000Z",
      "redundancy": "hot-standby"
    }
  },
  {
    "assetId": "AST-0015",
    "name": "FCC-SIS-01",
    "type": "Safety controller",
    "assetClass": "plc",
    "status": "online",
    "vendor": "Siemens",
    "model": "SIMATIC S7-1518F",
    "criticality": "high",
    "zone": "Fluid catalytic cracker (FCC)",
    "purdueLevel": 1,
    "interfaces": [
      {
        "ip": "10.12.10.175",
        "mac": "00:1B:1B:F1:1D:DB"
      }
    ],
    "firmwareVersion": "5.0.22",
    "protocols": [
      "PROFIsafe",
      "PROFINET"
    ],
    "firstSeen": "2025-10-24T12:00:00.000Z",
    "lastSeen": "2026-06-26T11:34:00.000Z",
    "vulnerabilityIds": [
      "VLN-001",
      "VLN-016"
    ],
    "resilienceScore": 24,
    "plcConfig": {
      "cpuModel": "SIMATIC S7-1518F",
      "firmwareVersion": "5.0.22",
      "keyswitch": "run",
      "scanTimeMs": 17,
      "rackSlots": 11,
      "ioModules": [
        {
          "slot": 0,
          "type": "CPU",
          "model": "SIMATIC S7-1518F"
        },
        {
          "slot": 1,
          "type": "DO",
          "model": "Digital output 32-ch",
          "channels": 32
        },
        {
          "slot": 2,
          "type": "AI",
          "model": "Analog input 16-ch HART",
          "channels": 16
        },
        {
          "slot": 3,
          "type": "COMM",
          "model": "Comms / fieldbus coupler"
        },
        {
          "slot": 4,
          "type": "DO",
          "model": "Digital output 32-ch",
          "channels": 32
        }
      ],
      "programName": "FCC_SIS_01_MAIN",
      "programChecksum": "0x44B645B6",
      "lastDownload": "2025-07-22T12:00:00.000Z",
      "redundancy": "hot-standby"
    },
    "connections": [
      {
        "direction": "outbound",
        "peerAssetId": "AST-0018",
        "protocol": "HART",
        "port": 5094
      }
    ]
  },
  {
    "assetId": "AST-0016",
    "name": "FCC-HMI-01",
    "type": "HMI",
    "assetClass": "windows",
    "status": "online",
    "vendor": "Schneider Electric",
    "model": "Magelis GTU",
    "criticality": "medium",
    "zone": "Fluid catalytic cracker (FCC)",
    "purdueLevel": 2,
    "interfaces": [
      {
        "ip": "10.12.20.177",
        "mac": "00:80:F4:35:46:5C"
      }
    ],
    "operatingSystem": "Windows 10 IoT Enterprise LTSC 2021",
    "protocols": [
      "OPC UA",
      "EtherNet/IP"
    ],
    "firstSeen": "2026-03-23T12:00:00.000Z",
    "lastSeen": "2026-06-26T11:25:00.000Z",
    "vulnerabilityIds": [
      "VLN-003",
      "VLN-025",
      "VLN-009"
    ],
    "resilienceScore": 72
  },
  {
    "assetId": "AST-0017",
    "name": "FCC-HMI-02",
    "type": "HMI",
    "assetClass": "windows",
    "status": "online",
    "vendor": "Rockwell Automation",
    "model": "PanelView Plus 7",
    "criticality": "medium",
    "zone": "Fluid catalytic cracker (FCC)",
    "purdueLevel": 2,
    "interfaces": [
      {
        "ip": "10.12.20.37",
        "mac": "00:00:BC:EB:83:3E"
      }
    ],
    "operatingSystem": "Windows 7 SP1 (legacy embedded)",
    "protocols": [
      "OPC UA",
      "EtherNet/IP"
    ],
    "firstSeen": "2025-12-06T12:00:00.000Z",
    "lastSeen": "2026-06-26T11:20:00.000Z",
    "vulnerabilityIds": [
      "VLN-004",
      "VLN-009"
    ],
    "resilienceScore": 44,
    "disks": [
      {
        "mount": "C:",
        "label": "System",
        "totalGb": 256,
        "freeGb": 67,
        "type": "SSD"
      }
    ]
  },
  {
    "assetId": "AST-0018",
    "name": "FCC-FT-01",
    "type": "Flow transmitter",
    "assetClass": "field",
    "status": "online",
    "vendor": "Emerson",
    "model": "Rosemount 8750W",
    "zone": "Fluid catalytic cracker (FCC)",
    "purdueLevel": 0,
    "interfaces": [
      {
        "ip": "10.12.0.182",
        "mac": "00:0F:4B:4C:0C:47"
      }
    ],
    "firmwareVersion": "2.7.29",
    "protocols": [
      "HART",
      "Modbus"
    ],
    "firstSeen": "2025-11-09T12:00:00.000Z",
    "lastSeen": "2026-06-26T11:09:00.000Z",
    "vulnerabilityIds": []
  },
  {
    "assetId": "AST-0019",
    "name": "FCC-PT-01",
    "type": "Pressure transmitter",
    "assetClass": "field",
    "status": "online",
    "vendor": "Emerson",
    "model": "Rosemount 3051S",
    "criticality": "low",
    "zone": "Fluid catalytic cracker (FCC)",
    "purdueLevel": 0,
    "interfaces": [
      {
        "ip": "10.12.0.210",
        "mac": "00:0F:4B:78:31:CD"
      }
    ],
    "firmwareVersion": "2.6.20",
    "protocols": [
      "HART"
    ],
    "firstSeen": "2026-04-11T12:00:00.000Z",
    "lastSeen": "2026-06-26T11:46:00.000Z",
    "vulnerabilityIds": []
  },
  {
    "assetId": "AST-0020",
    "name": "FCC-SW-01",
    "type": "Network switch",
    "assetClass": "network",
    "status": "online",
    "vendor": "Moxa",
    "model": "EDS-G516E",
    "criticality": "low",
    "zone": "Fluid catalytic cracker (FCC)",
    "purdueLevel": 2,
    "interfaces": [
      {
        "ip": "10.12.20.167",
        "mac": "00:90:E8:47:21:1B"
      },
      {
        "ip": "10.12.21.167",
        "mac": "00:90:E8:F0:3F:5D"
      }
    ],
    "firmwareVersion": "4.1.10",
    "protocols": [
      "SNMP",
      "SSH"
    ],
    "firstSeen": "2026-02-13T12:00:00.000Z",
    "lastSeen": "2026-06-26T11:48:00.000Z",
    "vulnerabilityIds": []
  },
  {
    "assetId": "AST-0021",
    "name": "FCC-VFD-01",
    "type": "Variable frequency drive",
    "assetClass": "plc",
    "status": "online",
    "vendor": "Rockwell Automation",
    "model": "PowerFlex 755",
    "criticality": "medium",
    "zone": "Fluid catalytic cracker (FCC)",
    "purdueLevel": 1,
    "interfaces": [
      {
        "ip": "10.12.10.208",
        "mac": "00:00:BC:AA:5A:19"
      }
    ],
    "firmwareVersion": "4.0.0",
    "protocols": [
      "EtherNet/IP"
    ],
    "firstSeen": "2025-11-02T12:00:00.000Z",
    "lastSeen": "2026-06-26T11:16:00.000Z",
    "vulnerabilityIds": [
      "VLN-002"
    ],
    "resilienceScore": 69,
    "connections": [
      {
        "direction": "outbound",
        "peerAssetId": "AST-0018",
        "protocol": "HART",
        "port": 5094
      },
      {
        "direction": "outbound",
        "peerAssetId": "AST-0024",
        "protocol": "RTSP",
        "port": 554
      },
      {
        "direction": "outbound",
        "peerAssetId": "AST-0022",
        "protocol": "Modbus",
        "port": 502
      }
    ]
  },
  {
    "assetId": "AST-0022",
    "name": "FCC-AIT-01",
    "type": "Gas analyzer",
    "assetClass": "field",
    "status": "online",
    "vendor": "ABB",
    "model": "AO2000 LS25",
    "zone": "Fluid catalytic cracker (FCC)",
    "purdueLevel": 1,
    "interfaces": [
      {
        "ip": "10.12.10.42",
        "mac": "00:24:59:52:A4:33"
      }
    ],
    "firmwareVersion": "2.4.13",
    "protocols": [
      "Modbus",
      "HART"
    ],
    "firstSeen": "2025-10-17T12:00:00.000Z",
    "lastSeen": "2026-06-26T11:13:00.000Z",
    "vulnerabilityIds": []
  },
  {
    "assetId": "AST-0023",
    "name": "FCC-RTU-01",
    "type": "RTU",
    "assetClass": "plc",
    "status": "online",
    "vendor": "ABB",
    "model": "RTU560",
    "criticality": "medium",
    "zone": "Fluid catalytic cracker (FCC)",
    "purdueLevel": 1,
    "interfaces": [
      {
        "ip": "10.12.10.99",
        "mac": "00:24:59:17:69:7E"
      }
    ],
    "firmwareVersion": "5.6.18",
    "protocols": [
      "DNP3",
      "Modbus/TCP"
    ],
    "firstSeen": "2026-02-20T12:00:00.000Z",
    "lastSeen": "2026-06-26T11:51:00.000Z",
    "vulnerabilityIds": [
      "VLN-020"
    ],
    "resilienceScore": 95
  },
  {
    "assetId": "AST-0024",
    "name": "FCC-CAM-01",
    "type": "IP camera",
    "assetClass": "field",
    "status": "online",
    "vendor": "Hikvision",
    "model": "DS-2CD2T47G2",
    "zone": "Fluid catalytic cracker (FCC)",
    "purdueLevel": 2,
    "interfaces": [
      {
        "ip": "10.12.20.174",
        "mac": "44:19:B6:4A:6D:18"
      }
    ],
    "firmwareVersion": "V5.6.9 build 200457",
    "protocols": [
      "RTSP",
      "ONVIF"
    ],
    "firstSeen": "2025-10-25T12:00:00.000Z",
    "lastSeen": "2026-06-26T11:56:00.000Z",
    "vulnerabilityIds": [
      "VLN-021"
    ]
  },
  {
    "assetId": "AST-0025",
    "name": "HDT-PLC-01",
    "type": "PLC",
    "assetClass": "plc",
    "status": "online",
    "vendor": "Rockwell Automation",
    "model": "ControlLogix 1756-L85E",
    "criticality": "high",
    "zone": "Hydrotreater (HDT)",
    "purdueLevel": 1,
    "interfaces": [
      {
        "ip": "10.13.10.31",
        "mac": "00:00:BC:F3:23:FC"
      }
    ],
    "firmwareVersion": "2.5.10",
    "protocols": [
      "EtherNet/IP",
      "CIP"
    ],
    "firstSeen": "2025-11-10T12:00:00.000Z",
    "lastSeen": "2026-06-26T11:57:00.000Z",
    "vulnerabilityIds": [
      "VLN-014"
    ],
    "resilienceScore": 39,
    "plcConfig": {
      "cpuModel": "ControlLogix 1756-L85E",
      "firmwareVersion": "2.5.10",
      "keyswitch": "run",
      "scanTimeMs": 28,
      "rackSlots": 11,
      "ioModules": [
        {
          "slot": 0,
          "type": "CPU",
          "model": "ControlLogix 1756-L85E"
        },
        {
          "slot": 1,
          "type": "COMM",
          "model": "Comms / fieldbus coupler"
        },
        {
          "slot": 2,
          "type": "DO",
          "model": "Digital output 32-ch",
          "channels": 32
        },
        {
          "slot": 3,
          "type": "DI",
          "model": "Digital input 32-ch",
          "channels": 32
        },
        {
          "slot": 4,
          "type": "DI",
          "model": "Digital input 32-ch",
          "channels": 32
        },
        {
          "slot": 5,
          "type": "AI",
          "model": "Analog input 16-ch HART",
          "channels": 16
        },
        {
          "slot": 6,
          "type": "AI",
          "model": "Analog input 16-ch HART",
          "channels": 16
        }
      ],
      "programName": "HDT_PLC_01_MAIN",
      "programChecksum": "0xB399B299",
      "lastDownload": "2025-12-21T12:00:00.000Z",
      "redundancy": "none"
    }
  },
  {
    "assetId": "AST-0026",
    "name": "HDT-HMI-01",
    "type": "HMI",
    "assetClass": "windows",
    "status": "online",
    "vendor": "Rockwell Automation",
    "model": "PanelView Plus 7",
    "criticality": "medium",
    "zone": "Hydrotreater (HDT)",
    "purdueLevel": 2,
    "interfaces": [
      {
        "ip": "10.13.20.201",
        "mac": "00:00:BC:8A:CF:FE"
      }
    ],
    "operatingSystem": "Windows 7 SP1 (legacy embedded)",
    "protocols": [
      "OPC UA",
      "EtherNet/IP"
    ],
    "firstSeen": "2026-06-24T12:00:00.000Z",
    "lastSeen": "2026-06-26T11:55:00.000Z",
    "vulnerabilityIds": [
      "VLN-004",
      "VLN-008",
      "VLN-009"
    ],
    "disks": [
      {
        "mount": "C:",
        "label": "System",
        "totalGb": 256,
        "freeGb": 66,
        "type": "SSD"
      }
    ]
  },
  {
    "assetId": "AST-0027",
    "name": "HDT-RTU-01",
    "type": "RTU",
    "assetClass": "plc",
    "status": "online",
    "vendor": "ABB",
    "model": "RTU560",
    "criticality": "medium",
    "zone": "Hydrotreater (HDT)",
    "purdueLevel": 1,
    "interfaces": [
      {
        "ip": "10.13.10.19",
        "mac": "00:24:59:B4:1A:BB"
      }
    ],
    "firmwareVersion": "5.4.12",
    "protocols": [
      "DNP3",
      "Modbus/TCP"
    ],
    "firstSeen": "2025-10-07T12:00:00.000Z",
    "lastSeen": "2026-06-26T11:10:00.000Z",
    "vulnerabilityIds": [],
    "resilienceScore": 92,
    "connections": [
      {
        "direction": "outbound",
        "peerAssetId": "AST-0028",
        "protocol": "HART",
        "port": 5094
      },
      {
        "direction": "outbound",
        "peerAssetId": "AST-0032",
        "protocol": "Modbus",
        "port": 502
      }
    ]
  },
  {
    "assetId": "AST-0028",
    "name": "HDT-FT-01",
    "type": "Flow transmitter",
    "assetClass": "field",
    "status": "online",
    "vendor": "Yokogawa",
    "model": "ADMAG AXR",
    "criticality": "low",
    "zone": "Hydrotreater (HDT)",
    "purdueLevel": 0,
    "interfaces": [
      {
        "ip": "10.13.0.225",
        "mac": "00:00:64:93:44:70"
      }
    ],
    "firmwareVersion": "1.0.27",
    "protocols": [
      "HART",
      "Modbus"
    ],
    "firstSeen": "2026-04-08T12:00:00.000Z",
    "lastSeen": "2026-06-26T11:14:00.000Z",
    "vulnerabilityIds": []
  },
  {
    "assetId": "AST-0029",
    "name": "HDT-PT-01",
    "type": "Pressure transmitter",
    "assetClass": "field",
    "status": "online",
    "vendor": "Endress+Hauser",
    "model": "Cerabar PMP71",
    "criticality": "low",
    "zone": "Hydrotreater (HDT)",
    "purdueLevel": 0,
    "interfaces": [
      {
        "ip": "10.13.0.215",
        "mac": "00:07:05:55:8C:F1"
      }
    ],
    "firmwareVersion": "5.0.27",
    "protocols": [
      "HART"
    ],
    "firstSeen": "2026-01-28T12:00:00.000Z",
    "lastSeen": "2026-06-26T11:50:00.000Z",
    "vulnerabilityIds": []
  },
  {
    "assetId": "AST-0030",
    "name": "HDT-SW-01",
    "type": "Network switch",
    "assetClass": "network",
    "status": "online",
    "vendor": "Cisco",
    "model": "IE-4000-8GT4G-E",
    "criticality": "low",
    "zone": "Hydrotreater (HDT)",
    "purdueLevel": 2,
    "interfaces": [
      {
        "ip": "10.13.20.101",
        "mac": "00:1A:A1:50:4D:93"
      }
    ],
    "firmwareVersion": "IOS-XE 17.9.1",
    "protocols": [
      "SNMP",
      "SSH"
    ],
    "firstSeen": "2025-11-22T12:00:00.000Z",
    "lastSeen": "2026-06-26T11:58:00.000Z",
    "vulnerabilityIds": [
      "VLN-010"
    ],
    "resilienceScore": 88
  },
  {
    "assetId": "AST-0031",
    "name": "HDT-VFD-01",
    "type": "Variable frequency drive",
    "assetClass": "plc",
    "status": "online",
    "vendor": "Rockwell Automation",
    "model": "PowerFlex 755",
    "criticality": "medium",
    "zone": "Hydrotreater (HDT)",
    "purdueLevel": 1,
    "interfaces": [
      {
        "ip": "10.13.10.222",
        "mac": "00:00:BC:05:53:3C"
      }
    ],
    "firmwareVersion": "5.5.4",
    "protocols": [
      "EtherNet/IP"
    ],
    "firstSeen": "2026-02-11T12:00:00.000Z",
    "lastSeen": "2026-06-26T11:43:00.000Z",
    "vulnerabilityIds": [],
    "resilienceScore": 93
  },
  {
    "assetId": "AST-0032",
    "name": "HDT-AIT-01",
    "type": "Gas analyzer",
    "assetClass": "field",
    "status": "offline",
    "vendor": "ABB",
    "model": "AO2000 LS25",
    "criticality": "medium",
    "zone": "Hydrotreater (HDT)",
    "purdueLevel": 1,
    "interfaces": [
      {
        "ip": "10.13.10.105",
        "mac": "00:24:59:CC:90:FC"
      }
    ],
    "firmwareVersion": "5.8.29",
    "protocols": [
      "Modbus",
      "HART"
    ],
    "firstSeen": "2025-10-14T12:00:00.000Z",
    "lastSeen": "2026-05-27T12:00:00.000Z",
    "vulnerabilityIds": []
  },
  {
    "assetId": "AST-0033",
    "name": "HDT-SIS-01",
    "type": "Safety controller",
    "assetClass": "plc",
    "status": "offline",
    "vendor": "Schneider Electric",
    "model": "Modicon M580 Safety",
    "criticality": "high",
    "zone": "Hydrotreater (HDT)",
    "purdueLevel": 1,
    "interfaces": [
      {
        "ip": "10.13.10.112",
        "mac": "00:80:F4:04:B1:77"
      }
    ],
    "firmwareVersion": "3.4.3",
    "protocols": [
      "Modbus/TCP",
      "PROFIsafe"
    ],
    "firstSeen": "2026-03-24T12:00:00.000Z",
    "lastSeen": "2026-05-28T12:00:00.000Z",
    "vulnerabilityIds": [],
    "resilienceScore": 89,
    "plcConfig": {
      "cpuModel": "Modicon M580 Safety",
      "firmwareVersion": "3.4.3",
      "keyswitch": "remote",
      "scanTimeMs": 20,
      "rackSlots": 5,
      "ioModules": [
        {
          "slot": 0,
          "type": "CPU",
          "model": "Modicon M580 Safety"
        },
        {
          "slot": 1,
          "type": "AO",
          "model": "Analog output 8-ch",
          "channels": 8
        },
        {
          "slot": 2,
          "type": "DO",
          "model": "Digital output 32-ch",
          "channels": 32
        },
        {
          "slot": 3,
          "type": "AI",
          "model": "Analog input 16-ch HART",
          "channels": 16
        },
        {
          "slot": 4,
          "type": "DO",
          "model": "Digital output 32-ch",
          "channels": 32
        }
      ],
      "programName": "HDT_SIS_01_MAIN",
      "programChecksum": "0xA8DDA9DD",
      "lastDownload": "2026-05-05T12:00:00.000Z",
      "redundancy": "hot-standby"
    }
  },
  {
    "assetId": "AST-0034",
    "name": "HDT-GW-01",
    "type": "Protocol gateway",
    "assetClass": "network",
    "status": "online",
    "vendor": "Hirschmann",
    "model": "EAGLE40",
    "criticality": "low",
    "zone": "Hydrotreater (HDT)",
    "purdueLevel": 2,
    "interfaces": [
      {
        "ip": "10.13.20.107",
        "mac": "00:80:63:6A:4B:43"
      },
      {
        "ip": "10.13.21.107",
        "mac": "00:80:63:45:7E:AD"
      }
    ],
    "firmwareVersion": "2.6.16",
    "protocols": [
      "Modbus/TCP",
      "DNP3",
      "OPC UA"
    ],
    "firstSeen": "2026-01-28T12:00:00.000Z",
    "lastSeen": "2026-06-26T11:36:00.000Z",
    "vulnerabilityIds": [],
    "resilienceScore": 73
  },
  {
    "assetId": "AST-0035",
    "name": "SRU-PLC-01",
    "type": "PLC",
    "assetClass": "plc",
    "status": "online",
    "vendor": "ABB",
    "model": "AC500 PM592-ETH",
    "criticality": "high",
    "zone": "Sulfur recovery unit (SRU)",
    "purdueLevel": 1,
    "interfaces": [
      {
        "ip": "10.14.10.139",
        "mac": "00:24:59:2B:63:45"
      }
    ],
    "firmwareVersion": "3.9.17",
    "protocols": [
      "Modbus/TCP",
      "PROFINET"
    ],
    "firstSeen": "2026-03-28T12:00:00.000Z",
    "lastSeen": "2026-06-26T11:52:00.000Z",
    "vulnerabilityIds": [
      "VLN-020"
    ],
    "resilienceScore": 94,
    "plcConfig": {
      "cpuModel": "AC500 PM592-ETH",
      "firmwareVersion": "3.9.17",
      "keyswitch": "run",
      "scanTimeMs": 29,
      "rackSlots": 10,
      "ioModules": [
        {
          "slot": 0,
          "type": "CPU",
          "model": "AC500 PM592-ETH"
        },
        {
          "slot": 1,
          "type": "DI",
          "model": "Digital input 32-ch",
          "channels": 32
        },
        {
          "slot": 2,
          "type": "AO",
          "model": "Analog output 8-ch",
          "channels": 8
        },
        {
          "slot": 3,
          "type": "DO",
          "model": "Digital output 32-ch",
          "channels": 32
        },
        {
          "slot": 4,
          "type": "DI",
          "model": "Digital input 32-ch",
          "channels": 32
        },
        {
          "slot": 5,
          "type": "DI",
          "model": "Digital input 32-ch",
          "channels": 32
        },
        {
          "slot": 6,
          "type": "DO",
          "model": "Digital output 32-ch",
          "channels": 32
        },
        {
          "slot": 7,
          "type": "COMM",
          "model": "Comms / fieldbus coupler"
        }
      ],
      "programName": "SRU_PLC_01_MAIN",
      "programChecksum": "0x77B878B8",
      "lastDownload": "2025-07-30T12:00:00.000Z",
      "redundancy": "none"
    }
  },
  {
    "assetId": "AST-0036",
    "name": "SRU-HMI-01",
    "type": "HMI",
    "assetClass": "windows",
    "status": "online",
    "vendor": "Siemens",
    "model": "SIMATIC IPC477E",
    "criticality": "medium",
    "zone": "Sulfur recovery unit (SRU)",
    "purdueLevel": 2,
    "interfaces": [
      {
        "ip": "10.14.20.118",
        "mac": "00:1B:1B:48:BE:30"
      }
    ],
    "operatingSystem": "Windows 10 Enterprise LTSC 21H2",
    "protocols": [
      "OPC UA",
      "EtherNet/IP"
    ],
    "firstSeen": "2026-05-23T12:00:00.000Z",
    "lastSeen": "2026-06-26T11:15:00.000Z",
    "vulnerabilityIds": [
      "VLN-025",
      "VLN-009"
    ],
    "resilienceScore": 51
  },
  {
    "assetId": "AST-0037",
    "name": "SRU-FT-01",
    "type": "Flow transmitter",
    "assetClass": "field",
    "status": "online",
    "vendor": "Endress+Hauser",
    "model": "Proline Promag 400",
    "criticality": "low",
    "zone": "Sulfur recovery unit (SRU)",
    "purdueLevel": 0,
    "interfaces": [
      {
        "ip": "10.14.0.248",
        "mac": "00:07:05:79:B3:BB"
      }
    ],
    "firmwareVersion": "1.5.4",
    "protocols": [
      "HART",
      "Modbus"
    ],
    "firstSeen": "2026-01-28T12:00:00.000Z",
    "lastSeen": "2026-06-26T11:20:00.000Z",
    "vulnerabilityIds": [],
    "resilienceScore": 60
  },
  {
    "assetId": "AST-0038",
    "name": "SRU-PT-01",
    "type": "Pressure transmitter",
    "assetClass": "field",
    "status": "online",
    "vendor": "Endress+Hauser",
    "model": "Cerabar PMP71",
    "zone": "Sulfur recovery unit (SRU)",
    "purdueLevel": 0,
    "interfaces": [
      {
        "ip": "10.14.0.65",
        "mac": "00:07:05:06:6A:74"
      }
    ],
    "firmwareVersion": "6.8.12",
    "protocols": [
      "HART"
    ],
    "firstSeen": "2026-05-24T12:00:00.000Z",
    "lastSeen": "2026-06-26T11:14:00.000Z",
    "vulnerabilityIds": []
  },
  {
    "assetId": "AST-0039",
    "name": "SRU-SW-01",
    "type": "Network switch",
    "assetClass": "network",
    "status": "online",
    "vendor": "Hirschmann",
    "model": "RSP35",
    "criticality": "low",
    "zone": "Sulfur recovery unit (SRU)",
    "purdueLevel": 2,
    "interfaces": [
      {
        "ip": "10.14.20.82",
        "mac": "00:80:63:F5:7D:59"
      }
    ],
    "firmwareVersion": "2.2.23",
    "protocols": [
      "SNMP",
      "SSH"
    ],
    "firstSeen": "2026-05-26T12:00:00.000Z",
    "lastSeen": "2026-06-26T11:59:00.000Z",
    "vulnerabilityIds": [],
    "resilienceScore": 94
  },
  {
    "assetId": "AST-0040",
    "name": "SRU-AIT-01",
    "type": "Gas analyzer",
    "assetClass": "field",
    "status": "online",
    "vendor": "Honeywell",
    "model": "SmartLine STT850",
    "criticality": "medium",
    "zone": "Sulfur recovery unit (SRU)",
    "purdueLevel": 1,
    "interfaces": [
      {
        "ip": "10.14.10.212",
        "mac": "00:40:84:AC:5F:AC"
      }
    ],
    "firmwareVersion": "2.1.1",
    "protocols": [
      "Modbus",
      "HART"
    ],
    "firstSeen": "2025-10-11T12:00:00.000Z",
    "lastSeen": "2026-06-26T11:08:00.000Z",
    "vulnerabilityIds": []
  },
  {
    "assetId": "AST-0041",
    "name": "SRU-CAM-01",
    "type": "IP camera",
    "assetClass": "field",
    "status": "online",
    "vendor": "Hikvision",
    "model": "DS-2CD2T47G2",
    "criticality": "low",
    "zone": "Sulfur recovery unit (SRU)",
    "purdueLevel": 2,
    "interfaces": [
      {
        "ip": "10.14.20.239",
        "mac": "44:19:B6:0E:C3:C1"
      }
    ],
    "firmwareVersion": "V5.5.1 build 206730",
    "protocols": [
      "RTSP",
      "ONVIF"
    ],
    "firstSeen": "2025-11-22T12:00:00.000Z",
    "lastSeen": "2026-06-26T11:35:00.000Z",
    "vulnerabilityIds": [
      "VLN-021",
      "VLN-022"
    ]
  },
  {
    "assetId": "AST-0042",
    "name": "SRU-RTU-01",
    "type": "RTU",
    "assetClass": "plc",
    "status": "online",
    "vendor": "Schneider Electric",
    "model": "SCADAPack 470",
    "criticality": "medium",
    "zone": "Sulfur recovery unit (SRU)",
    "purdueLevel": 1,
    "interfaces": [
      {
        "ip": "10.14.10.58",
        "mac": "00:80:F4:E0:71:89"
      }
    ],
    "firmwareVersion": "5.3.2",
    "protocols": [
      "DNP3",
      "Modbus/TCP"
    ],
    "firstSeen": "2025-12-12T12:00:00.000Z",
    "lastSeen": "2026-06-26T11:33:00.000Z",
    "vulnerabilityIds": [
      "VLN-018"
    ],
    "resilienceScore": 52,
    "connections": [
      {
        "direction": "outbound",
        "peerAssetId": "AST-0041",
        "protocol": "RTSP",
        "port": 554
      },
      {
        "direction": "outbound",
        "peerAssetId": "AST-0038",
        "protocol": "HART",
        "port": 5094
      },
      {
        "direction": "outbound",
        "peerAssetId": "AST-0040",
        "protocol": "Modbus",
        "port": 502
      }
    ]
  },
  {
    "assetId": "AST-0043",
    "name": "TKF-RTU-01",
    "type": "RTU",
    "assetClass": "plc",
    "status": "online",
    "vendor": "ABB",
    "model": "RTU560",
    "criticality": "medium",
    "zone": "Tank farm (TKF)",
    "purdueLevel": 1,
    "interfaces": [
      {
        "ip": "10.15.10.31",
        "mac": "00:24:59:98:76:06"
      }
    ],
    "firmwareVersion": "4.1.28",
    "protocols": [
      "DNP3",
      "Modbus/TCP"
    ],
    "firstSeen": "2025-12-17T12:00:00.000Z",
    "lastSeen": "2026-06-26T11:25:00.000Z",
    "vulnerabilityIds": [],
    "resilienceScore": 64
  },
  {
    "assetId": "AST-0044",
    "name": "TKF-RTU-02",
    "type": "RTU",
    "assetClass": "plc",
    "status": "online",
    "vendor": "ABB",
    "model": "RTU560",
    "criticality": "medium",
    "zone": "Tank farm (TKF)",
    "purdueLevel": 1,
    "interfaces": [
      {
        "ip": "10.15.10.250",
        "mac": "00:24:59:9F:1A:25"
      }
    ],
    "firmwareVersion": "3.1.23",
    "protocols": [
      "DNP3",
      "Modbus/TCP"
    ],
    "firstSeen": "2026-03-01T12:00:00.000Z",
    "lastSeen": "2026-06-26T11:53:00.000Z",
    "vulnerabilityIds": [
      "VLN-020"
    ],
    "resilienceScore": 86
  },
  {
    "assetId": "AST-0045",
    "name": "TKF-PLC-01",
    "type": "PLC",
    "assetClass": "plc",
    "status": "online",
    "vendor": "Siemens",
    "model": "SIMATIC S7-1518-4 PN/DP",
    "criticality": "high",
    "zone": "Tank farm (TKF)",
    "purdueLevel": 1,
    "interfaces": [
      {
        "ip": "10.15.10.47",
        "mac": "00:1B:1B:01:A7:C7"
      }
    ],
    "firmwareVersion": "2.2.22",
    "protocols": [
      "S7comm",
      "PROFINET"
    ],
    "firstSeen": "2026-01-24T12:00:00.000Z",
    "lastSeen": "2026-06-26T11:53:00.000Z",
    "vulnerabilityIds": [
      "VLN-001",
      "VLN-017"
    ],
    "resilienceScore": 75,
    "plcConfig": {
      "cpuModel": "SIMATIC S7-1518-4 PN/DP",
      "firmwareVersion": "2.2.22",
      "keyswitch": "run",
      "scanTimeMs": 30,
      "rackSlots": 9,
      "ioModules": [
        {
          "slot": 0,
          "type": "CPU",
          "model": "SIMATIC S7-1518-4 PN/DP"
        },
        {
          "slot": 1,
          "type": "DO",
          "model": "Digital output 32-ch",
          "channels": 32
        },
        {
          "slot": 2,
          "type": "DO",
          "model": "Digital output 32-ch",
          "channels": 32
        },
        {
          "slot": 3,
          "type": "AI",
          "model": "Analog input 16-ch HART",
          "channels": 16
        },
        {
          "slot": 4,
          "type": "COMM",
          "model": "Comms / fieldbus coupler"
        },
        {
          "slot": 5,
          "type": "AO",
          "model": "Analog output 8-ch",
          "channels": 8
        },
        {
          "slot": 6,
          "type": "DI",
          "model": "Digital input 32-ch",
          "channels": 32
        },
        {
          "slot": 7,
          "type": "AO",
          "model": "Analog output 8-ch",
          "channels": 8
        },
        {
          "slot": 8,
          "type": "COMM",
          "model": "Comms / fieldbus coupler"
        }
      ],
      "programName": "TKF_PLC_01_MAIN",
      "programChecksum": "0x5E1D5D1D",
      "lastDownload": "2026-04-28T12:00:00.000Z",
      "redundancy": "hot-standby"
    },
    "connections": [
      {
        "direction": "outbound",
        "peerAssetId": "AST-0046",
        "protocol": "HART",
        "port": 5094
      },
      {
        "direction": "outbound",
        "peerAssetId": "AST-0049",
        "protocol": "RTSP",
        "port": 554
      }
    ]
  },
  {
    "assetId": "AST-0046",
    "name": "TKF-FT-01",
    "type": "Flow transmitter",
    "assetClass": "field",
    "status": "maintenance",
    "vendor": "Yokogawa",
    "model": "ADMAG AXR",
    "zone": "Tank farm (TKF)",
    "purdueLevel": 0,
    "interfaces": [
      {
        "ip": "10.15.0.28",
        "mac": "00:00:64:2E:2D:95"
      }
    ],
    "firmwareVersion": "6.8.2",
    "protocols": [
      "HART",
      "Modbus"
    ],
    "firstSeen": "2026-05-12T12:00:00.000Z",
    "lastSeen": "2026-06-25T19:27:00.000Z",
    "vulnerabilityIds": []
  },
  {
    "assetId": "AST-0047",
    "name": "TKF-PT-01",
    "type": "Pressure transmitter",
    "assetClass": "field",
    "status": "online",
    "vendor": "Emerson",
    "model": "Rosemount 3051S",
    "criticality": "low",
    "zone": "Tank farm (TKF)",
    "purdueLevel": 0,
    "interfaces": [
      {
        "ip": "10.15.0.248",
        "mac": "00:0F:4B:93:35:10"
      }
    ],
    "firmwareVersion": "2.4.10",
    "protocols": [
      "HART"
    ],
    "firstSeen": "2026-05-19T12:00:00.000Z",
    "lastSeen": "2026-06-26T11:36:00.000Z",
    "vulnerabilityIds": [],
    "resilienceScore": 8
  },
  {
    "assetId": "AST-0048",
    "name": "TKF-SW-01",
    "type": "Network switch",
    "assetClass": "network",
    "status": "maintenance",
    "vendor": "Moxa",
    "model": "EDS-G516E",
    "criticality": "low",
    "zone": "Tank farm (TKF)",
    "purdueLevel": 2,
    "interfaces": [
      {
        "ip": "10.15.20.241",
        "mac": "00:90:E8:04:00:A3"
      },
      {
        "ip": "10.15.21.241",
        "mac": "00:90:E8:3F:1C:4D"
      }
    ],
    "firmwareVersion": "6.2.20",
    "protocols": [
      "SNMP",
      "SSH"
    ],
    "firstSeen": "2026-05-18T12:00:00.000Z",
    "lastSeen": "2026-06-26T04:33:00.000Z",
    "vulnerabilityIds": [],
    "resilienceScore": 86
  },
  {
    "assetId": "AST-0049",
    "name": "TKF-CAM-01",
    "type": "IP camera",
    "assetClass": "field",
    "status": "online",
    "vendor": "Hikvision",
    "model": "DS-2CD2T47G2",
    "zone": "Tank farm (TKF)",
    "purdueLevel": 2,
    "interfaces": [
      {
        "ip": "10.15.20.212",
        "mac": "44:19:B6:D7:57:A8"
      }
    ],
    "firmwareVersion": "V5.4.3 build 219935",
    "protocols": [
      "RTSP",
      "ONVIF"
    ],
    "firstSeen": "2025-12-28T12:00:00.000Z",
    "lastSeen": "2026-06-26T11:29:00.000Z",
    "vulnerabilityIds": []
  },
  {
    "assetId": "AST-0050",
    "name": "TKF-CAM-02",
    "type": "IP camera",
    "assetClass": "field",
    "status": "online",
    "vendor": "Hikvision",
    "model": "DS-2CD2T47G2",
    "criticality": "low",
    "zone": "Tank farm (TKF)",
    "purdueLevel": 2,
    "interfaces": [
      {
        "ip": "10.15.20.220",
        "mac": "44:19:B6:22:76:51"
      }
    ],
    "firmwareVersion": "V5.4.5 build 215977",
    "protocols": [
      "RTSP",
      "ONVIF"
    ],
    "firstSeen": "2025-10-18T12:00:00.000Z",
    "lastSeen": "2026-06-26T11:58:00.000Z",
    "vulnerabilityIds": [
      "VLN-021",
      "VLN-022"
    ]
  },
  {
    "assetId": "AST-0051",
    "name": "TKF-GW-01",
    "type": "Protocol gateway",
    "assetClass": "network",
    "status": "online",
    "vendor": "Moxa",
    "model": "MGate 5105-MB-EIP",
    "criticality": "low",
    "zone": "Tank farm (TKF)",
    "purdueLevel": 2,
    "interfaces": [
      {
        "ip": "10.15.20.195",
        "mac": "00:90:E8:C2:69:40"
      }
    ],
    "firmwareVersion": "5.9.25",
    "protocols": [
      "Modbus/TCP",
      "DNP3",
      "OPC UA"
    ],
    "firstSeen": "2026-03-09T12:00:00.000Z",
    "lastSeen": "2026-06-26T11:33:00.000Z",
    "vulnerabilityIds": [],
    "resilienceScore": 55
  },
  {
    "assetId": "AST-0052",
    "name": "TKF-WAP-01",
    "type": "Wireless AP",
    "assetClass": "network",
    "status": "online",
    "vendor": "Moxa",
    "model": "AWK-3252A",
    "criticality": "low",
    "zone": "Tank farm (TKF)",
    "purdueLevel": 2,
    "interfaces": [
      {
        "ip": "10.15.20.250",
        "mac": "00:90:E8:A6:94:03"
      }
    ],
    "firmwareVersion": "5.0.11",
    "protocols": [
      "802.11",
      "SNMP"
    ],
    "firstSeen": "2025-11-01T12:00:00.000Z",
    "lastSeen": "2026-06-26T11:17:00.000Z",
    "vulnerabilityIds": []
  },
  {
    "assetId": "AST-0053",
    "name": "UTL-PLC-01",
    "type": "PLC",
    "assetClass": "plc",
    "status": "online",
    "vendor": "Rockwell Automation",
    "model": "ControlLogix 1756-L85E",
    "criticality": "high",
    "zone": "Utilities & cooling (UTL)",
    "purdueLevel": 1,
    "interfaces": [
      {
        "ip": "10.16.10.61",
        "mac": "00:00:BC:11:90:EB"
      }
    ],
    "firmwareVersion": "1.1.21",
    "protocols": [
      "EtherNet/IP",
      "CIP"
    ],
    "firstSeen": "2026-04-05T12:00:00.000Z",
    "lastSeen": "2026-06-26T11:10:00.000Z",
    "vulnerabilityIds": [],
    "plcConfig": {
      "cpuModel": "ControlLogix 1756-L85E",
      "firmwareVersion": "1.1.21",
      "keyswitch": "run",
      "scanTimeMs": 22,
      "rackSlots": 4,
      "ioModules": [
        {
          "slot": 0,
          "type": "CPU",
          "model": "ControlLogix 1756-L85E"
        },
        {
          "slot": 1,
          "type": "COMM",
          "model": "Comms / fieldbus coupler"
        },
        {
          "slot": 2,
          "type": "AO",
          "model": "Analog output 8-ch",
          "channels": 8
        },
        {
          "slot": 3,
          "type": "AO",
          "model": "Analog output 8-ch",
          "channels": 8
        }
      ],
      "programName": "UTL_PLC_01_MAIN",
      "programChecksum": "0xE68CE78C",
      "lastDownload": "2026-04-27T12:00:00.000Z",
      "redundancy": "none"
    }
  },
  {
    "assetId": "AST-0054",
    "name": "UTL-HMI-01",
    "type": "HMI",
    "assetClass": "windows",
    "status": "offline",
    "vendor": "Rockwell Automation",
    "model": "PanelView Plus 7",
    "criticality": "medium",
    "zone": "Utilities & cooling (UTL)",
    "purdueLevel": 2,
    "interfaces": [
      {
        "ip": "10.16.20.119",
        "mac": "00:00:BC:04:5B:A6"
      }
    ],
    "operatingSystem": "Windows 10 IoT Enterprise LTSC 2021",
    "protocols": [
      "OPC UA",
      "EtherNet/IP"
    ],
    "firstSeen": "2026-02-09T12:00:00.000Z",
    "lastSeen": "2026-06-14T12:00:00.000Z",
    "vulnerabilityIds": [],
    "resilienceScore": 67,
    "disks": [
      {
        "mount": "C:",
        "label": "System",
        "totalGb": 512,
        "freeGb": 254,
        "type": "SSD"
      }
    ]
  },
  {
    "assetId": "AST-0055",
    "name": "UTL-FT-01",
    "type": "Flow transmitter",
    "assetClass": "field",
    "status": "online",
    "vendor": "Endress+Hauser",
    "model": "Proline Promag 400",
    "zone": "Utilities & cooling (UTL)",
    "purdueLevel": 0,
    "interfaces": [
      {
        "ip": "10.16.0.136",
        "mac": "00:07:05:3E:FA:5F"
      }
    ],
    "firmwareVersion": "5.8.30",
    "protocols": [
      "HART",
      "Modbus"
    ],
    "firstSeen": "2026-03-12T12:00:00.000Z",
    "lastSeen": "2026-06-26T11:39:00.000Z",
    "vulnerabilityIds": []
  },
  {
    "assetId": "AST-0056",
    "name": "UTL-SW-01",
    "type": "Network switch",
    "assetClass": "network",
    "status": "online",
    "vendor": "Moxa",
    "model": "EDS-G516E",
    "criticality": "low",
    "zone": "Utilities & cooling (UTL)",
    "purdueLevel": 2,
    "interfaces": [
      {
        "ip": "10.16.20.219",
        "mac": "00:90:E8:35:A6:D0"
      }
    ],
    "firmwareVersion": "1.3.29",
    "protocols": [
      "SNMP",
      "SSH"
    ],
    "firstSeen": "2025-12-09T12:00:00.000Z",
    "lastSeen": "2026-06-26T11:06:00.000Z",
    "vulnerabilityIds": [],
    "resilienceScore": 36
  },
  {
    "assetId": "AST-0057",
    "name": "UTL-VFD-01",
    "type": "Variable frequency drive",
    "assetClass": "plc",
    "status": "online",
    "vendor": "ABB",
    "model": "ACS880",
    "criticality": "medium",
    "zone": "Utilities & cooling (UTL)",
    "purdueLevel": 1,
    "interfaces": [
      {
        "ip": "10.16.10.165",
        "mac": "00:24:59:57:54:12"
      }
    ],
    "firmwareVersion": "5.5.26",
    "protocols": [
      "Modbus/TCP"
    ],
    "firstSeen": "2026-03-04T12:00:00.000Z",
    "lastSeen": "2026-06-26T11:05:00.000Z",
    "vulnerabilityIds": [],
    "resilienceScore": 89,
    "connections": [
      {
        "direction": "outbound",
        "peerAssetId": "AST-0058",
        "protocol": "HART",
        "port": 5094
      },
      {
        "direction": "outbound",
        "peerAssetId": "AST-0055",
        "protocol": "HART",
        "port": 5094
      }
    ]
  },
  {
    "assetId": "AST-0058",
    "name": "UTL-PT-01",
    "type": "Pressure transmitter",
    "assetClass": "field",
    "status": "online",
    "vendor": "Endress+Hauser",
    "model": "Cerabar PMP71",
    "criticality": "low",
    "zone": "Utilities & cooling (UTL)",
    "purdueLevel": 0,
    "interfaces": [
      {
        "ip": "10.16.0.36",
        "mac": "00:07:05:50:4C:EA"
      }
    ],
    "firmwareVersion": "6.3.15",
    "protocols": [
      "HART"
    ],
    "firstSeen": "2025-11-22T12:00:00.000Z",
    "lastSeen": "2026-06-26T11:09:00.000Z",
    "vulnerabilityIds": []
  },
  {
    "assetId": "AST-0059",
    "name": "UTL-AIT-01",
    "type": "Gas analyzer",
    "assetClass": "field",
    "status": "online",
    "vendor": "Honeywell",
    "model": "SmartLine STT850",
    "zone": "Utilities & cooling (UTL)",
    "purdueLevel": 1,
    "interfaces": [
      {
        "ip": "10.16.10.181",
        "mac": "00:40:84:62:D5:54"
      }
    ],
    "firmwareVersion": "6.9.1",
    "protocols": [
      "Modbus",
      "HART"
    ],
    "firstSeen": "2026-01-29T12:00:00.000Z",
    "lastSeen": "2026-06-26T11:58:00.000Z",
    "vulnerabilityIds": []
  },
  {
    "assetId": "AST-0060",
    "name": "UTL-WAP-01",
    "type": "Wireless AP",
    "assetClass": "network",
    "status": "online",
    "vendor": "Moxa",
    "model": "AWK-3252A",
    "criticality": "low",
    "zone": "Utilities & cooling (UTL)",
    "purdueLevel": 2,
    "interfaces": [
      {
        "ip": "10.16.20.227",
        "mac": "00:90:E8:14:F2:B7"
      },
      {
        "ip": "10.16.21.227",
        "mac": "00:90:E8:39:81:6D"
      }
    ],
    "firmwareVersion": "5.8.20",
    "protocols": [
      "802.11",
      "SNMP"
    ],
    "firstSeen": "2026-02-10T12:00:00.000Z",
    "lastSeen": "2026-06-26T11:17:00.000Z",
    "vulnerabilityIds": [],
    "resilienceScore": 79
  },
  {
    "assetId": "AST-0061",
    "name": "JTY-RTU-01",
    "type": "RTU",
    "assetClass": "plc",
    "status": "online",
    "vendor": "ABB",
    "model": "RTU560",
    "criticality": "medium",
    "zone": "Marine jetty & loading (JTY)",
    "purdueLevel": 1,
    "interfaces": [
      {
        "ip": "10.17.10.133",
        "mac": "00:24:59:28:05:3F"
      }
    ],
    "firmwareVersion": "6.5.23",
    "protocols": [
      "DNP3",
      "Modbus/TCP"
    ],
    "firstSeen": "2025-12-13T12:00:00.000Z",
    "lastSeen": "2026-06-26T11:31:00.000Z",
    "vulnerabilityIds": [],
    "resilienceScore": 89,
    "connections": [
      {
        "direction": "outbound",
        "peerAssetId": "AST-0062",
        "protocol": "HART",
        "port": 5094
      },
      {
        "direction": "outbound",
        "peerAssetId": "AST-0064",
        "protocol": "RTSP",
        "port": 554
      }
    ]
  },
  {
    "assetId": "AST-0062",
    "name": "JTY-FT-01",
    "type": "Flow transmitter",
    "assetClass": "field",
    "status": "online",
    "vendor": "Endress+Hauser",
    "model": "Proline Promag 400",
    "criticality": "low",
    "zone": "Marine jetty & loading (JTY)",
    "purdueLevel": 0,
    "interfaces": [
      {
        "ip": "10.17.0.236",
        "mac": "00:07:05:0F:39:DD"
      }
    ],
    "firmwareVersion": "2.3.29",
    "protocols": [
      "HART",
      "Modbus"
    ],
    "firstSeen": "2025-09-29T12:00:00.000Z",
    "lastSeen": "2026-06-26T11:55:00.000Z",
    "vulnerabilityIds": []
  },
  {
    "assetId": "AST-0063",
    "name": "JTY-SW-01",
    "type": "Network switch",
    "assetClass": "network",
    "status": "online",
    "vendor": "Moxa",
    "model": "EDS-G516E",
    "criticality": "low",
    "zone": "Marine jetty & loading (JTY)",
    "purdueLevel": 2,
    "interfaces": [
      {
        "ip": "10.17.20.51",
        "mac": "00:90:E8:F9:E3:77"
      },
      {
        "ip": "10.17.21.51",
        "mac": "00:90:E8:EE:D7:6F"
      }
    ],
    "firmwareVersion": "2.7.23",
    "protocols": [
      "SNMP",
      "SSH"
    ],
    "firstSeen": "2026-05-01T12:00:00.000Z",
    "lastSeen": "2026-06-26T11:49:00.000Z",
    "vulnerabilityIds": [],
    "resilienceScore": 85
  },
  {
    "assetId": "AST-0064",
    "name": "JTY-CAM-01",
    "type": "IP camera",
    "assetClass": "field",
    "status": "online",
    "vendor": "Hikvision",
    "model": "DS-2CD2T47G2",
    "criticality": "low",
    "zone": "Marine jetty & loading (JTY)",
    "purdueLevel": 2,
    "interfaces": [
      {
        "ip": "10.17.20.72",
        "mac": "44:19:B6:5D:2A:F7"
      }
    ],
    "firmwareVersion": "V5.5.9 build 203615",
    "protocols": [
      "RTSP",
      "ONVIF"
    ],
    "firstSeen": "2026-04-19T12:00:00.000Z",
    "lastSeen": "2026-06-26T11:06:00.000Z",
    "vulnerabilityIds": [
      "VLN-021"
    ]
  },
  {
    "assetId": "AST-0065",
    "name": "JTY-GW-01",
    "type": "Protocol gateway",
    "assetClass": "network",
    "status": "online",
    "vendor": "Moxa",
    "model": "MGate 5105-MB-EIP",
    "criticality": "low",
    "zone": "Marine jetty & loading (JTY)",
    "purdueLevel": 2,
    "interfaces": [
      {
        "ip": "10.17.20.250",
        "mac": "00:90:E8:F1:1C:84"
      }
    ],
    "firmwareVersion": "4.9.16",
    "protocols": [
      "Modbus/TCP",
      "DNP3",
      "OPC UA"
    ],
    "firstSeen": "2026-03-23T12:00:00.000Z",
    "lastSeen": "2026-06-26T11:24:00.000Z",
    "vulnerabilityIds": [],
    "resilienceScore": 57
  },
  {
    "assetId": "AST-0066",
    "name": "JTY-WAP-01",
    "type": "Wireless AP",
    "assetClass": "network",
    "status": "online",
    "vendor": "Cisco",
    "model": "IW6300 Heavy Duty",
    "criticality": "low",
    "zone": "Marine jetty & loading (JTY)",
    "purdueLevel": 2,
    "interfaces": [
      {
        "ip": "10.17.20.139",
        "mac": "00:1A:A1:A7:11:B8"
      }
    ],
    "firmwareVersion": "IOS-XE 17.7.3",
    "protocols": [
      "802.11",
      "SNMP"
    ],
    "firstSeen": "2025-10-06T12:00:00.000Z",
    "lastSeen": "2026-06-26T11:46:00.000Z",
    "vulnerabilityIds": [],
    "resilienceScore": 83
  },
  {
    "assetId": "AST-0067",
    "name": "CTL-SCADA-01",
    "type": "SCADA server",
    "assetClass": "windows",
    "status": "online",
    "vendor": "Schneider Electric",
    "model": "EcoStruxure Geo SCADA 2021",
    "criticality": "high",
    "zone": "Central control room & IT/DMZ (CTL)",
    "purdueLevel": 2,
    "interfaces": [
      {
        "ip": "10.10.20.58",
        "mac": "00:80:F4:B9:AB:A3"
      }
    ],
    "operatingSystem": "Windows Server 2019",
    "protocols": [
      "OPC UA",
      "OPC DA"
    ],
    "firstSeen": "2025-11-15T12:00:00.000Z",
    "lastSeen": "2026-06-26T11:27:00.000Z",
    "vulnerabilityIds": [
      "VLN-007",
      "VLN-008",
      "VLN-024"
    ],
    "resilienceScore": 61,
    "disks": [
      {
        "mount": "C:",
        "label": "System",
        "totalGb": 1024,
        "freeGb": 223,
        "type": "SSD"
      },
      {
        "mount": "D:",
        "label": "Data",
        "totalGb": 4096,
        "freeGb": 1287,
        "type": "SSD"
      }
    ],
    "connections": [
      {
        "direction": "outbound",
        "peerAssetId": "AST-0045",
        "protocol": "OPC UA",
        "port": 4840
      },
      {
        "direction": "outbound",
        "peerAssetId": "AST-0025",
        "protocol": "OPC UA",
        "port": 4840
      }
    ]
  },
  {
    "assetId": "AST-0068",
    "name": "CTL-SCADA-02",
    "type": "SCADA server",
    "assetClass": "windows",
    "status": "online",
    "vendor": "Honeywell",
    "model": "SCADA server (generic)",
    "criticality": "high",
    "zone": "Central control room & IT/DMZ (CTL)",
    "purdueLevel": 2,
    "interfaces": [
      {
        "ip": "10.10.20.120",
        "mac": "00:40:84:DB:3D:0B"
      }
    ],
    "operatingSystem": "Windows Server 2016",
    "protocols": [
      "OPC UA",
      "OPC DA"
    ],
    "firstSeen": "2026-01-30T12:00:00.000Z",
    "lastSeen": "2026-06-26T11:28:00.000Z",
    "vulnerabilityIds": [
      "VLN-008",
      "VLN-025"
    ],
    "resilienceScore": 80,
    "disks": [
      {
        "mount": "C:",
        "label": "System",
        "totalGb": 1024,
        "freeGb": 397,
        "type": "SSD"
      }
    ],
    "connections": [
      {
        "direction": "outbound",
        "peerAssetId": "AST-0043",
        "protocol": "OPC UA",
        "port": 4840
      },
      {
        "direction": "outbound",
        "peerAssetId": "AST-0001",
        "protocol": "OPC UA",
        "port": 4840
      },
      {
        "direction": "outbound",
        "peerAssetId": "AST-0013",
        "protocol": "OPC UA",
        "port": 4840
      }
    ]
  },
  {
    "assetId": "AST-0069",
    "name": "CTL-HIST-01",
    "type": "Historian",
    "assetClass": "windows",
    "status": "online",
    "vendor": "OSIsoft",
    "model": "PI Server 2018 SP3",
    "criticality": "medium",
    "zone": "Central control room & IT/DMZ (CTL)",
    "purdueLevel": 3,
    "interfaces": [
      {
        "ip": "10.10.30.236",
        "mac": "00:50:56:64:20:FE"
      }
    ],
    "operatingSystem": "Windows Server 2016",
    "protocols": [
      "OPC UA",
      "HTTPS"
    ],
    "firstSeen": "2026-02-08T12:00:00.000Z",
    "lastSeen": "2026-06-26T11:42:00.000Z",
    "vulnerabilityIds": [
      "VLN-025"
    ],
    "resilienceScore": 87,
    "disks": [
      {
        "mount": "C:",
        "label": "System",
        "totalGb": 512,
        "freeGb": 121,
        "type": "SSD"
      },
      {
        "mount": "D:",
        "label": "PI archive",
        "totalGb": 8192,
        "freeGb": 1277,
        "type": "HDD"
      }
    ],
    "connections": [
      {
        "direction": "inbound",
        "peerAssetId": "AST-0068",
        "protocol": "OPC UA",
        "port": 4840
      }
    ]
  },
  {
    "assetId": "AST-0070",
    "name": "CTL-DC-01",
    "type": "Domain controller",
    "assetClass": "windows",
    "status": "online",
    "vendor": "Microsoft",
    "model": "Windows Server (VM)",
    "criticality": "high",
    "zone": "Central control room & IT/DMZ (CTL)",
    "purdueLevel": 3,
    "interfaces": [
      {
        "ip": "10.10.30.193",
        "mac": "00:15:5D:D0:2B:93"
      }
    ],
    "operatingSystem": "Windows Server 2008 R2 (legacy)",
    "protocols": [
      "LDAP",
      "Kerberos",
      "SMB"
    ],
    "firstSeen": "2026-03-22T12:00:00.000Z",
    "lastSeen": "2026-06-26T11:52:00.000Z",
    "vulnerabilityIds": [
      "VLN-004",
      "VLN-005"
    ],
    "resilienceScore": 50,
    "disks": [
      {
        "mount": "C:",
        "label": "System",
        "totalGb": 512,
        "freeGb": 330,
        "type": "SSD"
      },
      {
        "mount": "D:",
        "label": "Data",
        "totalGb": 4096,
        "freeGb": 1113,
        "type": "SSD"
      }
    ],
    "connections": [
      {
        "direction": "inbound",
        "peerAssetId": "AST-0004",
        "protocol": "Kerberos",
        "port": 88
      },
      {
        "direction": "inbound",
        "peerAssetId": "AST-0069",
        "protocol": "Kerberos",
        "port": 88
      },
      {
        "direction": "inbound",
        "peerAssetId": "AST-0072",
        "protocol": "Kerberos",
        "port": 88
      }
    ]
  },
  {
    "assetId": "AST-0071",
    "name": "CTL-EWS-01",
    "type": "Engineering workstation",
    "assetClass": "windows",
    "status": "online",
    "vendor": "HP",
    "model": "Z2 G9 Tower",
    "criticality": "low",
    "zone": "Central control room & IT/DMZ (CTL)",
    "purdueLevel": 3,
    "interfaces": [
      {
        "ip": "10.10.30.48",
        "mac": "00:1F:29:9E:1B:11"
      }
    ],
    "operatingSystem": "Windows 10 IoT Enterprise LTSC 2021",
    "protocols": [
      "OPC UA",
      "RDP"
    ],
    "firstSeen": "2026-04-06T12:00:00.000Z",
    "lastSeen": "2026-06-26T11:23:00.000Z",
    "vulnerabilityIds": [
      "VLN-008"
    ],
    "resilienceScore": 80,
    "connections": [
      {
        "direction": "outbound",
        "peerAssetId": "AST-0035",
        "protocol": "Modbus/TCP",
        "port": 502
      },
      {
        "direction": "outbound",
        "peerAssetId": "AST-0053",
        "protocol": "EtherNet/IP",
        "port": 44818
      }
    ]
  },
  {
    "assetId": "AST-0072",
    "name": "CTL-EWS-02",
    "type": "Engineering workstation",
    "assetClass": "windows",
    "status": "online",
    "vendor": "Dell",
    "model": "OptiPlex 7090",
    "criticality": "low",
    "zone": "Central control room & IT/DMZ (CTL)",
    "purdueLevel": 3,
    "interfaces": [
      {
        "ip": "10.10.30.87",
        "mac": "00:14:22:A1:7D:B1"
      }
    ],
    "operatingSystem": "Windows 10 IoT Enterprise LTSC 2021",
    "protocols": [
      "OPC UA",
      "RDP"
    ],
    "firstSeen": "2026-03-26T12:00:00.000Z",
    "lastSeen": "2026-06-26T11:26:00.000Z",
    "vulnerabilityIds": [],
    "resilienceScore": 95,
    "disks": [
      {
        "mount": "C:",
        "label": "System",
        "totalGb": 512,
        "freeGb": 274,
        "type": "SSD"
      }
    ],
    "connections": [
      {
        "direction": "outbound",
        "peerAssetId": "AST-0001",
        "protocol": "EtherNet/IP",
        "port": 44818
      },
      {
        "direction": "outbound",
        "peerAssetId": "AST-0015",
        "protocol": "PROFIsafe",
        "port": 34964
      }
    ]
  },
  {
    "assetId": "AST-0073",
    "name": "CTL-EWS-03",
    "type": "Engineering workstation",
    "assetClass": "windows",
    "status": "online",
    "vendor": "HP",
    "model": "Z2 G9 Tower",
    "criticality": "low",
    "zone": "Central control room & IT/DMZ (CTL)",
    "purdueLevel": 3,
    "interfaces": [
      {
        "ip": "10.10.30.117",
        "mac": "00:1F:29:E0:A8:07"
      }
    ],
    "operatingSystem": "Windows 10 Enterprise LTSC 21H2",
    "protocols": [
      "OPC UA",
      "RDP"
    ],
    "firstSeen": "2026-05-01T12:00:00.000Z",
    "lastSeen": "2026-06-26T11:41:00.000Z",
    "vulnerabilityIds": [
      "VLN-025"
    ],
    "resilienceScore": 63,
    "disks": [
      {
        "mount": "C:",
        "label": "System",
        "totalGb": 256,
        "freeGb": 71,
        "type": "SSD"
      }
    ],
    "connections": [
      {
        "direction": "outbound",
        "peerAssetId": "AST-0013",
        "protocol": "EtherNet/IP",
        "port": 44818
      },
      {
        "direction": "outbound",
        "peerAssetId": "AST-0043",
        "protocol": "DNP3",
        "port": 20000
      }
    ]
  },
  {
    "assetId": "AST-0074",
    "name": "CTL-JMP-01",
    "type": "Jump host",
    "assetClass": "windows",
    "status": "offline",
    "vendor": "Microsoft",
    "model": "Windows Server (VM)",
    "criticality": "medium",
    "zone": "Central control room & IT/DMZ (CTL)",
    "purdueLevel": 3.5,
    "interfaces": [
      {
        "ip": "10.10.35.54",
        "mac": "00:15:5D:79:36:42"
      }
    ],
    "operatingSystem": "Windows Server 2022",
    "protocols": [
      "RDP",
      "HTTPS"
    ],
    "firstSeen": "2025-11-21T12:00:00.000Z",
    "lastSeen": null,
    "vulnerabilityIds": [
      "VLN-008",
      "VLN-023"
    ],
    "disks": [
      {
        "mount": "C:",
        "label": "System",
        "totalGb": 256,
        "freeGb": 52,
        "type": "SSD"
      }
    ],
    "connections": [
      {
        "direction": "outbound",
        "peerAssetId": "AST-0036",
        "protocol": "RDP",
        "port": 3389
      },
      {
        "direction": "outbound",
        "peerAssetId": "AST-0026",
        "protocol": "RDP",
        "port": 3389
      },
      {
        "direction": "outbound",
        "peerAssetId": "AST-0068",
        "protocol": "RDP",
        "port": 3389
      }
    ]
  },
  {
    "assetId": "AST-0075",
    "name": "CTL-WSUS-01",
    "type": "Patch server",
    "assetClass": "windows",
    "status": "maintenance",
    "vendor": "Microsoft",
    "model": "WSUS (VM)",
    "criticality": "low",
    "zone": "Central control room & IT/DMZ (CTL)",
    "purdueLevel": 3.5,
    "interfaces": [
      {
        "ip": "10.10.35.219",
        "mac": "00:15:5D:D3:7A:FE"
      }
    ],
    "operatingSystem": "Windows Server 2022",
    "protocols": [
      "HTTPS",
      "SMB"
    ],
    "firstSeen": "2025-10-21T12:00:00.000Z",
    "lastSeen": "2026-06-25T20:50:00.000Z",
    "vulnerabilityIds": [],
    "resilienceScore": 63,
    "disks": [
      {
        "mount": "C:",
        "label": "System",
        "totalGb": 512,
        "freeGb": 208,
        "type": "SSD"
      },
      {
        "mount": "D:",
        "label": "Data",
        "totalGb": 4096,
        "freeGb": 1256,
        "type": "SSD"
      }
    ]
  },
  {
    "assetId": "AST-0076",
    "name": "CTL-FW-01",
    "type": "Firewall",
    "assetClass": "network",
    "status": "online",
    "vendor": "Fortinet",
    "model": "FortiGate 100F",
    "zone": "Central control room & IT/DMZ (CTL)",
    "purdueLevel": 3.5,
    "interfaces": [
      {
        "ip": "10.10.35.95",
        "mac": "00:09:0F:FC:50:94"
      }
    ],
    "firmwareVersion": "FortiOS 6.3.9",
    "protocols": [
      "HTTPS",
      "IPsec",
      "SSH"
    ],
    "firstSeen": "2026-06-19T12:00:00.000Z",
    "lastSeen": "2026-06-26T11:55:00.000Z",
    "vulnerabilityIds": [
      "VLN-011",
      "VLN-012"
    ]
  },
  {
    "assetId": "AST-0077",
    "name": "CTL-FW-02",
    "type": "Firewall",
    "assetClass": "network",
    "status": "online",
    "vendor": "Fortinet",
    "model": "FortiGate 100F",
    "criticality": "medium",
    "zone": "Central control room & IT/DMZ (CTL)",
    "purdueLevel": 3.5,
    "interfaces": [
      {
        "ip": "10.10.35.46",
        "mac": "00:09:0F:68:E1:05"
      },
      {
        "ip": "10.10.36.46",
        "mac": "00:09:0F:65:89:97"
      }
    ],
    "firmwareVersion": "FortiOS 6.0.5",
    "protocols": [
      "HTTPS",
      "IPsec",
      "SSH"
    ],
    "firstSeen": "2026-04-07T12:00:00.000Z",
    "lastSeen": "2026-06-26T11:58:00.000Z",
    "vulnerabilityIds": [
      "VLN-012"
    ],
    "resilienceScore": 64
  },
  {
    "assetId": "AST-0078",
    "name": "CTL-SW-01",
    "type": "Network switch",
    "assetClass": "network",
    "status": "offline",
    "vendor": "Hirschmann",
    "model": "RSP35",
    "criticality": "low",
    "zone": "Central control room & IT/DMZ (CTL)",
    "purdueLevel": 2,
    "interfaces": [
      {
        "ip": "10.10.20.40",
        "mac": "00:80:63:FF:CD:49"
      },
      {
        "ip": "10.10.21.40",
        "mac": "00:80:63:74:E1:11"
      }
    ],
    "firmwareVersion": "4.4.23",
    "protocols": [
      "SNMP",
      "SSH"
    ],
    "firstSeen": "2026-04-01T12:00:00.000Z",
    "lastSeen": "2026-06-02T12:00:00.000Z",
    "vulnerabilityIds": [],
    "resilienceScore": 42
  },
  {
    "assetId": "AST-0079",
    "name": "CTL-RTR-01",
    "type": "Router",
    "assetClass": "network",
    "status": "online",
    "vendor": "Cisco",
    "model": "ISR 4331",
    "criticality": "medium",
    "zone": "Central control room & IT/DMZ (CTL)",
    "purdueLevel": 3,
    "interfaces": [
      {
        "ip": "10.10.30.31",
        "mac": "00:1A:A1:0D:9B:70"
      },
      {
        "ip": "10.10.31.31",
        "mac": "00:1A:A1:DF:83:B6"
      }
    ],
    "firmwareVersion": "IOS-XE 17.4.1",
    "protocols": [
      "BGP",
      "SNMP",
      "SSH"
    ],
    "firstSeen": "2025-10-26T12:00:00.000Z",
    "lastSeen": "2026-06-26T11:19:00.000Z",
    "vulnerabilityIds": [
      "VLN-010"
    ],
    "resilienceScore": 61
  },
  {
    "assetId": "AST-0080",
    "name": "CTL-HMI-01",
    "type": "HMI",
    "assetClass": "windows",
    "status": "online",
    "vendor": "Siemens",
    "model": "SIMATIC IPC477E",
    "criticality": "medium",
    "zone": "Central control room & IT/DMZ (CTL)",
    "purdueLevel": 2,
    "interfaces": [
      {
        "ip": "10.10.20.95",
        "mac": "00:1B:1B:DD:6C:61"
      }
    ],
    "operatingSystem": "Windows 10 Enterprise 1909",
    "protocols": [
      "OPC UA",
      "EtherNet/IP"
    ],
    "firstSeen": "2025-11-18T12:00:00.000Z",
    "lastSeen": "2026-06-26T11:14:00.000Z",
    "vulnerabilityIds": [
      "VLN-025",
      "VLN-009"
    ],
    "resilienceScore": 71,
    "disks": [
      {
        "mount": "C:",
        "label": "System",
        "totalGb": 512,
        "freeGb": 107,
        "type": "SSD"
      }
    ],
    "connections": [
      {
        "direction": "outbound",
        "peerAssetId": "AST-0042",
        "protocol": "DNP3",
        "port": 20000
      },
      {
        "direction": "outbound",
        "peerAssetId": "AST-0044",
        "protocol": "DNP3",
        "port": 20000
      }
    ]
  }
];
