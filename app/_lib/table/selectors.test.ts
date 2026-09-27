import { describe, expect, it, vi } from "vitest";

import { selectFacetFilters, type FacetFilterConfig } from "./facet-filters";
import { selectPagination } from "./pagination";
import { selectSortHeader } from "./sort-header";

/** Minimal column stub: facet counts plus a filter value. */
function column(counts: Record<string, number>, filterValue?: string[]) {
  return {
    getFacetedUniqueValues: () => new Map(Object.entries(counts)),
    getFilterValue: () => filterValue,
    setFilterValue: vi.fn(),
  };
}

function table(columns: Record<string, ReturnType<typeof column>>) {
  return {
    getColumn: (id: string) => columns[id],
    resetColumnFilters: vi.fn(),
  };
}

describe("selectFacetFilters", () => {
  const configs: FacetFilterConfig[] = [
    { id: "zone", title: "Zone" },
    {
      id: "status",
      title: "Status",
      options: [
        { value: "online", label: "Online" },
        { value: "offline", label: "Offline" },
      ],
    },
    { id: "check", title: "Failed check", hidden: true },
  ];

  it("keeps a selected value listed even when it has no matches", () => {
    // CDU selected, but other filters leave it with no matching rows.
    const t = table({
      zone: column({ CTL: 6 }, ["CDU"]),
      status: column({ online: 3 }),
      check: column({}),
    });
    const zone = selectFacetFilters(t, configs).filters.find(
      (f) => f.id === "zone",
    );
    expect(zone?.options.map((o) => o.value)).toEqual(["CDU", "CTL"]);
  });

  it("keeps fixed options in their given order", () => {
    const t = table({
      zone: column({}),
      status: column({ offline: 2, online: 5 }),
      check: column({}),
    });
    const status = selectFacetFilters(t, configs).filters.find(
      (f) => f.id === "status",
    );
    expect(status?.options.map((o) => o.value)).toEqual(["online", "offline"]);
  });

  it("gives hidden filters a chip but no toolbar button", () => {
    const t = table({
      zone: column({}),
      status: column({}, ["offline"]),
      check: column({ "4.2": 17 }, ["4.2"]),
    });
    const { filters, active } = selectFacetFilters(t, configs);
    expect(filters.map((f) => f.id)).toEqual(["zone", "status"]);
    expect(active.map((f) => f.chipLabel)).toEqual([
      "Status: Offline",
      "Failed check: 4.2",
    ]);
  });

  it("attaches icons to data-derived options via iconFor", () => {
    const Icon = () => null;
    const withIcons: FacetFilterConfig[] = [
      {
        id: "zone",
        title: "Zone",
        iconFor: (v) => (v === "CDU" ? Icon : undefined),
      },
    ];
    const t = table({ zone: column({ CDU: 1, CTL: 2 }) });
    const [zone] = selectFacetFilters(t, withIcons).filters;
    expect(zone?.options).toEqual([
      { value: "CDU", label: "CDU", icon: Icon },
      { value: "CTL", label: "CTL", icon: undefined },
    ]);
  });

  it("clears a filter by setting undefined, never an empty array", () => {
    const zone = column({ CDU: 1 }, ["CDU"]);
    const t = table({ zone, status: column({}), check: column({}) });
    selectFacetFilters(t, configs)
      .filters.find((f) => f.id === "zone")
      ?.onChange([]);
    expect(zone.setFilterValue).toHaveBeenCalledWith(undefined);
  });
});

describe("selectPagination", () => {
  it("passes the page state and wires the handlers", () => {
    const t = {
      state: { pagination: { pageIndex: 1, pageSize: 20 } },
      getRowCount: () => 29,
      setPageIndex: vi.fn(),
      setPageSize: vi.fn(),
    };
    const p = selectPagination(t, [20, 50, 100]);
    expect(p).toMatchObject({ pageIndex: 1, pageSize: 20, rowCount: 29 });
    p.onPageChange(0);
    p.onPageSizeChange(50);
    expect(t.setPageIndex).toHaveBeenCalledWith(0);
    expect(t.setPageSize).toHaveBeenCalledWith(50);
  });
});

describe("selectSortHeader", () => {
  it("maps the sort direction to aria-sort", () => {
    const header = (sorted: false | "asc" | "desc") => ({
      column: {
        getIsSorted: () => sorted,
        getToggleSortingHandler: () => undefined,
      },
    });
    expect(selectSortHeader(header("asc")).ariaSort).toBe("ascending");
    expect(selectSortHeader(header("desc")).ariaSort).toBe("descending");
    expect(selectSortHeader(header(false)).ariaSort).toBeUndefined();
  });
});
