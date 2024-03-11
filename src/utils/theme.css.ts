import { createTheme } from "@vanilla-extract/css";

import { mq } from "./mediaqueries";
import { corners } from "./corners";
import { space } from "./spacing";
import { colors } from "./colors";

export const [HabitatTheme, vars] = createTheme({
  colors,
  corners,
  mq,
  space,
});

console.log(vars);
