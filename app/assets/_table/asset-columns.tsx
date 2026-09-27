import {
  columnFacetingFeature,
  columnFilteringFeature,
  createColumnHelper,
  createFacetedRowModel,
  createFacetedUniqueValues,
  createFilteredRowModel,
  createPaginatedRowModel,
  createSortedRowModel,
  columnVisibilityFeature,
  filterFn_arrHas,
  filterFn_arrIncludesSome,
  globalFilteringFeature,
  rowPaginationFeature,
  rowSortingFeature,
  sortFn_alphanumeric,
  tableFeatures,
  type FilterFn,
  type SortFn,
} from "@tanstack/react-table";

import {
  CRITICALITY_LEVELS,
  CriticalityMeter,
  criticalityLabel,
} from "@/app/_components/criticality-meter";
import {
  StatusIndicator,
  statusLabel,
} from "@/app/_components/status-indicator";
import type { GlossaryTerm } from "@/app/_lib/glossary";
import type { FacetFilterConfig } from "@/app/_lib/table/facet-filters";

import type { AssetRow } from "@/app/_lib/asset-row";

import { AssetNameLink } from "../_components/asset-name-link";

// Module scope on purpose: TanStack needs stable `features` and `columns`.

export const assetTableFeatures = tableFeatures({
  columnFilteringFeature,
  globalFilteringFeature,
  filteredRowModel: createFilteredRowModel(),
  columnFacetingFeature,
  facetedRowModel: createFacetedRowModel(),
  facetedUniqueValues: createFacetedUniqueValues(),
  rowSortingFeature,
  sortedRowModel: createSortedRowModel(),
  rowPaginationFeature,
  paginatedRowModel: createPaginatedRowModel(),
  columnVisibilityFeature,
  filterFns: {
    arrHas: filterFn_arrHas,
    arrIncludesSome: filterFn_arrIncludesSome,
  },
  sortFns: { alphanumeric: sortFn_alphanumeric },
});

type Features = typeof assetTableFeatures;

/** Filters on derived categories ("not scored", "has KEV") rather than raw values. */
function bucketFilter(bucketsOf: (row: AssetRow) => string[]) {
  const filterFn: FilterFn<Features, AssetRow> = (
    row,
    _id,
    selected: string[],
  ) => bucketsOf(row.original).some((bucket) => selected.includes(bucket));
  filterFn.autoRemove = (value) => !Array.isArray(value) || value.length === 0;
  return { getUniqueValues: bucketsOf, filterFn };
}

/** "any" for every asset with a CVE, plus "kev" when one is KEV-listed. */
function vulnerabilityBuckets(row: AssetRow) {
  if (row.vulnCount === 0) return [];
  if (row.kevCount > 0) return ["any", "kev"];
  return ["any"];
}

const byCriticality: SortFn<Features, AssetRow> = (a, b, id) =>
  CRITICALITY_LEVELS.indexOf(a.getValue(id)) -
  CRITICALITY_LEVELS.indexOf(b.getValue(id));

const muted = <span className="text-muted-foreground">—</span>;
const helper = createColumnHelper<Features, AssetRow>();

