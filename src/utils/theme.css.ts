import { createTheme, createThemeContract } from "@vanilla-extract/css";

import { mq as MQ } from "./mediaqueries";
import tokens from "./tokens.json";

// Quick and dirty map utility for objects
const objectMap = (obj: Object, fn: Function) =>
  Object.fromEntries(Object.entries(obj).map(([k, v], i) => [k, fn(v, k, i)]));

const colors = createThemeContract(tokens.foundations.colors);
const spacing = createThemeContract(
  objectMap(tokens.foundations.spacing, (v: number): string => `${v}px`)
);
const mq = createThemeContract(MQ);

export const [HabitatTheme, vars] = createTheme({
  colors,
  spacing,
  mq,
});
