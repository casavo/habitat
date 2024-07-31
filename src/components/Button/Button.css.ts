/* eslint-disable sort-keys-fix/sort-keys-fix */
import { recipe } from "@vanilla-extract/recipes";
import { themeContract } from "../../utils/theme.css";
import { keyframes, style } from "@vanilla-extract/css";

const black = themeContract.colors.buttons.light.background.default;
const white = themeContract.colors.buttons.dark.background.default;

const background = themeContract.colors.buttons.dark.background.disabled;
const activeDark =
  themeContract.colors.buttons.dark.background["active, pressed"];
const disabled = themeContract.colors.buttons.dark.text.disabled;
const activeLight =
  themeContract.colors.buttons.light.background["active, pressed"];

const rotate = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

// or interpolate as a shorthand:
export const infiniteRotation = style({
  animation: `${rotate} 0.6s ease-out infinite`,
});

export const ButtonContainer = recipe({
  base: {
    alignItems: "center",
    alignSelf: "stretch",
    borderRadius: themeContract.corners[50],
    display: "inline-flex",
    gap: themeContract.space[100],
    justifyContent: "center",
    padding: `${themeContract.space[150]} ${themeContract.space[200]}`,
    cursor: "pointer",
    ":disabled": {
      cursor: "not-allowed",
    },
    ":focus-visible": {
      outline: "none",
    },
  },
  variants: {
    theme: {
      dark: {},
      light: {},
    },
    variant: {
      primary: {},
      secondary: {},
      tertiary: {},
    },
    size: {
      small: {
        height: 40,
      },
      medium: {
        height: 48,
      },
      large: {
        height: 54,
      },
    },
    iconLayout: {
      sx: {
        flexDirection: "row",
      },
      dx: {
        flexDirection: "row-reverse",
      },
    },
  },
  compoundVariants: [
    {
      variants: {
        theme: "dark",
        variant: "primary",
      },
      style: {
        backgroundColor: black,
        color: white,
        fill: white,
        border: "none",
        ":hover": {
          backgroundColor: disabled,
        },
        ":active": {
          backgroundColor: activeLight,
        },
        ":disabled": {
          backgroundColor: background,
          color: disabled,
          fill: disabled,
        },
      },
    },
    {
      variants: {
        theme: "light",
        variant: "primary",
      },
      style: {
        backgroundColor: white,
        color: black,
        fill: black,
        border: "none",
        ":hover": {
          backgroundColor: background,
        },
        ":active": {
          backgroundColor: activeDark,
        },
        ":disabled": {
          backgroundColor: background,
          color: disabled,
          fill: disabled,
        },
      },
    },
    {
      variants: {
        theme: "dark",
        variant: "secondary",
      },
      style: {
        backgroundColor: white,
        color: black,
        fill: black,
        border: `1px solid ${black}`,
        ":hover": {
          backgroundColor: black,
          color: white,
          fill: white,
        },
        ":active": {
          color: white,
          fill: white,
          backgroundColor: activeLight,
        },
        ":disabled": {
          color: disabled,
          fill: disabled,
          backgroundColor: white,
          border: `1px solid ${disabled}`,
        },
      },
    },
    {
      variants: {
        theme: "light",
        variant: "secondary",
      },
      style: {
        backgroundColor: black,
        color: white,
        fill: white,
        border: `1px solid ${white}`,
        ":hover": {
          backgroundColor: white,
          color: black,
          fill: black,
        },
        ":active": {
          backgroundColor: background,
          color: black,
          fill: black,
        },
        ":disabled": {
          color: disabled,
          fill: disabled,
          backgroundColor: black,
          border: `1px solid ${disabled}`,
        },
      },
    },
    {
      variants: {
        theme: "dark",
        variant: "tertiary",
      },
      style: {
        backgroundColor: "transparent",
        color: black,
        fill: black,
        ":hover": {
          backgroundColor: black,
          color: white,
          fill: white,
        },
        ":active": {
          backgroundColor: activeLight,
          color: white,
          fill: white,
        },
        ":disabled": {
          color: disabled,
          fill: disabled,
          backgroundColor: "transparent",
        },
      },
    },
    {
      variants: {
        theme: "light",
        variant: "tertiary",
      },
      style: {
        backgroundColor: "transparent",
        color: white,
        fill: white,
        ":hover": {
          backgroundColor: white,
          color: black,
          fill: black,
        },
        ":active": {
          backgroundColor: background,
          color: black,
          fill: black,
        },
        ":disabled": {
          color: disabled,
          fill: disabled,
          backgroundColor: "transparent",
        },
      },
    },
  ],
});
