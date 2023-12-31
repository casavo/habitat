import { createTheme } from "@vanilla-extract/css";

import { mq } from "./mediaqueries";
import tokens from "./tokens.json";

type Fn = (v: number, k: string, i: number) => string;

// Quick and dirty map utility for objects
const objectMap = (obj: object, fn: Fn) =>
  Object.fromEntries(Object.entries(obj).map(([k, v], i) => [k, fn(v, k, i)]));

const colors = tokens.foundations.colors;
const spacing = objectMap(
  tokens.foundations.spacing,
  (v: number): string => `${v}px`
);

export const [HabitatTheme, vars] = createTheme({
  colors,
  mq,
  spacing,
});
