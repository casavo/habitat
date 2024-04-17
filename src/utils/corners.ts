import tokens from "./tokens.json";
import {RemoveLeadingZeroFromList} from "./typeUtils.ts";

const _corner = tokens.foundations.corner;

// Get the type of the elements in the values array
type RawCornerKeys = keyof (typeof _corner);

type CornerKeys = RemoveLeadingZeroFromList<RawCornerKeys>

type Corners = {
  [K in CornerKeys]: string;
};

export const  corners: Corners = Object.entries(_corner).reduce((acc: Corners, [key,value]) => {
  acc[key as CornerKeys] = `${value}px`;
  return acc;
}, {} as Corners)
