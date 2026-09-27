import { cn } from "@indurex/ui";

import type { ControlSeverity, Severity } from "@/app/assignment/types";

// App component (move to @indurex/ui later as an OT severity primitive).

const DOT: Record<Severity, string> = {
  critical: "bg-severity-critical",
  high: "bg-severity-high",
  medium: "bg-severity-medium",
  low: "bg-severity-low",
};

/** Coloured dot + word; the word carries the meaning, the colour only helps scan. */
export function SeverityLabel({
  severity,
  className,
}: {
  severity: Severity | ControlSeverity;
  className?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-1.5", className)}>
      <span
        aria-hidden
        className={cn("size-1.5 shrink-0 rounded-full", DOT[severity])}
      />
      {severity[0].toUpperCase() + severity.slice(1)}
    </span>
  );
}
