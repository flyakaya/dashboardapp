import type { Meta, StoryObj } from "@storybook/react-vite";

import { Badge } from "@indurex/ui/components/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@indurex/ui/components/card";
import { Separator } from "@indurex/ui/components/separator";
import tokens from "@indurex/ui/tokens/tokens.json";

type Mode = "light" | "dark";
type ColorToken = { light: string; dark: string; description?: string };

const COLORS = tokens.color as Record<string, ColorToken>;
const ALIASES = tokens.alias as Record<string, string>;
const PRIMITIVES = tokens.primitives as Record<string, Record<string, string>>;

const hex = (ref: string) => {
  const [ramp, step] = ref.split(".");
  return PRIMITIVES[ramp][step];
};

const GROUPS: [string, string[]][] = [
  [
    "Surfaces",
    ["background", "card", "popover", "muted", "secondary", "accent"],
  ],
  ["Text", ["foreground", "muted-foreground", "primary-foreground"]],
  ["Interaction", ["primary", "ring", "input", "border"]],
  ["State", ["destructive", "success", "warning", "maintenance"]],
  [
    "OT: severity & KEV",
    [
      "severity-critical",
      "severity-high",
      "severity-medium",
      "severity-low",
      "kev",
    ],
  ],
  ["Aliases", Object.keys(ALIASES).filter((n) => n !== "severity-critical")],
];

function Swatch({ name }: { name: string }) {
  return (
    <span
      className="size-8 shrink-0 rounded-md border border-border"
      style={{ background: `var(--${name})` }}
    />
  );
}

function TokenRow({ name, mode }: { name: string; mode: Mode }) {
  const token = COLORS[name];
  const alias = ALIASES[name];
  const value = token ? `${token[mode]} · ${hex(token[mode])}` : `→ ${alias}`;
  return (
    <div className="flex items-center gap-3">
      <Swatch name={name} />
      <div className="grid min-w-0 gap-0.5">
        <CardTitle className="text-sm">{name}</CardTitle>
        <CardDescription className="text-xs">
          <code>var(--{name})</code> · {value}
          {token?.description && ` — ${token.description}`}
        </CardDescription>
      </div>
    </div>
  );
}

function ThemeColumn({ mode }: { mode: Mode }) {
  return (
    <Card className={mode}>
      <CardHeader>
        <CardTitle>{mode === "dark" ? "Dark (default)" : "Light"}</CardTitle>
        <CardDescription>
          <code>.{mode}</code> scope
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-5">
        {GROUPS.map(([group, names], i) => (
          <div key={group} className="grid gap-2.5">
            {i > 0 && <Separator />}
            <Badge variant="outline">{group}</Badge>
            {names.map((n) => (
              <TokenRow key={n} name={n} mode={mode} />
            ))}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

// Written out in full so Tailwind generates every class.
const STATES = [
  [
    "destructive",
    "border-destructive/30 bg-destructive/10 text-destructive",
    "bg-destructive",
  ],
  ["warning", "border-warning/30 bg-warning/10 text-warning", "bg-warning"],
  ["success", "border-success/30 bg-success/10 text-success", "bg-success"],
  [
    "maintenance",
    "border-maintenance/30 bg-maintenance/10 text-maintenance",
    "bg-maintenance",
  ],
  [
    "severity-high",
    "border-severity-high/30 bg-severity-high/10 text-severity-high",
    "bg-severity-high",
  ],
  [
    "severity-medium",
    "border-severity-medium/30 bg-severity-medium/10 text-severity-medium",
    "bg-severity-medium",
  ],
  [
    "severity-low",
    "border-severity-low/30 bg-severity-low/10 text-severity-low",
    "bg-severity-low",
  ],
  ["kev", "border-kev/30 bg-kev/10 text-kev", "bg-kev"],
] as const;

function TintColumn({ mode }: { mode: Mode }) {
  return (
    <Card className={mode}>
      <CardHeader>
        <CardTitle>{mode === "dark" ? "Dark" : "Light"}</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-2">
        {STATES.map(([name, tint, solid]) => (
          <div key={name} className="flex items-center gap-2">
            <Badge variant="outline" className={tint}>
              bg-{name}/10
            </Badge>
            <Badge className={`text-background ${solid}`}>bg-{name}</Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

const meta = {
  title: "Foundations/Colors",
  parameters: {
    layout: "padded",
    // Both columns scope their own theme, so the page itself must not be `.dark`.
    themes: { themeOverride: "light" },
    docs: {
      description: {
        component:
          "Semantic colour tokens from `ui/tokens/tokens.json` (generated into `tokens.css`). Each state colour is ONE token: tints and borders come from opacity modifiers, solids pair with `text-background`. Never encode state with colour alone.",
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const ThemeTokens: Story = {
  name: "Theme tokens",
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      <ThemeColumn mode="dark" />
      <ThemeColumn mode="light" />
    </div>
  ),
};

export const TintsAndSolids: Story = {
  name: "Tints & solids",
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      <TintColumn mode="dark" />
      <TintColumn mode="light" />
    </div>
  ),
};

export const Primitives: Story = {
  parameters: { themes: { themeOverride: undefined } },
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Primitive ramps</CardTitle>
        <CardDescription>
          Not Tailwind colours — components only use the semantic tokens.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-3">
        {Object.entries(PRIMITIVES).map(([ramp, steps]) => (
          <div key={ramp} className="flex items-center gap-2">
            <Badge variant="outline" className="w-20">
              {ramp}
            </Badge>
            {Object.entries(steps).map(([step, value]) => (
              <div key={step} className="grid gap-1 text-center">
                <span
                  className="h-8 w-14 rounded-md border border-border"
                  style={{ background: value }}
                />
                <CardDescription className="text-xs">{step}</CardDescription>
              </div>
            ))}
          </div>
        ))}
      </CardContent>
    </Card>
  ),
};
