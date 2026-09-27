/** The header members this selector needs (structural, feature-agnostic). */
type SortableHeader = {
  column: {
    getIsSorted(): false | "asc" | "desc";
    getToggleSortingHandler(): ((event: unknown) => void) | undefined;
  };
};

const ARIA_SORT = { asc: "ascending", desc: "descending" } as const;

/** Sort state for one column header. The icon is the renderer's choice. */
export function selectSortHeader(header: SortableHeader) {
  const sorted = header.column.getIsSorted();
  return {
    sorted,
    ariaSort: sorted ? ARIA_SORT[sorted] : undefined,
    toggle: header.column.getToggleSortingHandler(),
  };
}
