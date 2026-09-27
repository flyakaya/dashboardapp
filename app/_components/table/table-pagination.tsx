"use client";

import { useId } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import {
  Button,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@indurex/ui";

type TablePaginationProps = {
  pageIndex: number;
  pageSize: number;
  pageSizes: readonly number[];
  /** Rows after search and filters, before paging. */
  rowCount: number;
  noun: string;
  onPageChange: (pageIndex: number) => void;
  onPageSizeChange: (pageSize: number) => void;
};

/**
 * Range, rows per page and page buttons. Hidden when the result fits the
 * smallest page size; page buttons hide when everything fits on one page,
 * so a larger page size can always be switched back.
 */
export function TablePagination({
  pageIndex,
  pageSize,
  pageSizes,
  rowCount,
  noun,
  onPageChange,
  onPageSizeChange,
}: TablePaginationProps) {
  const labelId = useId();
  if (rowCount <= Math.min(...pageSizes)) return null;

  const pageCount = Math.ceil(rowCount / pageSize);
  const first = pageIndex * pageSize + 1;
  const last = Math.min(first + pageSize - 1, rowCount);

  return (
    <nav
      aria-label="Pagination"
      className="flex flex-wrap items-center justify-between gap-4 py-3 text-sm"
    >
      <p className="text-muted-foreground">
        {first}–{last} of {rowCount} {noun}
      </p>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-muted-foreground" id={labelId}>
            Rows per page
          </span>
          <Select
            value={String(pageSize)}
            onValueChange={(v) => onPageSizeChange(Number(v))}
          >
            <SelectTrigger size="sm" className="w-20" aria-labelledby={labelId}>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {pageSizes.map((size) => (
                <SelectItem key={size} value={String(size)}>
                  {size}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        {pageCount > 1 && (
          <div className="flex items-center gap-1">
            <Button
              variant="outline"
              size="icon-sm"
              aria-label="Previous page"
              disabled={pageIndex === 0}
              onClick={() => onPageChange(pageIndex - 1)}
            >
              <ChevronLeft />
            </Button>
            {Array.from({ length: pageCount }, (_, i) => (
              <Button
                key={i}
                variant={i === pageIndex ? "outline" : "ghost"}
                size="sm"
                className="min-w-8"
                aria-current={i === pageIndex ? "page" : undefined}
                onClick={() => onPageChange(i)}
              >
                {i + 1}
              </Button>
            ))}
            <Button
              variant="outline"
              size="icon-sm"
              aria-label="Next page"
              disabled={pageIndex >= pageCount - 1}
              onClick={() => onPageChange(pageIndex + 1)}
            >
              <ChevronRight />
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
