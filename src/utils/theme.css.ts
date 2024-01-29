import { createTheme } from "@vanilla-extract/css";

import { mq } from "./mediaqueries";
import tokens from "./tokens.json";
import { space } from "./spacing";

const colors = tokens.foundations.colors;

export const [HabitatTheme, vars] = createTheme({
  colors,
  mq,
  space,
});
