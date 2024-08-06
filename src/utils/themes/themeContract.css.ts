import { createThemeContract } from "@vanilla-extract/css";

import { colors } from "../colors";
import { corners } from "../corners";
import { mq } from "../mediaqueries";
import { space } from "../spacing";

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

export const defaultThemeValues = {
  colors,
  corners,
  mq,
  space,
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

const contractSkeleton = nullifyThemeLeaves(defaultThemeValues);

export const themeContract = createThemeContract(contractSkeleton);
