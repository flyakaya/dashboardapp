import { cn } from "@indurex/ui";

import type { AssetRowStatus } from "@/app/_lib/asset-row";

// App component (move to @indurex/ui later as an OT status primitive).

const STATUS: Record<AssetRowStatus, { label: string; dot: string }> = {
  online: { label: "Online", dot: "bg-success" },
  offline: { label: "Offline", dot: "bg-destructive" },
  maintenance: { label: "Maintenance", dot: "bg-maintenance" },
  // Hollow dot: no data yet, rather than a state.
  "never-reported": {
    label: "Never reported",
    dot: "border border-dashed border-muted-foreground",
  },
};

export function statusLabel(status: AssetRowStatus) {
  return STATUS[status].label;
}

export function StatusIndicator({ status }: { status: AssetRowStatus }) {
  const { label, dot } = STATUS[status];
  return (
    <span className="inline-flex items-center gap-2">
      <span aria-hidden className={cn("size-2 shrink-0 rounded-full", dot)} />
      <span
        className={cn(status === "never-reported" && "text-muted-foreground")}
      >
        {label}
      </span>
    </span>
  );
}
