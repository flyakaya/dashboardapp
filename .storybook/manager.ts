import { addons } from "storybook/manager-api";

import { darkTheme } from "./theme";

// Dark is the product default, so the Storybook UI is dark too.
addons.setConfig({ theme: darkTheme });
