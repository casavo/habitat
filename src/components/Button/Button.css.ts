/* eslint-disable sort-keys-fix/sort-keys-fix */
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../../utils/theme.css";
import { keyframes, style } from "@vanilla-extract/css";

const black = vars.colors.root.neutral[600];
const white = vars.colors.root.neutral[0];

const grey1 = vars.colors.root.neutral[100];
const grey2 = vars.colors.root.neutral[200];
const grey3 = vars.colors.root.neutral[400];
const grey4 = vars.colors.root.neutral[500];

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
    borderRadius: 4,
    display: "inline-flex",
    gap: vars.space[100],
    justifyContent: "center",
    padding: `${vars.space[150]} ${vars.space[200]}`,
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
          backgroundColor: grey3,
        },
        ":active": {
          backgroundColor: grey4,
        },
        ":disabled": {
          backgroundColor: grey1,
          color: grey3,
          fill: grey3,
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
          backgroundColor: grey1,
        },
        ":active": {
          backgroundColor: grey2,
        },
        ":disabled": {
          backgroundColor: grey1,
          color: grey3,
          fill: grey3,
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
          backgroundColor: grey4,
        },
        ":disabled": {
          color: grey3,
          fill: grey3,
          backgroundColor: white,
          border: `1px solid ${grey3}`,
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
          backgroundColor: grey1,
          color: black,
          fill: black,
        },
        ":disabled": {
          color: grey3,
          fill: grey3,
          backgroundColor: black,
          border: `1px solid ${grey3}`,
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
          backgroundColor: grey4,
          color: white,
          fill: white,
        },
        ":disabled": {
          color: grey3,
          fill: grey3,
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
          backgroundColor: grey1,
          color: black,
          fill: black,
        },
        ":disabled": {
          color: grey3,
          fill: grey3,
          backgroundColor: "transparent",
        },
      },
    },
  ],
});
