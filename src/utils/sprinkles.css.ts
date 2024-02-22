import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { CSSProperties } from "@vanilla-extract/css";

// import { mq } from "./mediaqueries";
import tokens from "./tokens.json";
import { space } from "./spacing";

const _colors = tokens.foundations.colors;
// @ts-expect-error - TS doesn't like the delete statement
delete _colors.alertcolors;

const flatColors = Object.entries(_colors).reduce((acc, [color, shades]) => {
  return {
    ...acc,
    ...Object.entries(shades).reduce((shadeAcc, [shade, value]) => {
      return {
        ...shadeAcc,
        [`${color}-${shade}`]: value,
      };
    }, {}),
  };
}, {});

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

const createColorObj = (cssProperty: string) => {
  const colorKeys = Object.keys(flatColors);

  return colorKeys.reduce((acc, value) => {
    return {
      ...acc,
      [value]: {
        // @ts-expect-error - TS doesn't like the dynamic key
        [cssProperty]: flatColors[value],
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
    "inline-flex",
    "grid",
  ]; // Add more display values as needed

  return displayValues.reduce((acc, value) => {
    return {
      ...acc,
      [value.replace("display-", "").replace("color", "")]: {
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

const colors = defineProperties({
  properties: {
    bg: createColorObj("backgroundColor"),
    text: createColorObj("color"),
  },
});

export const sprinkles = createSprinkles(
  margin,
  padding,
  display,
  gaps,
  colors
);

export type Sprinkles = Parameters<typeof sprinkles>[0];
