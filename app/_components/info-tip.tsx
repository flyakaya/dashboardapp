"use client";

import { useState } from "react";
import { Info } from "lucide-react";

import { Tooltip, TooltipContent, TooltipTrigger } from "@indurex/ui";

import { GLOSSARY, type GlossaryTerm } from "@/app/_lib/glossary";

/**
 * ⓘ next to a label or column header, explaining one glossary term. Opens on
 * hover and keyboard focus; also toggles on click, because tooltips don't
 * open on tap on touch screens.
 */
export function InfoTip({
  term,
  label,
}: {
  term: GlossaryTerm;
  /** What it explains, for the accessible name: "About {label}". */
  label: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Tooltip open={open} onOpenChange={setOpen}>
      <TooltipTrigger asChild>
        <button
          type="button"
          aria-label={`About ${label}`}
          // Radix closes a tooltip on pointer down and click; preventDefault
          // skips its handlers so the tap/click toggle below is ours alone.
          onPointerDown={(event) => event.preventDefault()}
          onClick={(event) => {
            event.preventDefault();
            setOpen((isOpen) => !isOpen);
          }}
          className="inline-flex size-4 shrink-0 items-center justify-center rounded-sm text-muted-foreground hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
        >
          <Info aria-hidden className="size-3.5" />
        </button>
      </TooltipTrigger>
      <TooltipContent className="max-w-64 text-pretty">
        {GLOSSARY[term]}
      </TooltipContent>
    </Tooltip>
  );
}
