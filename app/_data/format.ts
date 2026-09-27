import "server-only";

import { SITE } from "@/app/assignment/assets";

// Formatted once on the server so the browser only displays strings (no
// timezone or locale drift). Timestamps use the site's timezone; date-only
// values (stored as UTC midnight) use UTC so the calendar day never shifts.

// Static site config; read directly so formatters can be built at load time.
const { timezone } = SITE;

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
  timeZone: "UTC",
});

/** "26 Jun 2026, 13:34" */
export function formatDateTime(iso: string) {
  return dateTime.format(new Date(iso));
}

/** "11 Oct 2022", for date-only values such as a CVE's publication date. */
export function formatDate(iso: string) {
  return date.format(new Date(iso));
}

const siteDate = new Intl.DateTimeFormat("en-GB", {
  day: "2-digit",
  month: "short",
  year: "numeric",
  timeZone: timezone,
});

/** "20 Jun 2026": the day a timestamp falls on at the site. */
export function formatSiteDate(iso: string) {
  return siteDate.format(new Date(iso));
}
