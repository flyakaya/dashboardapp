import { CircleDashed, ShieldCheck } from "lucide-react";

import type { AssetDetail } from "@/app/_data/asset-detail";
import { InfoTip } from "@/app/_components/info-tip";
import { SeverityLabel } from "@/app/_components/severity-label";

// Phones: each row stacks (name, then a line of labelled values). From `sm`
// up: a column grid. The label spans double as sr-only labels.
const GRID =
  "sm:grid sm:grid-cols-[minmax(0,1fr)_4rem_4rem_4rem_4rem] sm:gap-x-3";
const VALUE_LABEL = "font-sans text-xs text-muted-foreground sm:sr-only";

/** Security-control results for one asset: lowest score first, failed checks listed. */
export function ControlResults({
  resilience,
}: {
  resilience: AssetDetail["resilience"];
}) {
  return (
    <section aria-labelledby="controls" className="flex flex-col gap-3">
      <div className="flex flex-col gap-0.5">
        <h2
          id="controls"
          className="flex flex-wrap items-center gap-x-2 gap-y-0.5"
        >
          <ShieldCheck aria-hidden className="size-4 text-muted-foreground" />
          <span className="text-base font-semibold whitespace-nowrap">
            Security controls
          </span>
          <span className="text-sm text-muted-foreground">
            {resilience
              ? `${resilience.controls.length} evaluated · ${resilience.failedCheckCount} failed checks`
              : "Not scored"}
          </span>
        </h2>
        {resilience ? (
          <p className="text-sm text-muted-foreground">
            CIS Controls v8 · lowest score first · failed checks listed under
            each control
          </p>
        ) : (
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <CircleDashed aria-hidden className="size-4" />
            No resilience assessment yet: this asset has no control results in
            the data.
          </p>
        )}
      </div>

      {resilience && (
        <div className="overflow-x-auto">
          <div className="text-sm sm:min-w-[36rem]">
            {/* Legend on phones (just the ⓘ term), column header from `sm`.
                Header text is visual only; the ⓘ stay reachable. */}
            <div
              className={`${GRID} flex items-center border-b px-3 pb-2 text-xs font-medium text-muted-foreground sm:h-8 sm:pb-0`}
            >
              <span aria-hidden className="hidden sm:block">
                Control
              </span>
              <span aria-hidden className="hidden text-right sm:block">
                Score
              </span>
              <span aria-hidden className="hidden text-right sm:block">
                Passed
              </span>
              <span aria-hidden className="hidden text-right sm:block">
                Failed
              </span>
              <span className="inline-flex items-center gap-1 sm:justify-end">
                <span aria-hidden>N/A</span>
                <InfoTip term="notApplicable" label="N/A" />
              </span>
            </div>
            <ul>
              {resilience.controls.map((control) => (
                <li key={control.controlId} className="border-b py-2">
                  <div
                    className={`${GRID} flex flex-wrap items-center gap-x-4 gap-y-1 px-3`}
                  >
                    <span className="flex w-full gap-3 sm:w-auto">
                      <span className="w-14 shrink-0 font-mono text-muted-foreground">
                        {control.controlId}
                      </span>
                      <span>{control.name}</span>
                    </span>
                    {/* Phones: the values line starts under the name. */}
                    <span className="ml-[4.25rem] font-mono font-medium sm:ml-0 sm:text-right">
                      <span className={VALUE_LABEL}>Score </span>
                      {control.score}
                    </span>
                    <span className="font-mono text-muted-foreground sm:text-right">
                      <span className={VALUE_LABEL}>Passed </span>
                      {control.passed}
                    </span>
                    <span
                      className={`font-mono sm:text-right ${control.failed ? "" : "text-muted-foreground"}`}
                    >
                      <span className={VALUE_LABEL}>Failed </span>
                      {control.failed}
                    </span>
                    <span className="font-mono text-muted-foreground sm:text-right">
                      <span className={VALUE_LABEL}>N/A </span>
                      {control.notApplicable}
                    </span>
                  </div>
                  {control.failedChecks.length > 0 && (
                    <ul
                      aria-label={`Failed checks in ${control.controlId}`}
                      className="mt-1.5 flex flex-col gap-1.5 px-3 sm:gap-1 sm:pl-[5.25rem]"
                    >
                      {control.failedChecks.map((check) => (
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
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            {resilience.notEvaluated.length > 0 && (
              <p className="px-3 pt-3 text-sm text-muted-foreground">
                Not evaluated for this asset:{" "}
                {resilience.notEvaluated.join(", ")}
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
