"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Factory, Gauge, Server, type LucideIcon } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  ThemeToggle,
} from "@indurex/ui";

type NavItem = {
  href: string;
  label: string;
  icon: LucideIcon;
  badge?: number;
};

type AppSidebarProps = {
  siteName: string;
  assetCount: number;
};

/** "/" matches only itself; other items stay active on their child routes. */
function isActive(pathname: string, href: string) {
  return href === "/"
    ? pathname === "/"
    : pathname === href || pathname.startsWith(`${href}/`);
}

// App composition of library sidebar parts — not a library component.
// Vulnerabilities and Security controls are out of scope for the brief.
export function AppSidebar({ siteName, assetCount }: AppSidebarProps) {
  const pathname = usePathname();
  const nav: NavItem[] = [
    { href: "/", label: "Resilience index", icon: Gauge },
    { href: "/assets", label: "Inventory", icon: Server, badge: assetCount },
  ];

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild tooltip={siteName}>
              <Link href="/">
                {/* Fills the collapsed rail, so the name clips cleanly. */}
                <span className="flex size-8 shrink-0 items-center justify-center rounded-md border bg-sidebar-accent">
                  <Factory className="size-4" />
                </span>
                <span className="truncate font-medium">{siteName}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Monitor</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {nav.map(({ href, label, icon: Icon, badge }) => {
                const active = isActive(pathname, href);
                return (
                  <SidebarMenuItem key={href}>
                    <SidebarMenuButton
                      asChild
                      isActive={active}
                      tooltip={label}
                    >
                      <Link
                        href={href}
                        aria-current={active ? "page" : undefined}
                      >
                        <Icon />
                        <span>{label}</span>
                      </Link>
                    </SidebarMenuButton>
                    {badge !== undefined && (
                      <SidebarMenuBadge>{badge}</SidebarMenuBadge>
                    )}
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <ThemeToggle className="self-start" />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