export const assetColumns = helper.columns([
  helper.accessor("name", {
    header: "Asset",
    sortFn: "alphanumeric",
    cell: ({ row }) => (
      <AssetNameLink assetId={row.original.assetId} name={row.original.name} />
    ),
  }),
  helper.accessor("type", { header: "Type", filterFn: "arrHas" }),
  helper.accessor("zone", {
    header: "Zone",
    filterFn: "arrHas",
    cell: ({ row }) => (
      <span title={row.original.zoneName}>{row.original.zone}</span>
    ),
  }),
  helper.accessor("level", {
    header: "Level",
    filterFn: "arrHas",
    sortFn: "alphanumeric",
    cell: ({ getValue }) => <span className="font-mono">{getValue()}</span>,
  }),
  helper.accessor("ip", {
    header: "IP",
    enableColumnFilter: false,
    sortFn: "alphanumeric",
    cell: ({ row }) => (
      <span className="font-mono text-muted-foreground">
        {row.original.ip}
        {row.original.extraInterfaces > 0 &&
          ` +${row.original.extraInterfaces}`}
      </span>
    ),
  }),
  helper.accessor("status", {
    header: "Status",
    filterFn: "arrHas",
    cell: ({ getValue }) => <StatusIndicator status={getValue()} />,
  }),
  helper.accessor("criticality", {
    header: "Criticality",
    // Bucket, so unrated assets are filterable too ("not-rated").
    ...bucketFilter((row) => [row.criticality ?? "not-rated"]),
    sortFn: byCriticality,
    sortUndefined: "last",
    cell: ({ getValue }) => <CriticalityMeter level={getValue()} />,
  }),
  helper.accessor("score", {
    id: "resilience",
    header: "Score",
    sortUndefined: "last",
    ...bucketFilter((row) => [
      row.score === undefined ? "not-scored" : "scored",
    ]),
    cell: ({ getValue }) => {
      const score = getValue();
      return score === undefined ? (
        <span className="text-muted-foreground">Not scored</span>
      ) : (
        <span className="font-mono">{score}</span>
      );
    },
  }),
  helper.accessor("vulnCount", {
    id: "vulnerabilities",
    header: "Vulnerabilities",
    ...bucketFilter(vulnerabilityBuckets),
    cell: ({ row }) => (
      <span className="font-mono">
        {row.original.vulnCount}
        {row.original.kevCount > 0 && (
          <span className="text-kev">
            <span className="text-muted-foreground"> · </span>
            {row.original.kevCount} KEV
          </span>
        )}
      </span>
    ),
  }),
  helper.accessor("lastSeen", {
    header: "Last seen",
    enableColumnFilter: false,
    sortUndefined: "last",
    cell: ({ row }) =>
      row.original.lastSeen ? (
        <time
          dateTime={row.original.lastSeen}
          className="text-muted-foreground"
        >
          {row.original.lastSeenLabel}
        </time>
      ) : (
        muted
      ),
  }),
  // Hidden (see HIDDEN_COLUMNS): only filters, via the dashboard's
  // `?check=4.2` links to the assets that failed a check.
  helper.accessor("failedCheckIds", {
    id: "check",
    header: "Failed checks",
    filterFn: "arrIncludesSome",
    getUniqueValues: (row) => row.failedCheckIds,
    enableSorting: false,
  }),
]);

/** Filters shown in the toolbar; ids double as URL keys (`?zone=CDU`). */
export const ASSET_FILTERS: readonly FacetFilterConfig[] = [
  { id: "zone", title: "Zone" },
  { id: "level", title: "Level" },
  { id: "type", title: "Type" },
  {
    id: "status",
    title: "Status",
    options: (
      ["online", "offline", "maintenance", "never-reported"] as const
    ).map((value) => ({ value, label: statusLabel(value) })),
  },
  {
    id: "criticality",
    title: "Criticality",
    options: [
      ...(["high", "medium", "low"] as const).map((value) => ({
        value,
        label: criticalityLabel(value),
      })),
      { value: "not-rated", label: criticalityLabel() },
    ],
  },
  {
    id: "resilience",
    title: "Resilience",
    options: [
      { value: "scored", label: "Scored" },
      { value: "not-scored", label: "Not scored" },
    ],
  },
  { id: "check", title: "Failed check", hidden: true },
  {
    id: "vulnerabilities",
    title: "Vulnerabilities",
    options: [
      { value: "any", label: "Has any" },
      { value: "kev", label: "Has KEV" },
    ],
  },
];

export const ASSET_FILTER_IDS = ASSET_FILTERS.map((f) => f.id);

/** Columns that exist for filtering only and are never rendered. */
export const HIDDEN_COLUMNS = { check: false } as const;

/** Column headers that get an ⓘ, and the glossary term each explains. */
export const ASSET_COLUMN_HELP: Partial<Record<string, GlossaryTerm>> = {
  level: "purdueLevel",
  status: "status",
  resilience: "resilienceScore",
  vulnerabilities: "kev",
};

/** Every column id, in order; all are sortable (`?sort=resilience.desc`). */
export const ASSET_COLUMN_IDS = [
  "name",
  "type",
  "zone",
  "level",
  "ip",
  "status",
  "criticality",
  "resilience",
  "vulnerabilities",
  "lastSeen",
] as const;
