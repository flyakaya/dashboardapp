"use client";

import { useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  functionalUpdate,
  type ColumnFiltersState,
  type PaginationState,
  type SortingState,
  type Updater,
} from "@tanstack/react-table";

/** Pass stable references (module constants): they key the memoized state. */
type UrlTableStateOptions = {
  /** Column ids with multi-value filters; each id is also its URL key. */
  filterIds: readonly string[];
  /** Column ids that may be sorted; anything else in `?sort=` is ignored. */
  sortIds: readonly string[];
  /** Allowed page sizes; the first is the default. */
  pageSizes: readonly number[];
  defaultSorting: SortingState;
};

type ParamPatch = Record<string, string | readonly string[] | null>;

function parseSorting(raw: string | null, sortIds: readonly string[]) {
  if (!raw) return undefined;
  const [id, direction] = raw.split(".");
  return id && sortIds.includes(id)
    ? [{ id, desc: direction === "desc" }]
    : undefined;
}

function serializeSorting(sorting: SortingState) {
  const [first] = sorting;
  return first ? `${first.id}${first.desc ? ".desc" : ""}` : "";
}

/** A positive integer from the URL, or undefined. */
function parsePositiveInt(raw: string | null) {
  const n = Number(raw);
  return Number.isInteger(n) && n > 0 ? n : undefined;
}

/**
 * Replaces the query string in place: no navigation, no server round-trip.
 * Arrays become repeated params (`?zone=CDU&zone=FCC`), so values may
 * contain any character.
 */
function writeParams(patch: ParamPatch) {
  const params = new URLSearchParams(window.location.search);
  for (const [key, value] of Object.entries(patch)) {
    params.delete(key);
    if (typeof value === "string") params.set(key, value);
    else value?.forEach((v) => params.append(key, v));
  }
  const query = params.toString();
  window.history.replaceState(
    null,
    "",
    `${window.location.pathname}${query ? `?${query}` : ""}`,
  );
}

/**
 * Controlled TanStack table state stored in the URL: search (`q`), column
 * filters, sort and page. Linkable, shareable, and restored on Back. Spread
 * the result into `useTable`. Defaults are left out of the URL, and invalid
 * values (unknown sort column, bad page or size) fall back to them.
 *
 * Next.js keeps `useSearchParams` in sync with `history.replaceState`, so this
 * needs no React state of its own.
 */
export function useUrlTableState({
  filterIds,
  sortIds,
  pageSizes,
  defaultSorting,
}: UrlTableStateOptions) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const defaultPageSize = pageSizes[0];

  const globalFilter = searchParams.get("q") ?? "";

  // TanStack compares state slices by identity: a new-but-equal filters or
  // sorting array counts as a change and triggers autoResetPageIndex, which
  // would bounce every page change back to page 1. So each array is rebuilt
  // only when its own URL value changes.
  // JSON, so no filter value can collide with a separator.
  const filtersKey = JSON.stringify(
    filterIds.map((id) => searchParams.getAll(id)),
  );
  const columnFilters = useMemo<ColumnFiltersState>(
    () =>
      (JSON.parse(filtersKey) as string[][]).flatMap((values, i) => {
        const id = filterIds[i];
        return id && values.length ? [{ id, value: values }] : [];
      }),
    [filtersKey, filterIds],
  );
  const rawSort = searchParams.get("sort");
  const sorting = useMemo(
    () => parseSorting(rawSort, sortIds) ?? defaultSorting,
    [rawSort, sortIds, defaultSorting],
  );
  const size = parsePositiveInt(searchParams.get("size"));
  const pagination: PaginationState = {
    // Upper bound depends on the row count; the table clamps it.
    pageIndex: (parsePositiveInt(searchParams.get("page")) ?? 1) - 1,
    pageSize: size && pageSizes.includes(size) ? size : defaultPageSize,
  };
  const defaultSort = serializeSorting(defaultSorting);

  return {
    state: { globalFilter, columnFilters, sorting, pagination },
    /**
     * Sends a page beyond the result (stale link, `?page=9`) back to page 1.
     * Call from an effect once the page count is known. Goes through the
     * router: on first load, a `history.replaceState` from this effect was
     * not picked up by `useSearchParams` (observed), while the router is.
     */
    resetOutOfRangePage: (pageCount: number) => {
      if (pagination.pageIndex === 0 || pagination.pageIndex < pageCount) {
        return;
      }
      const params = new URLSearchParams(searchParams.toString());
      params.delete("page");
      const query = params.toString();
      router.replace(`${pathname}${query ? `?${query}` : ""}`, {
        scroll: false,
      });
    },
    onGlobalFilterChange: (updater: Updater<string>) => {
      const next = functionalUpdate(updater, globalFilter);
      writeParams({ q: next.trim() ? next : null });
    },
    onColumnFiltersChange: (updater: Updater<ColumnFiltersState>) => {
      const next = functionalUpdate(updater, columnFilters);
      writeParams(
        Object.fromEntries(
          filterIds.map((id) => {
            const values = next.find((f) => f.id === id)?.value;
            return [id, Array.isArray(values) ? values.map(String) : null];
          }),
        ),
      );
    },
    onSortingChange: (updater: Updater<SortingState>) => {
      const next = serializeSorting(functionalUpdate(updater, sorting));
      writeParams({ sort: next === defaultSort ? null : next });
    },
    onPaginationChange: (updater: Updater<PaginationState>) => {
      const next = functionalUpdate(updater, pagination);
      writeParams({
        page: next.pageIndex > 0 ? String(next.pageIndex + 1) : null,
        size: next.pageSize === defaultPageSize ? null : String(next.pageSize),
      });
    },
  };
}
