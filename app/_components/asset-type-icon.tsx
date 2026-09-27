import {
  ArrowLeftRight,
  BrickWall,
  Cctv,
  Cpu,
  Database,
  Fan,
  FlaskConical,
  Gauge,
  KeyRound,
  Laptop,
  MonitorCog,
  Network,
  PackageCheck,
  RadioTower,
  Router,
  Server,
  ShieldHalf,
  SquareTerminal,
  Waves,
  Wifi,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@indurex/ui";

import type { AssetType } from "@/app/assignment/types";

// App component (move to @indurex/ui later). One glyph per asset type, so a
// long list scans by kind: controllers, HMIs, network gear, field devices.

const ICON: Record<AssetType, LucideIcon> = {
  PLC: Cpu,
  RTU: RadioTower,
  "Safety controller": ShieldHalf,
  HMI: MonitorCog,
  "SCADA server": Server,
  "Engineering workstation": Laptop,
  Historian: Database,
  "Domain controller": KeyRound,
  "Jump host": SquareTerminal,
  "Patch server": PackageCheck,
  "Network switch": Network,
  Firewall: BrickWall,
  Router: Router,
  "Wireless AP": Wifi,
  "Protocol gateway": ArrowLeftRight,
  "Flow transmitter": Waves,
  "Pressure transmitter": Gauge,
  "Gas analyzer": FlaskConical,
  "Variable frequency drive": Fan,
  "IP camera": Cctv,
};

/** The icon for a type (e.g. for filter options), or undefined if unknown. */
export function getAssetTypeIcon(type: string): LucideIcon | undefined {
  return ICON[type as AssetType];
}

/** Decorative: the type name is always shown next to it. */
export function AssetTypeIcon({
  type,
  className,
}: {
  type: AssetType;
  className?: string;
}) {
  const Icon = ICON[type];
  return (
    <Icon
      aria-hidden
      className={cn("size-3.5 shrink-0 text-muted-foreground", className)}
    />
  );
}
