"use client";

import { useId } from "react";
import { ChevronDown } from "lucide-react";

import {
  Button,
  Checkbox,
  Label,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@indurex/ui";

import type { FacetOption } from "@/app/_lib/table/facet-filters";

type FacetFilterProps = {
  title: string;
  /** Every possible option, in display order. */
  options: readonly FacetOption[];
  /** Matches per option under the other active filters. */
  counts: ReadonlyMap<unknown, number>;
  selected: readonly string[];
  onChange: (selected: string[]) => void;
};

/**
 * Multi-select filter popover with a count per option. Options with no
 * matches are hidden unless selected, so a selection can always be undone.
 * Props only: it knows nothing about the table library driving it.
 */
export function FacetFilter({
  title,
  options,
  counts,
  selected,
  onChange,
}: FacetFilterProps) {
  const idPrefix = useId();
  const visible = options.filter(
    (o) => (counts.get(o.value) ?? 0) > 0 || selected.includes(o.value),
  );

  function toggle(value: string, checked: boolean) {
    onChange(
      checked ? [...selected, value] : selected.filter((v) => v !== value),
    );
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          iconEnd={<ChevronDown />}
          aria-label={
            selected.length
              ? `${title} filter, ${selected.length} selected`
              : `${title} filter`
          }
        >
          {selected.length ? `${title} · ${selected.length}` : title}
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-56 gap-0 p-1">
        <ul aria-label={`${title} options`}>
          {visible.map((option, index) => {
            // Index, not value: values like "IP camera" contain spaces.
            const id = `${idPrefix}-${index}`;
            return (
              <li
                key={option.value}
                className="flex items-center gap-2 rounded-sm px-2 py-1.5 hover:bg-accent"
              >
                <Checkbox
                  id={id}
                  checked={selected.includes(option.value)}
                  onCheckedChange={(checked) =>
                    toggle(option.value, checked === true)
                  }
                />
                <Label htmlFor={id} className="flex-1 font-normal">
                  {option.label}
                </Label>
                <span className="font-mono text-xs text-muted-foreground">
                  {counts.get(option.value) ?? 0}
                </span>
              </li>
            );
          })}
        </ul>
        {selected.length > 0 && (
          <Button
            variant="ghost"
            size="sm"
            className="mt-1 justify-start"
            onClick={() => onChange([])}
          >
            Clear
          </Button>
        )}
      </PopoverContent>
    </Popover>
  );
}
