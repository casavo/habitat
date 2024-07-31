/* eslint-disable sort-keys-fix/sort-keys-fix */
import { recipe } from "@vanilla-extract/recipes";
import { themeContract } from "../../utils/theme.css";

export const BadgeContainer = recipe({
  base: {
    alignItems: "center",
    borderRadius: themeContract.corners[300],
    display: "inline-flex",
    gap: themeContract.space[100],
    justifyContent: "center",
    padding: `${themeContract.space[100]} ${themeContract.space[200]}`,
  },
  variants: {
    theme: {
      dark: {
        backgroundColor: themeContract.colors.root.darkgreen[700],
        color: themeContract.colors.root.neutral[0],
        fill: themeContract.colors.root.neutral[0],
      },
      light: {
        backgroundColor: themeContract.colors.root.offwhite[100],
        color: themeContract.colors.root.neutral[600],
        fill: themeContract.colors.root.neutral[600],
      },
    },
    status: {
      error: {
        backgroundColor: themeContract.colors.root.red[200],
        color: themeContract.colors.root.red[600],
      },
      success: {
        backgroundColor: themeContract.colors.root.green[200],
        color: themeContract.colors.root.green[600],
      },
      warning: {
        backgroundColor: themeContract.colors.root.yellow[200],
        color: themeContract.colors.root.yellow[600],
      },
    },
  },
});
