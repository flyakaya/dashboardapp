import type { Meta, StoryObj } from "@storybook/react-vite";
import { Info, RefreshCw } from "lucide-react";

import { Button } from "@indurex/ui/components/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@indurex/ui/components/tooltip";

type Args = { side: "top" | "right" | "bottom" | "left"; text: string };

function Example({ side, text }: Args) {
  return (
    <Tooltip defaultOpen>
      <TooltipTrigger asChild>
        <Button variant="outline" size="icon" aria-label="Rescan zone">
          <RefreshCw />
        </Button>
      </TooltipTrigger>
      <TooltipContent side={side}>{text}</TooltipContent>
    </Tooltip>
  );
}

const meta = {
  title: "Components/Tooltip",
  component: Example,
  args: { side: "top", text: "Rescan zone" },
  argTypes: {
    side: {
      control: "inline-radio",
      options: ["top", "right", "bottom", "left"],
    },
  },
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <div className="p-16">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Example>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sides: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-x-40 gap-y-16">
      {(["top", "right", "bottom", "left"] as const).map((side) => (
        <Tooltip key={side} defaultOpen>
          <TooltipTrigger asChild>
            <Button variant="outline" size="sm">
              {side}
            </Button>
          </TooltipTrigger>
          <TooltipContent side={side}>side=&quot;{side}&quot;</TooltipContent>
        </Tooltip>
      ))}
    </div>
  ),
};

export const Explainer: Story = {
  render: () => (
    <div className="flex items-center gap-1.5 text-sm">
      Resilience score
      <Tooltip defaultOpen>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon-xs"
            aria-label="About the resilience score"
          >
            <Info />
          </Button>
        </TooltipTrigger>
        <TooltipContent className="max-w-60">
          Weighted pass rate of the security controls that apply to this asset
          class. 32 assets are not assessed yet.
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};
