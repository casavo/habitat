import tokens from "./tokens.json";

const _space = tokens.foundations.space;

// Base spacing unit in pixels
const BASE: number = 8;

// The spacing values that we want to generate
const values: Array<number> = Object.keys(_space).map(Number);

// Get the type of the elements in the values array
type SpacingKeys = (typeof values)[number];

type Spacing = {
  [K in SpacingKeys]: string;
};

export const space: Spacing = values.reduce((acc: Spacing, value) => {
  acc[value] = `${BASE * (value / 100)}px`;
  return acc;
}, {});
