"use client";

import {
  ChevronDown,
  ChevronsUpDown,
  ChevronUp,
  SearchX,
  X,
} from "lucide-react";

import {
  Button,
  SearchInput,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@indurex/ui";

import type { AssetRow } from "@/app/_lib/asset-row";
import type { FacetOption } from "@/app/_lib/table/facet-filters";
import { InfoTip } from "@/app/_components/info-tip";
import { FacetFilter } from "@/app/_components/table/facet-filter";
import { TablePagination } from "@/app/_components/table/table-pagination";

import { useAssetInventory } from "../_hooks/use-asset-inventory";

const SORT_ICON = { asc: ChevronUp, desc: ChevronDown } as const;

/** Renders the inventory view-model; all logic lives in useAssetInventory. */
export function AssetTable({
  rows,
  checkOptions,
}: {
  rows: AssetRow[];
  /** Check titles for the `?check=` chip (server data, not bundled). */
  checkOptions: readonly FacetOption[];
}) {
  const {
    table,
    search,
    counts,
    query,
    filters,
    activeFilters,
    clearFilters,
    pagination,
    sortHeader,
    headerHelp,
    onRowClick,
  } = useAssetInventory(rows, checkOptions);

  return (
    <div className="flex flex-col gap-5">
      <header className="flex items-baseline gap-2.5">
        <h1 className="text-xl font-semibold">Asset inventory</h1>
        <p className="text-sm text-muted-foreground">
          {counts.narrowed
            ? `${counts.matched} of ${counts.total} assets`
            : `${counts.total} assets`}
        </p>
      </header>

      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <SearchInput
            layout="toolbar"
            label="Search assets"
            placeholder="Search name, IP, MAC, vendor, CVE…"
            className="w-full sm:w-80"
            value={search.value}
            onValueChange={search.onChange}
          />
          {filters.map((filter) => (
            <FacetFilter key={filter.id} {...filter} />
          ))}
        </div>

        {activeFilters.length > 0 && (
          <ul aria-label="Active filters" className="flex flex-wrap gap-1.5">
            {activeFilters.map((filter) => (
              <li key={filter.id}>
                <Button
                  variant="secondary"
                  size="xs"
                  iconEnd={<X />}
                  aria-label={`Remove ${filter.title} filter`}
                  onClick={filter.clear}
                >
                  {filter.chipLabel}
                </Button>
              </li>
            ))}
            <li>
              <Button variant="ghost" size="xs" onClick={clearFilters}>
                Clear all
              </Button>
            </li>
          </ul>
        )}
      </div>

      <div>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((group) => (
              <TableRow key={group.id} className="hover:bg-transparent">
                {group.headers.map((header) => {
                  const { sorted, ariaSort, toggle } = sortHeader(header);
                  const SortIcon = sorted ? SORT_ICON[sorted] : ChevronsUpDown;
                  const help = headerHelp(header.column.id);
                  return (
                    <TableHead key={header.id} aria-sort={ariaSort}>
                      {/* The ⓘ sits beside the sort button, never inside it. */}
                      <span className="inline-flex items-center gap-1">
                        <button
                          type="button"
                          onClick={toggle}
                          data-sorted={sorted !== false}
                          className="group/sort -mx-1 inline-flex items-center gap-1 rounded-sm px-1 text-xs font-medium text-muted-foreground hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none data-[sorted=true]:text-foreground"
                        >
                          <table.FlexRender header={header} />
                          <SortIcon
                            aria-hidden
                            className={
                              sorted
                                ? "size-3.5"
                                : "size-3.5 opacity-0 group-hover/sort:opacity-100 group-focus-visible/sort:opacity-100"
                            }
                          />
                        </button>
                        {help && (
                          <InfoTip
                            term={help}
                            label={String(header.column.columnDef.header)}
                          />
                        )}
                      </span>
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                className="cursor-pointer"
                onClick={(event) => onRowClick(event, row)}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    <table.FlexRender cell={cell} />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {counts.matched === 0 && (
          <div className="flex flex-col items-center gap-3 py-12 text-center">
            <SearchX aria-hidden className="size-6 text-muted-foreground" />
            <p className="text-sm font-medium">
              No assets match
              {query && ` “${query}”`}
              {activeFilters.length > 0 && " with the current filters"}
            </p>
            <div className="flex gap-2">
              {query && (
                <Button variant="outline" size="sm" onClick={search.clear}>
                  Clear search
                </Button>
              )}
              {activeFilters.length > 0 && (
                <Button variant="outline" size="sm" onClick={clearFilters}>
                  Clear filters
                </Button>
              )}
            </div>
          </div>
        )}

        <TablePagination {...pagination} noun="assets" />
      </div>
    </div>
  );
}
