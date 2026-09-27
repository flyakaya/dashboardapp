import { cn } from "@indurex/ui";

import type { Criticality } from "@/app/assignment/types";

// App component (move to @indurex/ui later as an OT criticality primitive).

export const CRITICALITY_LEVELS = ["low", "medium", "high"] as const;

export function criticalityLabel(level?: Criticality) {
  return level ? level[0].toUpperCase() + level.slice(1) : "Not rated";
}

/** Three segments, filled up to the level; neutral colour, the label carries meaning. */
export function CriticalityMeter({ level }: { level?: Criticality }) {
  const filled = level ? CRITICALITY_LEVELS.indexOf(level) + 1 : 0;
  return (
    <span className="inline-flex items-center gap-2">
      <span aria-hidden className="flex gap-0.5">
        {CRITICALITY_LEVELS.map((segment, i) => (
          <span
            key={segment}
            className={cn(
              "h-3 w-1 rounded-[1px]",
              i < filled ? "bg-foreground" : "bg-muted-foreground/30",
            )}
          />
        ))}
      </span>
      <span className={cn(!level && "text-muted-foreground")}>
        {criticalityLabel(level)}
      </span>
    </span>
  );
}
