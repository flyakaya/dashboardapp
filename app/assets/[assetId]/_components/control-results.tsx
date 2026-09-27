import type { AssetDetail } from "@/app/_data/asset-detail";
import { SeverityLabel } from "@/app/_components/severity-label";

const COLUMNS =
  "grid grid-cols-[minmax(0,1fr)_4rem_4rem_4rem_4rem] items-center gap-x-3 px-3";

/** Security-control results for one asset: lowest score first, failed checks listed. */
export function ControlResults({
  resilience,
}: {
  resilience: AssetDetail["resilience"];
}) {
  return (
    <section aria-labelledby="controls" className="flex flex-col gap-3">
      <div className="flex flex-col gap-0.5">
        <h2 id="controls" className="flex items-baseline gap-2">
          <span className="text-base font-semibold">Security controls</span>
          <span className="text-sm text-muted-foreground">
            {resilience
              ? `${resilience.controls.length} evaluated · ${resilience.failedCheckCount} failed checks`
              : "Not scored"}
          </span>
        </h2>
        <p className="text-sm text-muted-foreground">
          {resilience
            ? "CIS Controls v8 · lowest score first · failed checks listed under each control"
            : "No resilience assessment yet: this asset has no control results in the data."}
        </p>
      </div>

      {resilience && (
        <div className="overflow-x-auto">
          <div className="min-w-[36rem] text-sm">
            <div
              aria-hidden
              className={`${COLUMNS} h-8 border-b text-xs font-medium text-muted-foreground`}
            >
              <span>Control</span>
              <span className="text-right">Score</span>
              <span className="text-right">Passed</span>
              <span className="text-right">Failed</span>
              <span className="text-right">N/A</span>
            </div>
            <ul>
              {resilience.controls.map((control) => (
                <li key={control.controlId} className="border-b py-2">
                  <div className={COLUMNS}>
                    <span className="flex gap-3">
                      <span className="w-14 shrink-0 font-mono text-muted-foreground">
                        {control.controlId}
                      </span>
                      <span>{control.name}</span>
                    </span>
                    <span className="text-right font-mono font-medium">
                      {control.score}
                    </span>
                    <span className="text-right font-mono text-muted-foreground">
                      {control.passed}
                    </span>
                    <span
                      className={`text-right font-mono ${control.failed ? "" : "text-muted-foreground"}`}
                    >
                      {control.failed}
                    </span>
                    <span className="text-right font-mono text-muted-foreground">
                      {control.notApplicable}
                    </span>
                  </div>
                  {control.failedChecks.length > 0 && (
                    <ul
                      aria-label={`Failed checks in ${control.controlId}`}
                      className="mt-1 flex flex-col gap-1 pl-[5.25rem]"
                    >
                      {control.failedChecks.map((check) => (
                        <li key={check.id} className="flex items-center gap-3">
                          <span className="w-9 shrink-0 font-mono text-xs text-muted-foreground">
                            {check.id}
                          </span>
                          <span>{check.title}</span>
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
