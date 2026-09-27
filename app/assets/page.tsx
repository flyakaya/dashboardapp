import type { Metadata } from "next";

import { AssetTable } from "./_components/asset-table";
import { getAssetRows } from "@/app/_data/assets";
import { getCheckOptions } from "@/app/_data/resilience";

export const metadata: Metadata = { title: "Asset inventory" };

export default function AssetInventoryPage() {
  return <AssetTable rows={getAssetRows()} checkOptions={getCheckOptions()} />;
}
