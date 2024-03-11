import tokens from "./tokens.json";

const keys = Object.keys(tokens.foundations.corner).map(Number);
const values = Object.values(tokens.foundations.corner);

// Get the type of the elements in the values array
type CornerKeys = (typeof keys)[number];

type Corners = {
  [K in CornerKeys]: string;
};

export const corners: Corners = keys.reduce((acc: Corners, value, index) => {
  acc[value] = `${values[index]}px`;
  return acc;
}, {});
