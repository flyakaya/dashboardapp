import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { ThemeScript, TooltipProvider } from "@indurex/ui";

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
  title: "Indurex",
  description: "OT/ICS security dashboard — Port Meridian refinery",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
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
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
