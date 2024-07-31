import { recipe } from "@vanilla-extract/recipes";
import { themeContract } from "../../utils/theme.css";
import { style } from "@vanilla-extract/css";

export const base = style({
  ":hover": {
    cursor: "pointer",
  },
  alignItems: "center",
  display: "flex",
  fontSize: "1.143rem",
  gap: themeContract.space[100],
  selectors: {
    "&[data-disabled]:hover": {
      cursor: "default",
    },
  },
});

const indicatorBase = style({
  "::before": {
    background: themeContract.colors.root.neutral[0],
    borderRadius: "16px",
    content: "",
    display: "block",
    height: "18px",
    margin: themeContract.space[25],
    transition: "all 200ms",
    width: "18px",
  },
  background: themeContract.colors.root.neutral[300],
  border: "none",
  // atm missing in vars
  borderRadius: "11px",

  height: "22px",

  selectors: {
    [`${base}[data-selected] &`]: {
      background: themeContract.colors.brand.primary,
      borderColor: themeContract.colors.brand.primary,
    },
    [`${base}[data-selected] &:before`]: {
      background: themeContract.colors.root.neutral[0],
      transform: "translateX(100%)",
    },
    [`${base}[data-disabled] &`]: {
      background: themeContract.colors.root.neutral[100],
      borderColor: themeContract.colors.root.neutral[100],
    },
    [`${base}[data-selected][data-disabled] &`]: {
      background: themeContract.colors.root.orange[400],
      borderColor: themeContract.colors.root.orange[400],
    },
  },
  transition: "all 300ms",
  width: "40px",
});

export const indicator = recipe({
  base: indicatorBase,
  variants: {
    size: {
      normal: {
        "::before": {
          height: "18px",
          width: "18px",
        },
        height: "22px",
        width: "40px",
      },
      small: {
        "::before": {
          height: "12px",
          width: "12px",
        },
        height: "16px",
        width: "28px",
      },
    },
  },
});
