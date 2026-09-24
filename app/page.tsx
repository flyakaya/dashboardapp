import { ThemeToggle } from "@indurex/ui";

import { PocPanel } from "./poc-panel";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <header className="flex items-center justify-between border-b px-6 py-3">
        <span className="text-sm font-medium">Indurex · Port Meridian</span>
        <ThemeToggle />
      </header>
      <main className="flex flex-1 items-center justify-center p-6">
        <PocPanel />
      </main>
    </div>
  );
}
