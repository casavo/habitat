/* eslint-disable sort-keys-fix/sort-keys-fix */
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../../utils/theme.css";

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
        background: vars.colors.neutral[100],
        color: vars.colors.neutral[0],
        fill: vars.colors.neutral[0],
        border: "none",
        ":hover": {
          background: vars.colors.neutral[60],
        },
        ":active": {
          background: vars.colors.neutral[80],
        },
        ":disabled": {
          background: vars.colors.neutral[10],
          color: vars.colors.neutral[60],
          fill: vars.colors.neutral[60],
        },
        ":focus-visible": {
          outline: "none",
        },
      },
    },
    {
      variants: {
        theme: "light",
        variant: "primary",
      },
      style: {
        background: vars.colors.neutral[0],
        color: vars.colors.neutral[100],
        fill: vars.colors.neutral[100],
        border: "none",
        ":hover": {
          background: vars.colors.neutral[10],
        },
        ":active": {
          background: vars.colors.neutral[20],
        },
        ":disabled": {
          background: vars.colors.neutral[20],
          color: vars.colors.neutral[60],
          fill: vars.colors.neutral[60],
        },
        ":focus-visible": {
          outline: "none",
        },
      },
    },
  ],
});
