"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { assetHref } from "@/app/_lib/routes";

/** Name cell link; carries the current inventory view so Back restores it. */
export function AssetNameLink({
  assetId,
  name,
}: {
  assetId: string;
  name: string;
}) {
  const searchParams = useSearchParams();
  return (
    <Link
      href={assetHref(assetId, searchParams.toString())}
      className="font-mono font-medium hover:underline"
    >
      {name}
    </Link>
  );
}
