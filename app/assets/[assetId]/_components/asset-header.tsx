import type { ReactNode } from "react";

import type { AssetDetail } from "@/app/_data/asset-detail";
import { AssetTypeIcon } from "@/app/_components/asset-type-icon";
import { CriticalityMeter } from "@/app/_components/criticality-meter";
import { StatusIndicator } from "@/app/_components/status-indicator";

function Fact({
  label,
  note,
  children,
}: {
  label: string;
  note?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1">
      <dt className="text-xs font-medium text-muted-foreground">{label}</dt>
      <dd className="text-sm">{children}</dd>
      {note && <dd className="text-xs text-muted-foreground">{note}</dd>}
    </div>
  );
}

export function AssetHeader({ asset }: { asset: AssetDetail }) {
  return (
    <header className="flex flex-col gap-5">
      <div className="flex flex-col gap-1">
        {/* The heading is the name alone; the id sits beside it, not inside. */}
        <div className="flex items-baseline gap-2.5">
          <h1 className="font-mono text-2xl font-semibold">{asset.name}</h1>
          <span className="font-mono text-sm text-muted-foreground">
            {asset.assetId}
          </span>
        </div>
        <p className="flex flex-wrap items-center gap-x-1.5 text-sm text-muted-foreground">
          <AssetTypeIcon type={asset.type} className="size-4" />
          {asset.type} · {asset.vendor} {asset.model} · {asset.zoneName} ·{" "}
          {asset.level}
        </p>
      </div>

      <dl className="flex flex-wrap gap-x-12 gap-y-4">
        <Fact
          label="Status"
          note={
            asset.lastSeenLabel
              ? `Last seen ${asset.lastSeenLabel}`
              : "No report received from this asset"
          }
        >
          <StatusIndicator status={asset.status} />
        </Fact>
        <Fact label="Criticality">
          <CriticalityMeter level={asset.criticality} />
        </Fact>
        <Fact
          label="Resilience score"
          note={
            asset.resilience
              ? `Assessed ${asset.resilience.assessedLabel}`
              : "No resilience assessment yet"
          }
        >
          {asset.score === undefined ? (
            <span className="text-muted-foreground">Not scored</span>
          ) : (
            <span className="font-mono font-medium">{asset.score}</span>
          )}
        </Fact>
        <Fact label="Vulnerabilities">
          <span className="font-mono font-medium">
            {asset.vulnerabilities.length}
          </span>
          <span className="text-muted-foreground"> · </span>
          <span
            className={
              asset.kevCount > 0 ? "text-kev" : "text-muted-foreground"
            }
          >
            {asset.kevCount} KEV
          </span>
        </Fact>
      </dl>
    </header>
  );
}
