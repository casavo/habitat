import { createTheme } from "@vanilla-extract/css";

import { mq } from "./mediaqueries";
import tokens from "./tokens.json";

// Quick and dirty map utility for objects
const objectMap = (obj: Object, fn: Function) =>
  Object.fromEntries(Object.entries(obj).map(([k, v], i) => [k, fn(v, k, i)]));

const colors = tokens.foundations.colors;
const spacing = objectMap(
  tokens.foundations.spacing,
  (v: number): string => `${v}px`
);

export const [HabitatTheme, vars] = createTheme({
  colors,
  spacing,
  mq,
});
