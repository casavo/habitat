import { HabitatTokens } from "./createHabitatTheme";

export const extractColors = (tokens: HabitatTokens) => ({
  background: tokens.foundations.background,
  brand: tokens.foundations.brand,
  buttons: tokens.buttons,
  foreground: tokens.foundations.foreground,
  root: tokens.foundations.root,
});
