// Base spacing unit in pixels
const BASE: number = 8;

// The spacing values that we want to generate
const values: Array<number> = [
  0, 25, 50, 75, 100, 125, 150, 200, 300, 400, 600, 800, 1000, 1800,
];

// Get the type of the elements in the values array
type SpacingKeys = (typeof values)[number];

type Spacing = {
  [K in SpacingKeys]: string;
};

export const space: Spacing = values.reduce((acc: Spacing, value) => {
  acc[value] = `${BASE * (value / 100)}px`;
  return acc;
}, {});
