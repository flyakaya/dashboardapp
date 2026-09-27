# Indurex: OT asset inventory and resilience index

## Run it

Needs Node ≥ 22.12. Run `npm install`, then `npm run dev` (http://localhost:3000). `npm run check` runs typecheck, lint, format and tests.

## What I built

- **Inventory** (`/assets`): one search box (name, IP, MAC, vendor, CVE…), filters with live counts, sorting and pagination. The filters are kept in the URL, so views can be shared, the dashboard links into them, and "Back to inventory" restores them.
- **Asset detail** (`/assets/[id]`): vulnerabilities, most severe first, each with its fix advice and a link to the other affected assets; and security-control results, lowest score first, with the failed checks listed.
- **Resilience index** (`/`, option 3a): the site score, a plain average of the 48 scored assets shown with its coverage (48 of 80); the 18 CIS controls, weakest first. Each failing check links to the assets that failed it.

**Left out on purpose:**

- the vulnerabilities and controls pages, auth, and the overview dashboard;
- on the detail page: connections, PLC config and disks;
- charts, trends and score bands (the data has no history, and bands would be invented thresholds);
- control weights: the data gives no formula for them.

## Decisions I'm proud of

1. **No invented numbers.** Missing data is labelled, never guessed: "Not scored" is not 0. My one interpretation: an asset with no `lastSeen` is shown as **Never reported** rather than "offline".
2. **Clear boundaries.** All data is read on the server in `app/_data` and never shipped raw to the browser. Components only display what a hook or server function gives them, and every link is built in one place (`app/_lib/routes.ts`).

## With more time

Move search, filters and paging to a server API, with end-to-end tests. The code is already shaped for it: the data functions are async and the table state is already in the URL.

_Stack: Next.js 16, React 19, TanStack Table v9, Tailwind v4, and a small shadcn-based UI library in `ui/` (with Storybook)._
