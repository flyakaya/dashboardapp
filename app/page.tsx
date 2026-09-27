import type { Metadata } from "next";

import { getSiteResilience } from "@/app/_data/resilience";
import { getSite } from "@/app/_data/site";

// The "/" route's private components.
import { ControlList } from "./_dashboard/control-list";
import { SiteScore } from "./_dashboard/site-score";

// The root layout's title template only applies to child segments, not "/".
export const metadata: Metadata = {
  title: { absolute: "Resilience index · Indurex" },
};

// Server Component: read-only, no client state, no client JS.
export default async function ResilienceIndexPage() {
  const [site, { name: siteName }] = await Promise.all([
    getSiteResilience(),
    getSite(),
  ]);

  return (
    <div className="flex flex-col gap-8">
      <header className="flex flex-col gap-0.5">
        <h1 className="text-xl font-semibold">Resilience index</h1>
        <p className="text-sm text-muted-foreground">
          {siteName} · CIS Controls v8
        </p>
      </header>
      <SiteScore site={site} />
      <ControlList controls={site.controls} />
    </div>
  );
}
