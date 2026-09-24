import type { Meta, StoryObj } from "@storybook/react-vite";

import { Badge } from "@indurex/ui/components/badge";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@indurex/ui/components/select";

const ZONES = [
  ["cdu", "Crude distillation unit (CDU)", 12],
  ["fcc", "Fluid catalytic cracker (FCC)", 12],
  ["hdt", "Hydrotreater (HDT)", 10],
  ["sru", "Sulfur recovery unit (SRU)", 8],
  ["tkf", "Tank farm (TKF)", 10],
  ["jty", "Marine jetty & loading (JTY)", 6],
  ["utl", "Utilities & cooling (UTL)", 8],
  ["ctl", "Central control room & IT/DMZ (CTL)", 14],
] as const;

type Args = { size: "default" | "sm"; disabled: boolean; invalid: boolean };

function ZoneSelect({
  size,
  disabled,
  invalid,
  defaultValue,
}: Args & { defaultValue?: string }) {
  return (
    <Select defaultValue={defaultValue} disabled={disabled}>
      <SelectTrigger
        size={size}
        aria-label="Zone"
        aria-invalid={invalid || undefined}
        className="w-72"
      >
        <SelectValue placeholder="All zones" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Process areas</SelectLabel>
          {ZONES.slice(0, 7).map(([value, label, count]) => (
            <SelectItem key={value} value={value}>
              {label}
              <Badge variant="secondary" className="tabular-nums">
                {count}
              </Badge>
            </SelectItem>
          ))}
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>IT / OT boundary</SelectLabel>
          <SelectItem value={ZONES[7][0]}>
            {ZONES[7][1]}
            <Badge variant="secondary" className="tabular-nums">
              {ZONES[7][2]}
            </Badge>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

const meta = {
  title: "Components/Select",
  component: ZoneSelect,
  args: { size: "default", disabled: false, invalid: false },
  argTypes: { size: { control: "inline-radio", options: ["default", "sm"] } },
} satisfies Meta<typeof ZoneSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Placeholder: Story = {};

export const WithValue: Story = { args: { defaultValue: "cdu" } };

export const Sizes: Story = {
  render: (args) => (
    <div className="grid gap-3">
      <ZoneSelect {...args} size="default" defaultValue="fcc" />
      <ZoneSelect {...args} size="sm" defaultValue="fcc" />
    </div>
  ),
};

export const Invalid: Story = { args: { invalid: true } };

export const Disabled: Story = {
  args: { disabled: true, defaultValue: "tkf" },
};
