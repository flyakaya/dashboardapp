import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ChevronRight } from "lucide-react";

import { Button } from "@indurex/ui";

import { getAssetDetail } from "@/app/_data/asset-detail";
import { inventoryHref } from "@/app/_lib/routes";

import { AssetHeader } from "./_components/asset-header";
import { ControlResults } from "./_components/control-results";
import { VulnerabilityList } from "./_components/vulnerability-list";

export async function generateMetadata({
  params,
}: PageProps<"/assets/[assetId]">): Promise<Metadata> {
  const asset = getAssetDetail((await params).assetId);
  return { title: asset?.name ?? "Asset not found" };
}

// Server Component: read-only evidence, no client state, no client JS.
export default async function AssetDetailPage({
  params,
  searchParams,
}: PageProps<"/assets/[assetId]">) {
  const asset = getAssetDetail((await params).assetId);
  if (!asset) notFound();
  // The inventory view this page was opened from (search, filters, page).
  const backHref = inventoryHref((await searchParams).from);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col items-start gap-3">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <li>
              <Link href={backHref} className="hover:text-foreground">
                Inventory
              </Link>
            </li>
            <li aria-hidden>
              <ChevronRight className="size-3.5" />
            </li>
            <li className="text-foreground" aria-current="page">
              {asset.name}
            </li>
          </ol>
        </nav>
        <Button variant="outline" size="sm" asChild>
          <Link href={backHref}>
            <ArrowLeft aria-hidden />
            Back to inventory
          </Link>
        </Button>
      </div>
      <AssetHeader asset={asset} />
      <VulnerabilityList vulnerabilities={asset.vulnerabilities} />
      <ControlResults resilience={asset.resilience} />
    </div>
  );
}
