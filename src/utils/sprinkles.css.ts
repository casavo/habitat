import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";

// import { mq } from "./mediaqueries";
// import tokens from "./tokens.json";
// import { space } from "./spacing";

const space = {
  large: "16px",
  medium: "8px",
  none: 0,
  small: "4px",
  // etc.
};

const responsiveProperties = defineProperties({
  conditions: {
    desktop: { "@media": "screen and (min-width: 1024px)" },
    mobile: {},
    tablet: { "@media": "screen and (min-width: 768px)" },
  },
  defaultCondition: "mobile",
  properties: {
    alignItems: ["stretch", "flex-start", "center", "flex-end"],
    display: ["none", "flex", "block", "inline"],
    flexDirection: ["row", "column"],
    justifyContent: [
      "stretch",
      "flex-start",
      "center",
      "flex-end",
      "space-around",
      "space-between",
    ],
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
    paddingTop: space,
    // etc.
  },
  shorthands: {
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
    placeItems: ["justifyContent", "alignItems"],
  },
});

const colors = {
  "blue-50": "#eff6ff",
  "blue-100": "#dbeafe",
  "blue-200": "#bfdbfe",
  "gray-700": "#374151",
  "gray-800": "#1f2937",
  "gray-900": "#111827",
  // etc.
};

const colorProperties = defineProperties({
  conditions: {
    darkMode: { "@media": "(prefers-color-scheme: dark)" },
    lightMode: {},
  },
  defaultCondition: "lightMode",
  properties: {
    background: colors,
    color: colors,
    // etc.
  },
});

export const sprinkles = createSprinkles(responsiveProperties, colorProperties);

// It's a good idea to export the Sprinkles type too
export type Sprinkles = Parameters<typeof sprinkles>[0];
