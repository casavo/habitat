/* eslint-disable sort-keys-fix/sort-keys-fix */
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../../utils/theme.css";
import { keyframes, style } from "@vanilla-extract/css";

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
    gap: 8,
    justifyContent: "center",
    padding: "12px 16px",
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
        backgroundColor: vars.colors.neutral[100],
        color: vars.colors.neutral[0],
        fill: vars.colors.neutral[0],
        border: "none",
        ":hover": {
          backgroundColor: vars.colors.neutral[60],
        },
        ":active": {
          backgroundColor: vars.colors.neutral[80],
        },
        ":disabled": {
          backgroundColor: vars.colors.neutral[10],
          color: vars.colors.neutral[60],
          fill: vars.colors.neutral[60],
        },
      },
    },
    {
      variants: {
        theme: "light",
        variant: "primary",
      },
      style: {
        backgroundColor: vars.colors.neutral[0],
        color: vars.colors.neutral[100],
        fill: vars.colors.neutral[100],
        border: "none",
        ":hover": {
          backgroundColor: vars.colors.neutral[10],
        },
        ":active": {
          backgroundColor: vars.colors.neutral[20],
        },
        ":disabled": {
          backgroundColor: vars.colors.neutral[10],
          color: vars.colors.neutral[60],
          fill: vars.colors.neutral[60],
        },
      },
    },
    {
      variants: {
        theme: "dark",
        variant: "secondary",
      },
      style: {
        backgroundColor: vars.colors.neutral[0],
        color: vars.colors.neutral[100],
        fill: vars.colors.neutral[100],
        border: `1px solid ${vars.colors.neutral[100]}`,
        ":hover": {
          backgroundColor: vars.colors.neutral[100],
          color: vars.colors.neutral[0],
          fill: vars.colors.neutral[0],
        },
        ":active": {
          color: vars.colors.neutral[0],
          fill: vars.colors.neutral[0],
          backgroundColor: vars.colors.neutral[80],
        },
        ":disabled": {
          color: vars.colors.neutral[60],
          fill: vars.colors.neutral[60],
          backgroundColor: vars.colors.neutral[0],
          border: `1px solid ${vars.colors.neutral[60]}`,
        },
      },
    },
    {
      variants: {
        theme: "light",
        variant: "secondary",
      },
      style: {
        backgroundColor: vars.colors.neutral[100],
        color: vars.colors.neutral[0],
        fill: vars.colors.neutral[0],
        border: `1px solid ${vars.colors.neutral[0]}`,
        ":hover": {
          backgroundColor: vars.colors.neutral[0],
          color: vars.colors.neutral[100],
          fill: vars.colors.neutral[100],
        },
        ":active": {
          backgroundColor: vars.colors.neutral[10],
          color: vars.colors.neutral[100],
          fill: vars.colors.neutral[100],
        },
        ":disabled": {
          color: vars.colors.neutral[60],
          fill: vars.colors.neutral[60],
          backgroundColor: vars.colors.neutral[100],
          border: `1px solid ${vars.colors.neutral[60]}`,
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
        color: vars.colors.neutral[100],
        fill: vars.colors.neutral[100],
        ":hover": {
          backgroundColor: vars.colors.neutral[100],
          color: vars.colors.neutral[0],
          fill: vars.colors.neutral[0],
        },
        ":active": {
          backgroundColor: vars.colors.neutral[80],
          color: vars.colors.neutral[0],
          fill: vars.colors.neutral[0],
        },
        ":disabled": {
          color: vars.colors.neutral[60],
          fill: vars.colors.neutral[60],
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
        color: vars.colors.neutral[0],
        fill: vars.colors.neutral[0],
        ":hover": {
          backgroundColor: vars.colors.neutral[0],
          color: vars.colors.neutral[100],
          fill: vars.colors.neutral[100],
        },
        ":active": {
          backgroundColor: vars.colors.neutral[10],
          color: vars.colors.neutral[100],
          fill: vars.colors.neutral[100],
        },
        ":disabled": {
          color: vars.colors.neutral[60],
          fill: vars.colors.neutral[60],
          backgroundColor: "transparent",
        },
      },
    },
  ],
});
