import { HabitatTokens } from "./createHabitatTheme";

const BASE: number = 8;

type Spacing = {
  [K: number]: string;
};

export const extractSpacing = (tokens: HabitatTokens): Spacing => {
  const values = Object.keys(tokens.foundations.space).map(Number);

  return values.reduce<Spacing>((acc, value) => {
    acc[value] = `${BASE * (value / 100)}px`;
    return acc;
  }, {});
};
