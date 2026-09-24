import { createCn } from "cn/config";

/*
 * Class merger that knows the custom type scale in tokens.json. Without this,
 * `text-body-sm` / `text-label` are read as colours and dropped when merged
 * with e.g. `text-muted-foreground`.
 */
export const cn = createCn({
  extend: { classGroups: { "font-size": [{ text: ["body-sm", "label"] }] } },
});
