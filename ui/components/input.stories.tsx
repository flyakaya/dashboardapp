import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@indurex/ui/components/field";
import { Input } from "@indurex/ui/components/input";

const meta = {
  title: "Components/Input",
  component: Input,
  args: { placeholder: "e.g. CDU-PLC-01", "aria-label": "Asset name" },
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithValue: Story = { args: { defaultValue: "CDU-PLC-01" } };

export const WithLabel: Story = {
  render: () => (
    <Field>
      <FieldLabel htmlFor="ip">IP address</FieldLabel>
      <Input id="ip" defaultValue="10.11.10.141" className="font-mono" />
      <FieldDescription>Primary interface of the asset.</FieldDescription>
    </Field>
  ),
};

export const Invalid: Story = {
  render: () => (
    <Field data-invalid>
      <FieldLabel htmlFor="cidr">Subnet</FieldLabel>
      <Input
        id="cidr"
        defaultValue="10.11.10.0/33"
        aria-invalid
        aria-describedby="cidr-error"
        className="font-mono"
      />
      <FieldError id="cidr-error">
        Prefix length must be between 0 and 32.
      </FieldError>
    </Field>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Field data-disabled>
      <FieldLabel htmlFor="site">Site</FieldLabel>
      <Input id="site" disabled defaultValue="Port Meridian refinery" />
    </Field>
  ),
};
