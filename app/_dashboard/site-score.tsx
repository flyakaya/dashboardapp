import { Progress } from "@indurex/ui";

import type { SiteResilience } from "@/app/_data/resilience";
import { InfoTip } from "@/app/_components/info-tip";

/** The one number the page is driven by, with how much of the site it covers. */
export function SiteScore({ site }: { site: SiteResilience }) {
  return (
    <section aria-labelledby="site-score" className="flex flex-col gap-1">
      {/* items-start: the ⓘ stays on the label's first line when it wraps. */}
      <div className="flex items-start gap-1.5">
        <h2 id="site-score" className="text-sm text-muted-foreground">
          Average resilience score · across {site.scoredCount} scored assets
        </h2>
        <InfoTip term="siteScore" label="the average resilience score" />
      </div>
      {site.averageScore === undefined ? (
        <p className="text-2xl text-muted-foreground">Not scored</p>
      ) : (
        <p className="font-mono text-6xl font-semibold tracking-tight">
          {Math.round(site.averageScore)}
        </p>
      )}
      <div className="flex max-w-md flex-col gap-2">
        <p id="coverage" className="text-sm text-muted-foreground">
          {site.scoredCount} of {site.assetCount} assets scored ·{" "}
          {site.assetCount - site.scoredCount} have no resilience assessment yet
        </p>
        {/* Coverage, not quality: how much of the site the score speaks for. */}
        <Progress
          value={(site.scoredCount / site.assetCount) * 100}
          aria-labelledby="coverage"
          className="h-1.5"
        />
      </div>
    </section>
  );
}
