import tokens from "./tokens.json";

const _corner = tokens.foundations.corner;

// Get the type of the elements in the values array
type CornerKeys = keyof (typeof _corner);

type Corners = {
  [K in CornerKeys]: string;
};

export const  corners: Corners = Object.entries(_corner).reduce((acc: Corners, [key,value]) => {
  acc[key as CornerKeys] = `${value}px`;
  return acc;
}, {} as Corners)
