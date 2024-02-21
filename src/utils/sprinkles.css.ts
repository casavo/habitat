import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";

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

export const sprinkles = createSprinkles(margin, padding);

// It's a good idea to export the Sprinkles type too
export type Sprinkles = Parameters<typeof sprinkles>[0];
