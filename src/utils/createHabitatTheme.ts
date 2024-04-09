import { createTheme } from "@vanilla-extract/css";
import { extractColors } from "./colors";
import { extractCorners } from "./corners";
import { extractSpacing } from "./spacing";
import { mq } from "./mediaqueries";

// describes json exported from figma
export interface HabitatTokens {
  buttons: {
    dark: {
      background: {
        "active, pressed": string;
        default: string;
        disabled: string;
        hover: string;
        "hover-tertiary": string;
        inverted: string;
        "round-default": string;
        "round-hover": string;
      };
      border: {
        "active, pressed": string;
        default: string;
        disabled: string;
        hover: string;
        "hover-tertiary": string;
        "round-default": string;
        "round-hover": string;
      };
      text: {
        disabled: string;
        inverted: string;
        primary: string;
        round: string;
      };
    };
    light: {
      background: {
        "active, pressed": string;
        default: string;
        disabled: string;
        hover: string;
        "hover-tertiary": string;
        inverted: string;
        "round-default": string;
        "round-hover": string;
      };
      border: {
        "active, pressed": string;
        default: string;
        disabled: string;
        hover: string;
        "hover-tertiary": string;
        "round-default": string;
        "round-hover": string;
      };
      text: {
        disabled: string;
        inverted: string;
        primary: string;
        round: string;
      };
    };
  };
  foundations: {
    background: {
      default: {
        dark: string;
        light: string;
      };
      primary: {
        dark: string;
        light: string;
      };
      secondary: {
        dark: string;
        light: string;
      };
    };
    brand: {
      accent: string;
      primary: string;
      "primary-light": string;
      secondary: string;
      "secondary-light": string;
    };
    corner: {
      "050": number;
      "100": number;
      "200": number;
      "300": number;
      "400": number;
      "1000": number;
    };
    foreground: {
      border: {
        critical: string;
        default: string;
        disabled: string;
        "hover, active": string;
      };
      critical: {
        default: string;
        light: string;
      };
      success: {
        background: string;
        default: string;
      };
      surface: {
        default: string;
        disabled: string;
        "pressed, active": string;
      };
      text: {
        hover: string;
        inverted: string;
        placeholder: string;
        primary: string;
        secondary: string;
      };
      warning: {
        default: string;
        light: string;
      };
    };
    root: {
      darkgreen: {
        "300": string;
        "400": string;
        "500": string;
        "600": string;
        "700": string;
      };
      glass: {
        "100": string;
      };
      green: {
        "100": string;
        "200": string;
        "300": string;
        "400": string;
        "500": string;
        "600": string;
      };
      neutral: {
        "0": string;
        "50": string;
        "100": string;
        "200": string;
        "300": string;
        "400": string;
        "500": string;
        "600": string;
      };
      offwhite: {
        "100": string;
      };
      orange: {
        "300": string;
        "400": string;
        "500": string;
        "600": string;
        "700": string;
      };
      red: {
        "100": string;
        "200": string;
        "300": string;
        "400": string;
        "500": string;
        "600": string;
      };
      teal: {
        "500": string;
      };
      yellow: {
        "100": string;
        "200": string;
        "300": string;
        "400": string;
        "500": string;
        "600": string;
      };
    };
    space: {
      "0": number;
      "025": number;
      "050": number;
      "075": number;
      "100": number;
      "125": number;
      "150": number;
      "175": number;
      "200": number;
      "225": number;
      "250": number;
      "300": number;
      "400": number;
      "500": number;
      "600": number;
      "800": number;
      "1000": number;
      "1800": number;
    };
  };
}

export const createHabitatTheme = (tokens: HabitatTokens) => {
  return createTheme({
    colors: extractColors(tokens),
    corners: extractCorners(tokens),
    mq,
    space: extractSpacing(tokens),
  });
};
