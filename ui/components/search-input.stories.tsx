import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, userEvent, within } from "storybook/test";

import { Badge } from "@indurex/ui/components/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@indurex/ui/components/card";
import { SearchInput } from "@indurex/ui/components/search-input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@indurex/ui/components/select";
import { Field, FieldLabel } from "@indurex/ui/components/field";

const meta = {
  title: "Components/SearchInput",
  component: SearchInput,
  args: {
    label: "Search assets",
    placeholder: "Name, IP, vendor or model…",
    layout: "field",
  },
  argTypes: {
    label: { control: "text" },
    description: { control: "text" },
    error: { control: "text" },
    resultCount: { control: "text" },
    shortcut: { control: "text" },
    layout: { control: "inline-radio", options: ["field", "toolbar"] },
  },
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SearchInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FieldLayout: Story = { name: "Field layout" };

export const Toolbar: Story = {
  name: "Toolbar layout",
  args: { layout: "toolbar", placeholder: "Search 80 assets…" },
};

export const WithDescription: Story = {
  args: { description: "Matches name, IP address, vendor and model." },
};

export const WithResults: Story = {
  args: { defaultValue: "CDU-PLC", resultCount: "2 results" },
};

export const Invalid: Story = {
  args: {
    label: "Filter by IP",
    defaultValue: "10.11.10.",
    error: "Enter a full IPv4 address or a CIDR range.",
  },
};

export const Disabled: Story = {
  args: { disabled: true, defaultValue: "Tank farm" },
};

/** Both layouts where they are used: the toolbar in a page header, the field in a filter panel. */
export const InContext: Story = {
  decorators: [
    (Story) => (
      <div className="w-[40rem]">
        <Story />
      </div>
    ),
  ],
  render: () => (
    <div className="grid grid-cols-[14rem_1fr] gap-4">
      <Card size="sm">
        <CardHeader>
          <CardTitle>Filters</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <SearchInput label="Vendor" placeholder="Siemens, Rockwell…" />
          <Field>
            <FieldLabel htmlFor="zone">Zone</FieldLabel>
            <Select>
              <SelectTrigger id="zone" className="w-full">
                <SelectValue placeholder="All zones" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cdu">
                  Crude distillation unit (CDU)
                </SelectItem>
                <SelectItem value="tkf">Tank farm (TKF)</SelectItem>
              </SelectContent>
            </Select>
          </Field>
        </CardContent>
      </Card>
      <Card size="sm">
        <CardHeader>
          <CardTitle>Inventory</CardTitle>
        </CardHeader>
        <CardContent>
          <SearchInput
            layout="toolbar"
            label="Search inventory"
            placeholder="Search 80 assets…"
          />
        </CardContent>
      </Card>
    </div>
  ),
};

/** Typing shows the clear button; clearing empties the field and keeps focus. */
export const ClearInteraction: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("searchbox", { name: "Search assets" });
    await userEvent.type(input, "Siemens");
    await expect(input).toHaveValue("Siemens");
    await userEvent.click(canvas.getByRole("button", { name: "Clear search" }));
    await expect(input).toHaveValue("");
    await expect(input).toHaveFocus();
  },
};

/** Pressing "/" anywhere focuses the toolbar search. */
export const ShortcutInteraction: Story = {
  args: { layout: "toolbar", placeholder: "Search 80 assets…" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("searchbox", { name: "Search assets" });
    await userEvent.keyboard("/");
    await expect(input).toHaveFocus();
    await expect(input).toHaveValue("");
  },
};

function ControlledSearch() {
  const [query, setQuery] = useState("Siemens");
  return (
    <div className="grid gap-3">
      <SearchInput
        label="Search assets"
        value={query}
        onValueChange={setQuery}
      />
      <Badge variant="outline">query: {query || "(empty)"}</Badge>
    </div>
  );
}

/** Controlled: the parent owns the value; clearing reports "" through onValueChange. */
export const Controlled: Story = {
  render: () => <ControlledSearch />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("searchbox", { name: "Search assets" });
    await expect(input).toHaveValue("Siemens");
    await userEvent.click(canvas.getByRole("button", { name: "Clear search" }));
    await expect(input).toHaveValue("");
    await expect(canvas.getByText("query: (empty)")).toBeInTheDocument();
  },
};
