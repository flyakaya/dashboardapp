"use client";

import { useEffect, type MouseEvent } from "react";
import { useTable, type Row } from "@tanstack/react-table";

import type { AssetRow } from "@/app/_data/asset-row";
import { matchesSearch } from "@/app/_data/asset-row";
import { useRowNavigation } from "@/app/_hooks/use-row-navigation";
import { useUrlTableState } from "@/app/_hooks/use-url-table-state";
import { selectFacetFilters } from "@/app/_lib/table/facet-filters";
import { selectPagination } from "@/app/_lib/table/pagination";
import { selectSortHeader } from "@/app/_lib/table/sort-header";

import {
  ASSET_COLUMN_IDS,
  ASSET_FILTER_IDS,
  ASSET_FILTERS,
  assetColumns,
  assetTableFeatures,
} from "../_lib/asset-columns";

const PAGE_SIZES = [20, 50, 100] as const;

// Module scope: useUrlTableState needs stable references (see its docs).
const DEFAULT_SORTING = [{ id: "name", desc: false }];

/**
 * Everything the inventory screen renders, as one view-model. Search,
 * faceted filters, sort and pagination run client-side over the full list
 * and are stored in the URL. Search, filters and sort run first; only the
 * result is paged, and any change to them resets to page 1 (TanStack's
 * autoResetPageIndex, left on).
 */
export function useAssetInventory(rows: AssetRow[]) {
  const { resetOutOfRangePage, ...urlState } = useUrlTableState({
    filterIds: ASSET_FILTER_IDS,
    sortIds: ASSET_COLUMN_IDS,
    pageSizes: PAGE_SIZES,
    defaultSorting: DEFAULT_SORTING,
  });

  const table = useTable({
    features: assetTableFeatures,
    columns: assetColumns,
    data: rows,
    getRowId: (row) => row.assetId,
    ...urlState,
    // One search over the precomputed haystack, run once per row (via "name").
    // No debounce: 80 rows filter in well under a millisecond per keystroke.
    // If search moves to the backend, debounce the request (and set
    // manualFiltering); for a much larger client-side list, useDeferredValue
    // keeps typing instant while the rows catch up.
    globalFilterFn: (row, _columnId, query: string) =>
      matchesSearch(row.original, query),
    getColumnCanGlobalFilter: (column) => column.id === "name",
    enableSortingRemoval: false,
    enableMultiSort: false,
    sortDescFirst: false,
  });

  // A page beyond the result would render an empty table. Syncs the URL
  // (an external system), hence an effect.
  const pageCount = table.getPageCount();
  useEffect(
    () => resetOutOfRangePage(pageCount),
    [resetOutOfRangePage, pageCount],
  );

  const openRow = useRowNavigation();
  const { filters, active, clearAll } = selectFacetFilters(
    table,
    ASSET_FILTERS,
  );
  const query = table.state.globalFilter.trim();
  const matched = table.getRowCount();

  return {
    table,
    search: {
      value: table.state.globalFilter,
      onChange: (value: string) => table.setGlobalFilter(value),
      clear: () => table.setGlobalFilter(""),
    },
    counts: {
      total: rows.length,
      matched,
      /** True when search or filters narrow the list. */
      narrowed: query !== "" || active.length > 0,
    },
    query,
    filters,
    activeFilters: active,
    clearFilters: clearAll,
    pagination: selectPagination(table, PAGE_SIZES),
    sortHeader: selectSortHeader,
    onRowClick: (
      event: MouseEvent,
      row: Row<typeof assetTableFeatures, AssetRow>,
    ) => openRow(event, `/assets/${row.original.assetId}`),
  };
}
