import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { CSSProperties } from "@vanilla-extract/css";

// import { mq } from "./mediaqueries";
// import tokens from "./tokens.json";
import { space } from "./spacing";

const createObj = (cssProperty: string) => {
  const spacingKeys = Object.keys(space);

  return spacingKeys.reduce((acc, value) => {
    return {
      ...acc,
      [value]: {
        [cssProperty]: space[parseInt(value)],
      },
    };
  }, {});
};

const createDisplayObj = (cssProperty: keyof CSSProperties) => {
  const displayValues = [
    "none",
    "block",
    "flex",
    "inline",
    "inline-block",
    "grid",
  ]; // Add more display values as needed

  return displayValues.reduce((acc, value) => {
    return {
      ...acc,
      [value.replace("display-", "")]: {
        [cssProperty]: value,
      },
    };
  }, {});
};

const display = defineProperties({
  properties: { d: createDisplayObj("display") },
});

const margin = defineProperties({
  properties: {
    mb: createObj("marginBottom"),
    ml: createObj("marginLeft"),
    mr: createObj("marginRight"),
    mt: createObj("marginTop"),
  },
});

const padding = defineProperties({
  properties: {
    pb: createObj("paddingBottom"),
    pl: createObj("paddingLeft"),
    pr: createObj("paddingRight"),
    pt: createObj("paddingTop"),
  },
});

const gaps = defineProperties({
  properties: {
    gap: createObj("gap"),
    "gap-x": createObj("columnGap"),
    "gap-y": createObj("rowGap"),
  },
});

export const sprinkles = createSprinkles(margin, padding, display, gaps);

export type Sprinkles = Parameters<typeof sprinkles>[0];
