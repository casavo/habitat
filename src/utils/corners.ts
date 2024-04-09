import { HabitatTokens } from "./createHabitatTheme";

type Corners = {
  [K: number]: string;
};

export const extractCorners = (tokens: HabitatTokens): Corners => {
  const keys = Object.keys(tokens.foundations.corner).map(Number);
  const values = Object.values(tokens.foundations.corner);

  return keys.reduce<Corners>((acc, value, index) => {
    acc[value] = `${values[index]}px`;
    return acc;
  }, {});
};
