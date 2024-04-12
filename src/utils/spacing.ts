import tokens from "./tokens.json";

const _space = tokens.foundations.space;

// Base spacing unit in pixels
const BASE: number = 8;

// Get the type of the elements in the values array
type SpacingKeys = keyof (typeof _space);

type Spacing = {
  [K in SpacingKeys]: string;
};

export const space:Spacing = Object.entries(_space).reduce((acc: Spacing, [key,value]) => {
  acc[key as SpacingKeys] = `${BASE * (value / 100)}px`;
  return acc;
}, {} as Spacing)

