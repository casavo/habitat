/* eslint-disable sort-keys-fix/sort-keys-fix */
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../../utils/theme.css";

export const BadgeContainer = recipe({
  base: {
    alignItems: "center",
    borderRadius: vars.corners[300],
    display: "inline-flex",
    gap: vars.space[100],
    justifyContent: "center",
    padding: `${vars.space[100]} ${vars.space[200]}`,
  },
  variants: {
    theme: {
      dark: {
        backgroundColor: vars.colors.root.darkgreen[700],
        color: vars.colors.root.neutral[0],
        fill: vars.colors.root.neutral[0],
      },
      light: {
        backgroundColor: vars.colors.root.offwhite[100],
        color: vars.colors.root.neutral[600],
        fill: vars.colors.root.neutral[600],
      },
    },
    status: {
      error: {
        backgroundColor: vars.colors.root.red[200],
        color: vars.colors.root.red[600],
      },
      success: {
        backgroundColor: vars.colors.root.green[200],
        color: vars.colors.root.green[600],
      },
      warning: {
        backgroundColor: vars.colors.root.yellow[200],
        color: vars.colors.root.yellow[600],
      },
    },
  },
});
