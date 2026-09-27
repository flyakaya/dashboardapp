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
          className="relative"
          iconEnd={<ChevronDown />}
          aria-label={
            selected.length
              ? `${title} filter, ${selected.length} selected`
              : `${title} filter`
          }
        >
          {title}
          {/* Overlaid, so it takes no layout space: selecting a value never
              changes the trigger's width or shifts the buttons after it. */}
          {selected.length > 0 && (
            <span
              aria-hidden
              className="pointer-events-none absolute -top-1.5 -right-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] leading-none font-semibold text-primary-foreground tabular-nums"
            >
              {selected.length}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-64 gap-0 p-1">
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
                  {option.icon && (
                    <option.icon
                      aria-hidden
                      className="size-3.5 shrink-0 text-muted-foreground"
                    />
                  )}
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
