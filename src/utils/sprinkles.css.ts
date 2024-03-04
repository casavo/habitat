import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { CSSProperties } from "@vanilla-extract/css";

// import { mq } from "./mediaqueries";
import tokens from "./tokens.json";
import { space } from "./spacing";

const _colors = tokens.foundations.colors;

const badge = defineProperties({
  properties: {
    badge: {
      base: {
        alignItems: "center",
        borderRadius: 20,
        display: "inline-flex",
        gap: space[100],
        justifyContent: "center",
        padding: `${space[100]} ${space[200]}`,
      },
      dark: {
        backgroundColor: _colors.deepgreen[100],
        color: _colors.neutral[0],
        fill: _colors.neutral[0],
      },
      error: {
        backgroundColor: _colors.alertcolors.error[40],
        color: _colors.neutral[100],
      },
      light: {
        backgroundColor: _colors.offwhite[100],
        color: _colors.neutral[100],
        fill: _colors.neutral[100],
      },
      success: {
        backgroundColor: _colors.alertcolors.success[40],
        color: _colors.neutral[100],
      },
      warning: {
        backgroundColor: _colors.alertcolors.warning[40],
        color: _colors.neutral[100],
      },
    },
  },
});

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

const button = defineProperties({
  properties: {
    btn: {
      base: {
        ":disabled": {
          cursor: "not-allowed",
        },
        ":focus-visible": {
          outline: "none",
        },
        alignItems: "center",
        alignSelf: "stretch",
        borderRadius: 4,
        cursor: "pointer",
        justifyContent: "center",
      },
      large: {
        height: 54,
      },
      medium: {
        height: 48,
      },
      "primary-dark": {
        ":active": {
          backgroundColor: _colors.neutral[80],
        },
        ":disabled": {
          backgroundColor: _colors.neutral[10],
          color: _colors.neutral[60],
          fill: _colors.neutral[60],
        },
        ":hover": {
          backgroundColor: _colors.neutral[60],
        },
        backgroundColor: _colors.neutral[100],
        border: "none",
        color: _colors.neutral[0],
        fill: _colors.neutral[0],
      },
      "primary-light": {
        ":active": {
          backgroundColor: _colors.neutral[20],
        },
        ":disabled": {
          backgroundColor: _colors.neutral[10],
          color: _colors.neutral[60],
          fill: _colors.neutral[60],
        },
        ":hover": {
          backgroundColor: _colors.neutral[10],
        },
        backgroundColor: _colors.neutral[0],
        border: "none",
        color: _colors.neutral[100],
        fill: _colors.neutral[100],
      },
      "secondary-dark": {
        ":active": {
          backgroundColor: _colors.neutral[20],
          color: _colors.neutral[0],
          fill: _colors.neutral[0],
        },
        ":hover": {
          backgroundColor: _colors.neutral[100],
          color: _colors.neutral[0],
          fill: _colors.neutral[0],
        },
        backgroundColor: _colors.neutral[0],
        border: `1px solid ${_colors.neutral[100]}`,
        color: _colors.neutral[100],
        fill: _colors.neutral[100],
      },
      "secondary-light": {
        ":active": {
          backgroundColor: _colors.neutral[20],
          color: _colors.neutral[0],
          fill: _colors.neutral[0],
        },
        ":hover": {
          backgroundColor: _colors.neutral[100],
          color: _colors.neutral[0],
          fill: _colors.neutral[0],
        },
        backgroundColor: _colors.neutral[100],
        border: `1px solid ${_colors.neutral[100]}`,
        color: _colors.neutral[0],
        fill: _colors.neutral[0],
      },
      small: {
        height: 40,
      },
      "tertiary-dark": {
        ":active": {
          backgroundColor: _colors.neutral[80],
          color: _colors.neutral[0],
          fill: _colors.neutral[0],
        },
        ":disabled": {
          backgroundColor: "transparent",
          color: _colors.neutral[60],
          fill: _colors.neutral[60],
        },
        ":hover": {
          backgroundColor: _colors.neutral[100],
          color: _colors.neutral[0],
          fill: _colors.neutral[0],
        },
        backgroundColor: "transparent",
        color: _colors.neutral[100],
        fill: _colors.neutral[100],
      },
      "tertiary-light": {
        ":active": {
          backgroundColor: _colors.neutral[10],
          color: _colors.neutral[100],
          fill: _colors.neutral[100],
        },
        ":disabled": {
          backgroundColor: "transparent",
          color: _colors.neutral[60],
          fill: _colors.neutral[60],
        },
        ":hover": {
          backgroundColor: _colors.neutral[0],
          color: _colors.neutral[100],
          fill: _colors.neutral[100],
        },
        backgroundColor: "transparent",
        color: _colors.neutral[0],
        fill: _colors.neutral[0],
      },
    },
  },
});

export const sprinkles = createSprinkles(
  margin,
  padding,
  display,
  gaps,
  colors,
  badge,
  button
);

export type Sprinkles = Parameters<typeof sprinkles>[0];
