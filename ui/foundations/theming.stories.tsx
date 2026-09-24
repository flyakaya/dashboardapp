import type { Meta, StoryObj } from "@storybook/react-vite";
import { Download, ShieldAlert } from "lucide-react";

import { Badge } from "@indurex/ui/components/badge";
import { Button } from "@indurex/ui/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@indurex/ui/components/card";
import { Input } from "@indurex/ui/components/input";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@indurex/ui/components/tabs";

/** A small, realistic slice of the product used to compare themes. */
function Panel({ id }: { id: string }) {
  return (
    <Card className="w-[26rem]">
      <CardHeader>
        <CardDescription className="text-label uppercase">
          Vulnerabilities
        </CardDescription>
        <CardTitle className="flex items-baseline gap-2 text-2xl tabular-nums">
          25 <Badge variant="destructive">14 KEV</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-3">
        <Tabs defaultValue="open">
          <TabsList>
            <TabsTrigger value="open">Open</TabsTrigger>
            <TabsTrigger value="accepted">Accepted</TabsTrigger>
            <TabsTrigger value="fixed">Fixed</TabsTrigger>
          </TabsList>
          <TabsContent
            value="open"
            className="text-body-sm text-muted-foreground"
          >
            11 open on 23 assets
          </TabsContent>
          <TabsContent
            value="accepted"
            className="text-body-sm text-muted-foreground"
          >
            Risk accepted until next turnaround
          </TabsContent>
          <TabsContent
            value="fixed"
            className="text-body-sm text-muted-foreground"
          >
            Patched in the last 30 days
          </TabsContent>
        </Tabs>
        <Input
          aria-label={`Search findings (${id})`}
          placeholder="Search CVE, asset or vendor…"
        />
        <div className="flex gap-2">
          <Button iconStart={<ShieldAlert />}>Triage</Button>
          <Button variant="outline" iconStart={<Download />}>
            Export
          </Button>
          <Button variant="ghost">Dismiss</Button>
        </div>
      </CardContent>
    </Card>
  );
}

const meta = {
  title: "Foundations/Theming",
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: [
          "Dark is the default; Light is the alternative. The theme is a class on `<html>` (`.dark`), set by `ThemeScript` (before paint) and `ThemeToggle` in the app, and by the toolbar theme switch here.",
          "",
          "- `tokens.css` defines light values on `:root, .light` and dark values on `.dark`; aliases (e.g. `--sidebar`) are redeclared per scope so nested themes resolve correctly.",
          "- Components never branch on the theme in JS — they use semantic tokens (`bg-card`, `text-muted-foreground`) and occasional `dark:` variants.",
          "- To change a colour, edit `ui/tokens/tokens.json` and run `npm run tokens`; Figma variables mirror the same file.",
        ].join("\n"),
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

/** Follows the toolbar theme switch (paintbrush icon). */
export const CurrentTheme: Story = {
  name: "Current theme (toolbar)",
  render: () => <Panel id="current" />,
};

/** Both themes at once. `dark:` variants need a `.dark` ancestor, so the page itself stays light. */
export const SideBySide: Story = {
  name: "Dark vs Light",
  parameters: { themes: { themeOverride: "light" } },
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(["dark", "light"] as const).map((mode) => (
        <div
          key={mode}
          className={`${mode} grid gap-3 rounded-xl bg-background p-6 text-foreground`}
        >
          <Badge variant="outline">.{mode}</Badge>
          <Panel id={mode} />
        </div>
      ))}
    </div>
  ),
};
