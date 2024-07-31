import { createTheme, createThemeContract } from "@vanilla-extract/css";

import { mq } from "./mediaqueries";
import { corners } from "./corners";
import { space } from "./spacing";
import { colors } from "./colors";

type ThemeJsonValue = string | { [key: string]: ThemeJsonValue };

type ThemeJsonObject = Record<string, ThemeJsonValue>;

type NullifiyJsonObject<T> = {
  [K in keyof T]: T[K] extends ThemeJsonObject
    ? NullifiyJsonObject<T[K]>
    : null;
};

type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

const nullifyThemeLeaves = <T extends ThemeJsonObject>(
  themeValues: T
): NullifiyJsonObject<T> => {
  return Object.entries(themeValues).reduce<DeepPartial<NullifiyJsonObject<T>>>(
    (acc, [key, value]) => {
      if (value === null || typeof value !== "object") {
        return { ...acc, [key]: null };
      }

      return { ...acc, [key]: nullifyThemeLeaves(value) };
    },
    {}
  ) as NullifiyJsonObject<T>;
};

export const defaultThemeValues = {
  colors,
  corners,
  mq,
  space,
};

const contractSkeleton = nullifyThemeLeaves(defaultThemeValues);
export const themeContract = createThemeContract(contractSkeleton);

export const HabitatTheme = createTheme(themeContract, defaultThemeValues);
