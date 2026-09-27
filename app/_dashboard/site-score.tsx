import type { SiteResilience } from "@/app/_data/resilience";
import { InfoTip } from "@/app/_components/info-tip";

/** The one number the page is driven by, with how much of the site it covers. */
export function SiteScore({ site }: { site: SiteResilience }) {
  return (
    <section aria-labelledby="site-score" className="flex flex-col gap-1">
      <div className="flex items-center gap-1.5">
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
      <p className="text-sm text-muted-foreground">
        {site.scoredCount} of {site.assetCount} assets scored ·{" "}
        {site.assetCount - site.scoredCount} have no resilience assessment yet
      </p>
    </section>
  );
}
