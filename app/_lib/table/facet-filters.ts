// Faceted-filter view-model for any TanStack table with column filtering and
// faceting. Pure: call it during the render that owns the table.

export type FacetOption = { value: string; label: string };

export type FacetFilterConfig = {
  /** Column id; also the URL key when paired with useUrlTableState. */
  id: string;
  title: string;
  /** Fixed options in a meaningful order; omitted = the data's values, sorted. */
  options?: readonly FacetOption[];
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
    .map((value) => ({ value, label: value }));
}

function labelOf(options: readonly FacetOption[], value: string) {
  return options.find((o) => o.value === value)?.label ?? value;
}

export function selectFacetFilters(
  table: FacetTable,
  configs: readonly FacetFilterConfig[],
) {
  const filters = configs.flatMap((config) => {
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
    filters,
    active: filters.filter((f) => f.selected.length > 0),
    clearAll: () => table.resetColumnFilters(true),
  };
}
