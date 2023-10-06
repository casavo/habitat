/* eslint-disable sort-keys-fix/sort-keys-fix */
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../../utils/theme.css";

export const BadgeContainer = recipe({
  base: {
    alignItems: "center",
    borderRadius: 20,
    display: "inline-flex",
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
    fontSize: 12,
    fontWeight: 400,
    gap: 8,
    justifyContent: "center",
    lineHeight: 1.5,
    padding: "8px 16px",
  },
  variants: {
    theme: {
      dark: {
        backgroundColor: vars.colors.deepgreen[100],
        color: vars.colors.neutral[0],
        fill: vars.colors.neutral[0],
      },
      light: {
        backgroundColor: vars.colors.offwhite[100],
        color: vars.colors.neutral[100],
        fill: vars.colors.neutral[100],
      },
    },
    status: {
      error: {
        backgroundColor: vars.colors.alertcolors.error[40],
        color: vars.colors.neutral[100],
      },
      success: {
        backgroundColor: vars.colors.alertcolors.success[40],
        color: vars.colors.neutral[100],
      },
      warning: {
        backgroundColor: vars.colors.alertcolors.warning[40],
        color: vars.colors.neutral[100],
      },
    },
  },
});
