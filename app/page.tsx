import type { Metadata } from "next";

import { TodoPage } from "@/app/_components/todo-page";
import { getSite } from "@/app/_data/site";

// The root layout's title template only applies to child segments, not "/".
export const metadata: Metadata = {
  title: { absolute: "Resilience index · Indurex" },
};

export default function ResilienceIndexPage() {
  return (
    <TodoPage
      title="Resilience index"
      subtitle={`${getSite().name} · CIS Controls v8`}
      figmaNode="4039-38"
      todo={[
        "Average resilience score of the scored assets, with coverage (48 of 80 assets scored)",
        "Security controls list: 18 CIS controls, lowest average first, with assets evaluated and failed high-severity checks",
        "Expand a control to see its failing checks; a check links to the inventory filtered to the failing assets",
      ]}
    />
  );
}
