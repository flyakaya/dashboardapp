import Link from "next/link";
import { ChevronRight } from "lucide-react";

import type { ControlSummary } from "@/app/_data/resilience";
import { SeverityLabel } from "@/app/_components/severity-label";

const COLUMNS =
  "grid grid-cols-[minmax(0,1fr)_6rem_5rem_6rem_1rem] items-center gap-x-3 px-3";

/** The 18 CIS controls, lowest average first; each expands to its failing checks. */
export function ControlList({ controls }: { controls: ControlSummary[] }) {
  return (
    <section aria-labelledby="controls" className="flex flex-col gap-3">
      <div className="flex flex-col gap-0.5">
        <h2 id="controls" className="text-base font-semibold">
          Security controls
        </h2>
        <p className="text-sm text-muted-foreground">
          CIS Controls v8 · lowest average score first · expand a control to see
          its failing checks
        </p>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[36rem] text-sm">
          <div
            aria-hidden
            className={`${COLUMNS} h-8 border-b text-xs font-medium text-muted-foreground`}
          >
            <span>Control</span>
            <span className="text-right">Avg score</span>
            <span className="text-right">Assets</span>
            <span className="text-right">Failed high</span>
          </div>
          <ul>
            {controls.map((control) => (
              <li key={control.controlId} className="border-b">
                <details className="group">
                  <summary
                    className={`${COLUMNS} h-10 cursor-pointer list-none hover:bg-muted/50 [&::-webkit-details-marker]:hidden`}
                  >
                    <span className="flex gap-3">
                      <span className="w-14 shrink-0 font-mono text-muted-foreground">
                        {control.controlId}
                      </span>
                      <span className="truncate">{control.name}</span>
                    </span>
                    {/* sr-only labels: the header row is visual only. */}
                    <span className="text-right font-mono font-medium">
                      <span className="sr-only">Average score </span>
                      {Math.round(control.averageScore)}
                    </span>
                    <span className="text-right font-mono text-muted-foreground">
                      <span className="sr-only">Assets evaluated </span>
                      {control.evaluatedCount}
                    </span>
                    <span
                      className={`text-right font-mono ${control.failedHighCount ? "" : "text-muted-foreground"}`}
                    >
                      <span className="sr-only">
                        Failed high-severity checks{" "}
                      </span>
                      {control.failedHighCount}
                    </span>
                    <ChevronRight
                      aria-hidden
                      className="size-4 text-muted-foreground transition-transform group-open:rotate-90"
                    />
                  </summary>
                  {control.failingChecks.length === 0 ? (
                    <p className="pb-3 pl-[5.25rem] text-muted-foreground">
                      No failing checks.
                    </p>
                  ) : (
                    <ul
                      aria-label={`Failing checks in ${control.controlId}`}
                      className="flex flex-col gap-1.5 pr-3 pb-3 pl-[5.25rem]"
                    >
                      {control.failingChecks.map((check) => (
                        <li key={check.id} className="flex items-center gap-3">
                          <span className="w-9 shrink-0 font-mono text-xs text-muted-foreground">
                            {check.id}
                          </span>
                          <span>{check.title}</span>
                          <SeverityLabel
                            severity={check.severity}
                            className="text-xs text-muted-foreground"
                          />
                          <Link
                            href={`/assets?check=${encodeURIComponent(check.id)}`}
                            className="ml-auto shrink-0 font-mono text-xs hover:underline"
                          >
                            {check.assetCount}{" "}
                            {check.assetCount === 1 ? "asset" : "assets"}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </details>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
