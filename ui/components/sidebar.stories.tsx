import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Factory,
  LayoutDashboard,
  Server,
  ShieldAlert,
  SlidersHorizontal,
} from "lucide-react";

import { Card, CardHeader, CardTitle } from "@indurex/ui/components/card";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@indurex/ui/components/sidebar";

const NAV = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "Inventory", icon: Server, badge: "80" },
  { label: "Vulnerabilities", icon: ShieldAlert, badge: "25" },
  { label: "Security controls", icon: SlidersHorizontal },
];

type Args = {
  collapsible: "offcanvas" | "icon" | "none";
  defaultOpen: boolean;
};

function AppShell({ collapsible, defaultOpen }: Args) {
  return (
    <SidebarProvider defaultOpen={defaultOpen} className="min-h-[32rem]">
      <Sidebar collapsible={collapsible}>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg">
                <Factory />
                <span>Port Meridian · 8 zones</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Monitor</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {NAV.map(({ label, icon: Icon, active, badge }) => (
                  <SidebarMenuItem key={label}>
                    <SidebarMenuButton isActive={active} tooltip={label}>
                      <Icon />
                      <span>{label}</span>
                    </SidebarMenuButton>
                    {badge && <SidebarMenuBadge>{badge}</SidebarMenuBadge>}
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="text-xs text-muted-foreground group-data-[collapsible=icon]:hidden">
          Data as of 26 Jun 2026, 11:43
        </SidebarFooter>
      </Sidebar>
      <SidebarInset className="p-4">
        <Card size="sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <SidebarTrigger />
              Dashboard
            </CardTitle>
          </CardHeader>
        </Card>
      </SidebarInset>
    </SidebarProvider>
  );
}

const meta = {
  title: "Components/Sidebar",
  component: AppShell,
  args: { collapsible: "icon", defaultOpen: true },
  argTypes: {
    collapsible: {
      control: "inline-radio",
      options: ["offcanvas", "icon", "none"],
    },
  },
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof AppShell>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Expanded: Story = {};

export const CollapsedToIcons: Story = { args: { defaultOpen: false } };
