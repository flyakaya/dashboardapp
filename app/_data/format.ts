import "server-only";

import { getSite } from "./site";

// Dates are shown in the site's timezone, formatted once on the server so the
// browser only displays strings (no timezone or locale drift).

const { timezone } = getSite();

const dateTime = new Intl.DateTimeFormat("en-GB", {
  day: "2-digit",
  month: "short",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  timeZone: timezone,
});

const date = new Intl.DateTimeFormat("en-GB", {
  day: "2-digit",
  month: "short",
  year: "numeric",
  timeZone: timezone,
});

/** "26 Jun 2026, 13:34" */
export function formatDateTime(iso: string) {
  return dateTime.format(new Date(iso));
}

/** "20 Jun 2026" */
export function formatDate(iso: string) {
  return date.format(new Date(iso));
}
