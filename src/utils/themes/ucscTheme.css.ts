import { createTheme } from "@vanilla-extract/css";
import { defaultThemeValues, themeContract } from "./themeContract.css";

const ucscPalette = {
  W: "#FFFFFF",
  k1: "#F5F5F5",
  k2: "#E5E5E5",
  k7: "#666666",
  k10: "#262626",
  t1: "#006375",
  t2: "#007A91",
  t3: "#BFEBF3",
  t4: "#E7F8FB",
};

const ucscThemeValues = {
  ...defaultThemeValues,
  colors: {
    ...defaultThemeValues.colors,
    buttons: {
      dark: {
        background: {
          "active, pressed": ucscPalette.t2,
          default: ucscPalette.t2,
          disabled: ucscPalette.t2,
          hover: ucscPalette.t2,
          "hover-tertiary": ucscPalette.t2,
          inverted: "#737372ff",
          "round-default": "#ffffffff",
          "round-hover": "#f5f5f5ff",
        },
        border: {
          "active, pressed": "#525251ff",
          default: "#ffffffff",
          disabled: "#e8e8e8ff",
          hover: "#e8e8e8ff",
          "hover-tertiary": "#e8e8e8ff",
          "round-default": "#ffffffff",
          "round-hover": "#f5f5f5ff",
        },
        text: {
          disabled: "#737372ff",
          inverted: "#1d1d1bff",
          primary: "#ffffffff",
          round: "#1d1d1bff",
        },
      },
      light: {
        background: {
          "active, pressed": "#525251ff",
          default: "#1d1d1bff",
          disabled: "#e8e8e8ff",
          hover: "#737372ff",
          "hover-tertiary": "#e8e8e8ff",
          inverted: "#ffffffff",
          "round-default": "#e8e8e8ff",
          "round-hover": "#d4d4d3ff",
        },
        border: {
          "active, pressed": "#525251ff",
          default: "#1d1d1bff",
          disabled: "#e8e8e8ff",
          hover: "#737372ff",
          "hover-tertiary": "#e8e8e8ff",
          "round-default": "#ffffffff",
          "round-hover": "#f5f5f5ff",
        },
        text: {
          disabled: "#737372ff",
          inverted: "#ffffffff",
          primary: "#1d1d1bff",
          round: "#1d1d1bff",
        },
      },
    },
  },
};
export const UcscHabitatTheme = createTheme(themeContract, ucscThemeValues);
