import Link from "next/link";
import { ChevronRight, ListChecks } from "lucide-react";

import type { ControlSummary } from "@/app/_data/resilience";
import { InfoTip } from "@/app/_components/info-tip";
import { SeverityLabel } from "@/app/_components/severity-label";
import { inventoryHref } from "@/app/_lib/routes";

// Phones: each row stacks (name, then a line of labelled values). From `sm`
// up: a column grid. One markup; the label spans double as sr-only labels.
const GRID =
  "sm:grid sm:grid-cols-[minmax(0,1fr)_6rem_5rem_6rem_1rem] sm:gap-x-3";
const VALUE_LABEL = "font-sans text-xs text-muted-foreground sm:sr-only";

/** The 18 CIS controls, lowest average first; each expands to its failing checks. */
export function ControlList({ controls }: { controls: ControlSummary[] }) {
  return (
    <section aria-labelledby="controls" className="flex flex-col gap-3">
      <div className="flex flex-col gap-0.5">
        <h2
          id="controls"
          className="flex items-center gap-2 text-base font-semibold"
        >
          <ListChecks aria-hidden className="size-4 text-muted-foreground" />
          Security controls
        </h2>
        <p className="text-sm text-muted-foreground">
          CIS Controls v8 · lowest average score first · expand a control to see
          its failing checks
        </p>
      </div>

      <div className="overflow-x-auto">
        <div className="text-sm sm:min-w-[36rem]">
          {/* Legend on phones, column header from `sm`. Header text is visual
              only (cells carry their own labels); the ⓘ stay reachable. */}
          <div
            className={`${GRID} flex flex-wrap items-center gap-x-4 gap-y-1 border-b px-3 pb-2 text-xs font-medium text-muted-foreground sm:h-8 sm:pb-0`}
          >
            <span aria-hidden className="hidden sm:block">
              Control
            </span>
            <span className="inline-flex items-center gap-1 sm:justify-end">
              <span aria-hidden>Avg score</span>
              <InfoTip term="controlScore" label="Avg score" />
            </span>
            <span aria-hidden className="sm:text-right">
              Assets
            </span>
            <span className="inline-flex items-center gap-1 sm:justify-end">
              <span aria-hidden>Failed high</span>
              <InfoTip term="failedHigh" label="Failed high" />
            </span>
          </div>
          <ul>
            {controls.map((control) => (
              <li key={control.controlId} className="border-b">
                <details className="group">
                  <summary
                    className={`${GRID} grid cursor-pointer list-none grid-cols-[minmax(0,1fr)_auto] items-center gap-x-3 gap-y-1 px-3 py-2.5 hover:bg-muted/50 sm:h-10 sm:py-0 [&::-webkit-details-marker]:hidden`}
                  >
                    <span className="order-1 flex gap-3 sm:order-none">
                      <span className="w-14 shrink-0 font-mono text-muted-foreground">
                        {control.controlId}
                      </span>
                      <span className="sm:truncate">{control.name}</span>
                    </span>
                    {/* Phones: one line of values under the name; from `sm`
                        the wrapper disappears and each value is a column. */}
                    <span className="order-3 col-span-2 flex flex-wrap gap-x-4 pl-[4.25rem] sm:contents">
                      <span className="font-mono font-medium sm:text-right">
                        <span className={VALUE_LABEL}>Avg score </span>
                        {Math.round(control.averageScore)}
                      </span>
                      <span className="font-mono text-muted-foreground sm:text-right">
                        <span className={VALUE_LABEL}>Assets </span>
                        {control.evaluatedCount}
                      </span>
                      <span
                        className={`font-mono sm:text-right ${control.failedHighCount ? "" : "text-muted-foreground"}`}
                      >
                        <span className={VALUE_LABEL}>Failed high </span>
                        {control.failedHighCount}
                      </span>
                    </span>
                    <ChevronRight
                      aria-hidden
                      className="order-2 size-4 text-muted-foreground transition-transform group-open:rotate-90 sm:order-none"
                    />
                  </summary>
                  {control.failingChecks.length === 0 ? (
                    <p className="px-3 pb-3 text-muted-foreground sm:pl-[5.25rem]">
                      No failing checks.
                    </p>
                  ) : (
                    <ul
                      aria-label={`Failing checks in ${control.controlId}`}
                      className="flex flex-col gap-2 px-3 pb-3 sm:gap-1.5 sm:pl-[5.25rem]"
                    >
                      {control.failingChecks.map((check) => (
                        <li
                          key={check.id}
                          className="flex flex-wrap items-center gap-x-3 gap-y-0.5"
                        >
                          <span className="w-9 shrink-0 font-mono text-xs text-muted-foreground">
                            {check.id}
                          </span>
                          <span className="min-w-0 flex-1 sm:flex-none">
                            {check.title}
                          </span>
                          <SeverityLabel
                            severity={check.severity}
                            className="text-xs text-muted-foreground"
                          />
                          <Link
                            href={inventoryHref({ check: check.id })}
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
