import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@indurex/ui";

import { inventoryHref } from "@/app/_lib/routes";

export const metadata: Metadata = { title: "Page not found" };

// Renders inside the root layout's SidebarInset, which is already <main>.
export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-semibold">Page not found</h1>
        <p className="text-sm text-muted-foreground">
          There is no asset or page at this address.
        </p>
      </div>
      <Button variant="outline" asChild>
        <Link href={inventoryHref()}>Back to inventory</Link>
      </Button>
    </div>
  );
}
