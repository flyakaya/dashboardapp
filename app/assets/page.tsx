import type { Metadata } from "next";

import { AssetTable } from "./_components/asset-table";
import { getAssetRows } from "@/app/_data/assets";
import { getCheckOptions } from "@/app/_data/resilience";

export const metadata: Metadata = { title: "Asset inventory" };

export default async function AssetInventoryPage() {
  const [rows, checkOptions] = await Promise.all([
    getAssetRows(),
    getCheckOptions(),
  ]);
  return <AssetTable rows={rows} checkOptions={checkOptions} />;
}
