import type { Meta, StoryObj } from "@storybook/react-vite";
import { ArrowUpRight } from "lucide-react";

import { Badge } from "@indurex/ui/components/badge";
import { Button } from "@indurex/ui/components/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@indurex/ui/components/card";

const meta = {
  title: "Components/Card",
  component: Card,
  args: { size: "default" },
  argTypes: { size: { control: "inline-radio", options: ["default", "sm"] } },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Card {...args} className="w-96">
      <CardHeader>
        <CardTitle>Port Meridian refinery</CardTitle>
        <CardDescription>
          Coastal crude-oil refinery — 240 kb/d, 8 process areas
        </CardDescription>
        <CardAction>
          <Button variant="ghost" size="icon-sm" aria-label="Open site">
            <ArrowUpRight />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <CardDescription>
          80 assets across Purdue levels 0–3. Last full scan finished 11:43.
        </CardDescription>
      </CardContent>
    </Card>
  ),
};

export const WithFooter: Story = {
  render: (args) => (
    <Card {...args} className="w-96">
      <CardHeader>
        <CardDescription>Known exploited vulnerabilities</CardDescription>
        <CardTitle className="text-3xl tabular-nums">14</CardTitle>
        <CardAction>
          <Badge variant="secondary">of 25</Badge>
        </CardAction>
      </CardHeader>
      <CardFooter className="justify-between">
        <CardDescription>Updated 4 min ago</CardDescription>
        <Button size="sm" variant="outline">
          Review
        </Button>
      </CardFooter>
    </Card>
  ),
};

export const KpiRow: Story = {
  args: { size: "sm" },
  render: (args) => (
    <div className="grid grid-cols-3 gap-3">
      {[
        ["Assets", "80", "8 zones"],
        ["Vulnerabilities", "25", "14 KEV"],
        ["Avg. resilience", "67", "32 not assessed"],
      ].map(([label, value, detail]) => (
        <Card key={label} {...args} className="w-44">
          <CardHeader>
            <CardDescription>{label}</CardDescription>
            <CardTitle className="text-2xl tabular-nums">{value}</CardTitle>
          </CardHeader>
          <CardContent>
            <Badge variant="outline">{detail}</Badge>
          </CardContent>
        </Card>
      ))}
    </div>
  ),
};
