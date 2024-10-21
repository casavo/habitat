/* eslint-disable @typescript-eslint/no-unused-vars */
import tokens from "./tokens.json";
import { RemoveLeadingZeroFromList } from "./typeUtils.ts";

const _space = tokens.foundations.space;

// Get the type of the elements in the values array
type RawSpacingKeys = keyof typeof _space;

type SpacingKeys = RemoveLeadingZeroFromList<RawSpacingKeys>;

const values = [...Object.values(_space)].map(String);

// TODO: I would like this to be a type that is a union of all the values in the _space object
type SpacingValues = (typeof values)[number];

type Spacing = {
  [K in SpacingKeys]: SpacingValues;
};

export const space: Spacing = Object.entries(_space).reduce(
  (acc: Spacing, [key, value]) => {
    acc[key as SpacingKeys] = `${value}px`;
    return acc;
  },
  {} as Spacing
);
