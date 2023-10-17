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
  },
  variants: {
    theme: {
      dark: {
        backgroundColor: vars.colors.neutral[100],
        color: vars.colors.neutral[0],
        fill: vars.colors.neutral[0],
      },
      light: {
        backgroundColor: vars.colors.neutral[0],
        color: vars.colors.neutral[100],
        fill: vars.colors.neutral[100],
      },
    },
    variant: {
      primary: {},
      secondary: {},
      tertiary: {},
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
});
