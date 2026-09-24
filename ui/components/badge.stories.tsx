import type { Meta, StoryObj } from "@storybook/react-vite";
import { Check } from "lucide-react";

import { Badge } from "@indurex/ui/components/badge";

const meta = {
  title: "Components/Badge",
  component: Badge,
  args: { children: "Purdue L1", variant: "default" },
  argTypes: {
    children: { control: "text" },
    variant: {
      control: "select",
      options: [
        "default",
        "secondary",
        "outline",
        "ghost",
        "destructive",
        "link",
      ],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Variants: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-2">
      <Badge {...args} variant="default">
        New
      </Badge>
      <Badge {...args} variant="secondary">
        EtherNet/IP
      </Badge>
      <Badge {...args} variant="outline">
        Purdue L1
      </Badge>
      <Badge {...args} variant="ghost">
        Tank farm
      </Badge>
      <Badge {...args} variant="destructive">
        Offline
      </Badge>
      <Badge {...args} variant="link">
        CVE-2022-38465
      </Badge>
    </div>
  ),
};

export const WithIcon: Story = {
  args: { variant: "secondary" },
  render: (args) => (
    <Badge {...args}>
      <Check data-icon="inline-start" />
      Patched
    </Badge>
  ),
};
