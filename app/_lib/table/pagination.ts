import type { PaginationState } from "@tanstack/react-table";

/** The table members this selector needs (structural, feature-agnostic). */
type PaginatedTable = {
  state: { pagination: PaginationState };
  /** Rows after search and filters, before paging. */
  getRowCount(): number;
  setPageIndex(pageIndex: number): void;
  setPageSize(pageSize: number): void;
};

/** Props for <TablePagination>. Pure: call it during the owning render. */
export function selectPagination(
  table: PaginatedTable,
  pageSizes: readonly number[],
) {
  const { pageIndex, pageSize } = table.state.pagination;
  return {
    pageIndex,
    pageSize,
    pageSizes,
    rowCount: table.getRowCount(),
    onPageChange: (index: number) => table.setPageIndex(index),
    // TanStack keeps the first visible row on screen when the size changes.
    onPageSizeChange: (size: number) => table.setPageSize(size),
  };
}
