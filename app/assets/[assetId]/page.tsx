import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";

import { TodoPage } from "@/app/_components/todo-page";
import { getAsset } from "@/app/_data/assets";

export async function generateMetadata({
  params,
}: PageProps<"/assets/[assetId]">): Promise<Metadata> {
  const asset = getAsset((await params).assetId);
  return { title: asset?.name ?? "Asset not found" };
}

export default async function AssetDetailPage({
  params,
}: PageProps<"/assets/[assetId]">) {
  const asset = getAsset((await params).assetId);
  if (!asset) notFound();

  return (
    <TodoPage
      title={asset.name}
      subtitle={`${asset.assetId} · ${asset.type} · ${asset.vendor} ${asset.model}`}
      figmaNode="4083-3562"
      todo={[
        "Header facts: status and last seen, criticality, resilience score with assessed date, vulnerabilities and KEV",
        "Vulnerabilities: expandable rows with summary, recommendation and a link to the inventory CVE search",
        "Security controls: lowest score first, failed checks listed under each control",
      ]}
      breadcrumb={
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <li>
              <Link href="/assets" className="hover:text-foreground">
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
      }
    />
  );
}
