import type { Meta, StoryObj } from "@storybook/react-vite";
import { Network, ShieldAlert, SlidersHorizontal } from "lucide-react";

import { Badge } from "@indurex/ui/components/badge";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@indurex/ui/components/tabs";

type Args = {
  variant: "default" | "line";
  orientation: "horizontal" | "vertical";
};

function AssetTabs({ variant, orientation }: Args) {
  return (
    <Tabs
      defaultValue="overview"
      orientation={orientation}
      className="w-[28rem]"
    >
      <TabsList variant={variant}>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="vulns">
          <ShieldAlert />
          Vulnerabilities
          <Badge variant="secondary" className="tabular-nums">
            3
          </Badge>
        </TabsTrigger>
        <TabsTrigger value="controls">
          <SlidersHorizontal />
          Controls
        </TabsTrigger>
        <TabsTrigger value="network" disabled>
          <Network />
          Network
        </TabsTrigger>
      </TabsList>
      <TabsContent
        value="overview"
        className="text-body-sm text-muted-foreground"
      >
        CDU-PLC-01 · Rockwell ControlLogix 1756-L85E · firmware 3.1.7
      </TabsContent>
      <TabsContent value="vulns" className="text-body-sm text-muted-foreground">
        VLN-002, VLN-014, VLN-015
      </TabsContent>
      <TabsContent
        value="controls"
        className="text-body-sm text-muted-foreground"
      >
        6 of 9 controls passed.
      </TabsContent>
    </Tabs>
  );
}

const meta = {
  title: "Components/Tabs",
  component: AssetTabs,
  args: { variant: "default", orientation: "horizontal" },
  argTypes: {
    variant: { control: "inline-radio", options: ["default", "line"] },
    orientation: {
      control: "inline-radio",
      options: ["horizontal", "vertical"],
    },
  },
} satisfies Meta<typeof AssetTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Line: Story = { args: { variant: "line" } };

export const Vertical: Story = { args: { orientation: "vertical" } };
