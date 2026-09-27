import type { ReactNode } from "react";

import {
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@indurex/ui";

const FIGMA_FILE = "https://www.figma.com/design/vPzNwsIvOhAewMk44r6CJz/";

type TodoPageProps = {
  title: string;
  subtitle: string;
  /** Figma node id of the approved design page, e.g. "4065-2670". */
  figmaNode: string;
  /** What remains to build, taken from the approved design. */
  todo: string[];
  /** Rendered above the title, as in the designs. */
  breadcrumb?: ReactNode;
};

/** Temporary placeholder for a screen that is designed but not built yet. */
export function TodoPage({
  title,
  subtitle,
  figmaNode,
  todo,
  breadcrumb,
}: TodoPageProps) {
  return (
    <div className="flex flex-col gap-6">
      {breadcrumb}
      <div className="flex flex-col gap-0.5">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-semibold">{title}</h1>
          <Badge variant="outline">TODO</Badge>
        </div>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </div>
      <Card className="max-w-2xl">
        <CardHeader>
          <CardTitle>To build from the design</CardTitle>
          <CardDescription>
            <a
              href={`${FIGMA_FILE}?node-id=${figmaNode}`}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              Open the approved design in Figma
            </a>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="flex list-disc flex-col gap-1.5 pl-5">
            {todo.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
