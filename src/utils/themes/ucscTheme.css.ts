import { createTheme } from "@vanilla-extract/css";
import { defaultThemeValues, themeContract } from "./themeContract.css";

// const ucscPalette = {
//   W: "#FFFFFF",
//   k1: "#F5F5F5",
//   k2: "#E5E5E5",
//   k7: "#666666",
//   k10: "#262626",
//   t1: "#006375",
//   t2: "#007A91",
//   t3: "#BFEBF3",
//   t4: "#E7F8FB",
// };

const ucscThemeValues = {
  ...defaultThemeValues,
};
export const UcscHabitatTheme = createTheme(themeContract, ucscThemeValues);
