import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  ChevronDown,
  Download,
  ExternalLink,
  RefreshCw,
  ShieldAlert,
  Trash2,
} from "lucide-react";
import { expect, within } from "storybook/test";

import { Button } from "@indurex/ui/components/button";

// Controls pick an icon by name; the mapping turns it into an element.
const ICONS = {
  none: undefined,
  Download: <Download />,
  RefreshCw: <RefreshCw />,
  ShieldAlert: <ShieldAlert />,
  ChevronDown: <ChevronDown />,
  ExternalLink: <ExternalLink />,
};

const meta = {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Acknowledge",
    variant: "default",
    size: "default",
    loading: false,
  },
  argTypes: {
    children: { control: "text" },
    loading: { control: "boolean" },
    iconStart: {
      control: "select",
      options: ["none", "Download", "RefreshCw", "ShieldAlert"],
      mapping: ICONS,
    },
    iconEnd: {
      control: "select",
      options: ["none", "ChevronDown", "ExternalLink"],
      mapping: ICONS,
    },
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
    size: {
      control: "select",
      options: [
        "default",
        "xs",
        "sm",
        "lg",
        "icon",
        "icon-xs",
        "icon-sm",
        "icon-lg",
      ],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Variants: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-3">
      <Button {...args} variant="default">
        Acknowledge
      </Button>
      <Button {...args} variant="secondary">
        Assign owner
      </Button>
      <Button {...args} variant="outline">
        Export CSV
      </Button>
      <Button {...args} variant="ghost">
        Cancel
      </Button>
      <Button {...args} variant="destructive">
        Isolate asset
      </Button>
      <Button {...args} variant="link">
        View advisory
      </Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex items-center gap-3">
      <Button {...args} size="xs">
        Extra small
      </Button>
      <Button {...args} size="sm">
        Small · h-7
      </Button>
      <Button {...args} size="default">
        Default · h-8
      </Button>
      <Button {...args} size="lg">
        Large
      </Button>
    </div>
  ),
};

export const WithIcon: Story = {
  render: (args) => (
    <div className="flex items-center gap-3">
      <Button {...args} variant="outline" iconStart={<Download />}>
        Export CSV
      </Button>
      <Button {...args} variant="secondary" iconStart={<RefreshCw />}>
        Rescan zone
      </Button>
      <Button {...args} variant="outline" iconEnd={<ChevronDown />}>
        All zones
      </Button>
      <Button
        {...args}
        variant="ghost"
        iconStart={<ShieldAlert />}
        iconEnd={<ExternalLink />}
      >
        Open advisory
      </Button>
    </div>
  ),
};

/** `loading` swaps the start icon for a spinner, keeps the label, and blocks clicks. */
export const Loading: Story = {
  args: { loading: true, children: "Rescanning zone" },
  render: (args) => (
    <div className="flex items-center gap-3">
      <Button {...args} iconStart={<RefreshCw />} />
      <Button {...args} variant="outline">
        Exporting
      </Button>
      <Button {...args} size="icon" variant="outline" aria-label="Rescan">
        <RefreshCw />
      </Button>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const buttons = within(canvasElement).getAllByRole("button");
    for (const b of buttons) {
      await expect(b).toBeDisabled();
      await expect(b).toHaveAttribute("aria-busy", "true");
    }
  },
};

export const IconOnly: Story = {
  render: (args) => (
    <div className="flex items-center gap-3">
      {(["icon-xs", "icon-sm", "icon", "icon-lg"] as const).map((size) => (
        <Button
          key={size}
          {...args}
          size={size}
          variant="outline"
          aria-label="Rescan"
        >
          <RefreshCw />
        </Button>
      ))}
      <Button {...args} size="icon" variant="ghost" aria-label="Delete finding">
        <Trash2 />
      </Button>
    </div>
  ),
};

export const States: Story = {
  render: (args) => (
    <div className="flex items-center gap-3">
      <Button {...args}>Enabled</Button>
      <Button {...args} disabled>
        Disabled
      </Button>
      <Button {...args} variant="outline" aria-invalid>
        Invalid
      </Button>
    </div>
  ),
};
