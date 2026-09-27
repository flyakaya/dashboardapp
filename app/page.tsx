import type { Metadata } from "next";

import { getSiteResilience } from "@/app/_data/resilience";
import { getSite } from "@/app/_data/site";

import { ControlList } from "./_resilience/control-list";
import { SiteScore } from "./_resilience/site-score";

// The root layout's title template only applies to child segments, not "/".
export const metadata: Metadata = {
  title: { absolute: "Resilience index · Indurex" },
};

// Server Component: read-only, no client state, no client JS.
export default function ResilienceIndexPage() {
  const site = getSiteResilience();

  return (
    <div className="flex flex-col gap-8">
      <header className="flex flex-col gap-0.5">
        <h1 className="text-xl font-semibold">Resilience index</h1>
        <p className="text-sm text-muted-foreground">
          {getSite().name} · CIS Controls v8
        </p>
      </header>
      <SiteScore site={site} />
      <ControlList controls={site.controls} />
    </div>
  );
}
