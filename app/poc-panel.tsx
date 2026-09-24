"use client";

import { useState } from "react";
import { Download } from "lucide-react";

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  SearchInput,
} from "@indurex/ui";

/** Temporary POC: proves the library renders, themes and handles events in the app. */
export function PocPanel() {
  const [exporting, setExporting] = useState(false);

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Library POC</CardTitle>
        <CardDescription>
          Type in the search field and open the browser console.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <SearchInput
          label="Search assets"
          placeholder="Name, IP, vendor or model…"
          description="Each keystroke is logged to the console."
          onValueChange={(query) => console.log("[search]", query)}
          onClear={() => console.log("[search] cleared")}
        />
      </CardContent>
      <CardFooter className="justify-end">
        <Button
          iconStart={<Download />}
          loading={exporting}
          onClick={() => {
            console.log("[button] export clicked");
            setExporting(true);
            setTimeout(() => setExporting(false), 1500);
          }}
        >
          {exporting ? "Exporting" : "Export CSV"}
        </Button>
      </CardFooter>
    </Card>
  );
}
