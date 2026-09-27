// Faceted-filter view-model for any TanStack table with column filtering and
// faceting. Pure: call it during the render that owns the table.

import type { ComponentType } from "react";

/** An option's optional glyph (e.g. a lucide icon); decorative, text always shown. */
export type OptionIcon = ComponentType<{ className?: string }>;

export type FacetOption = { value: string; label: string; icon?: OptionIcon };

export type FacetFilterConfig = {
  /** Column id; also the URL key when paired with useUrlTableState. */
  id: string;
  title: string;
  /** Fixed options in a meaningful order; omitted = the data's values, sorted. */
  options?: readonly FacetOption[];
  /** Set only by links (e.g. from the dashboard): no toolbar button, but a chip. */
  hidden?: boolean;
  /** Icon per option value, for options derived from the data. */
  iconFor?: (value: string) => OptionIcon | undefined;
};

/** The column methods this selector needs (structural, feature-agnostic). */
type FacetColumn = {
  getFacetedUniqueValues(): Map<unknown, number>;
  getFilterValue(): unknown;
  setFilterValue(value: unknown): void;
};

type FacetTable = {
  getColumn(id: string): FacetColumn | undefined;
  resetColumnFilters(defaultState?: boolean): void;
};

/**
 * Fixed options, or the data's values sorted naturally. Selected values are
 * always included: facets omit values with no matches under the other
 * filters, and a selection must stay visible to be unticked.
 */
function optionsFor(
  config: FacetFilterConfig,
  counts: ReadonlyMap<unknown, number>,
  selected: readonly string[],
): readonly FacetOption[] {
  if (config.options) return config.options;
  const values = new Set([...[...counts.keys()].map(String), ...selected]);
  return [...values]
    .sort((a, b) => a.localeCompare(b, "en", { numeric: true }))
    .map((value) => ({ value, label: value, icon: config.iconFor?.(value) }));
}

function labelOf(options: readonly FacetOption[], value: string) {
  return options.find((o) => o.value === value)?.label ?? value;
}

export function selectFacetFilters(
  table: FacetTable,
  configs: readonly FacetFilterConfig[],
) {
  const all = configs.flatMap((config) => {
    const column = table.getColumn(config.id);
    if (!column) return [];
    const counts = column.getFacetedUniqueValues();
    const raw = column.getFilterValue();
    const selected = Array.isArray(raw) ? raw.map(String) : [];
    const options = optionsFor(config, counts, selected);
    return [
      {
        id: config.id,
        title: config.title,
        hidden: config.hidden ?? false,
        options,
        counts,
        selected,
        onChange: (values: string[]) =>
          column.setFilterValue(values.length ? values : undefined),
        /** Chip text for an active filter, e.g. "Zone: CDU, FCC". */
        chipLabel: `${config.title}: ${selected.map((v) => labelOf(options, v)).join(", ")}`,
        clear: () => column.setFilterValue(undefined),
      },
    ];
  });

  return {
    filters: all.filter((f) => !f.hidden),
    active: all.filter((f) => f.selected.length > 0),
    clearAll: () => table.resetColumnFilters(true),
  };
}
