import "server-only";

import { SITE } from "@/app/assignment/assets";

/** The site the dataset describes (name, description, timezone). */
export async function getSite() {
  return SITE;
}
