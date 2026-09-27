import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { cookies } from "next/headers";

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
  ThemeScript,
  TooltipProvider,
} from "@indurex/ui";

import { AppSidebar } from "@/app/_components/app-sidebar";
import { getAssetCount } from "@/app/_data/assets";
import { getSite } from "@/app/_data/site";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: { default: "Indurex", template: "%s · Indurex" },
  description: `OT/ICS security dashboard — ${getSite().name}`,
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  // SidebarProvider writes this cookie when the sidebar is toggled; reading it
  // here keeps a collapsed sidebar collapsed across reloads without a flash.
  const sidebarOpen = (await cookies()).get("sidebar_state")?.value !== "false";

  return (
    // Dark is the server-rendered default; ThemeScript swaps it before paint
    // if the user chose light, so React must accept the DOM's class.
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full`}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
      </head>
      <body className="flex min-h-full flex-col">
        <TooltipProvider>
          <SidebarProvider defaultOpen={sidebarOpen}>
            {/* Server-computed props: the client sidebar must not import the dataset. */}
            <AppSidebar
              siteName={getSite().name}
              assetCount={getAssetCount()}
            />
            <SidebarInset className="px-8 pt-6 pb-8">
              {/* Visible toggle (also ⌘B and the rail); opens the sheet on phones. */}
              <SidebarTrigger className="mb-4 -ml-2" />
              {children}
            </SidebarInset>
          </SidebarProvider>
        </TooltipProvider>
      </body>
    </html>
  );
}
