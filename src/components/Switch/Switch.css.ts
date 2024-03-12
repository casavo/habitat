import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../../utils/theme.css";
import { style } from "@vanilla-extract/css";

export const base = style({
  ":hover": {
    cursor: "pointer",
  },
  alignItems: "center",
  display: "flex",
  fontSize: "1.143rem",
  gap: vars.space[100],
  selectors: {
    "&[data-disabled]:hover": {
      cursor: "default",
    },
  },
});

const indicatorBase = style({
  "::before": {
    background: vars.colors.root.neutral[0],
    borderRadius: "16px",
    content: "",
    display: "block",
    height: "18px",
    margin: vars.space[25],
    transition: "all 200ms",
    width: "18px",
  },
  background: vars.colors.root.neutral[200],
  border: "none",
  // atm missing in vars
  borderRadius: "11px",

  height: "22px",

  selectors: {
    [`${base}[data-selected] &`]: {
      background: vars.colors.root.neutral[600],
      borderColor: vars.colors.root.neutral[600],
    },
    [`${base}[data-selected] &:before`]: {
      background: vars.colors.root.neutral[0],
      transform: "translateX(100%)",
    },
    [`${base}[data-disabled] &`]: {
      background: vars.colors.root.neutral[100],
      borderColor: vars.colors.root.neutral[100],
    },
    [`${base}[data-selected][data-disabled] &`]: {
      background: vars.colors.root.neutral[300],
      borderColor: vars.colors.root.neutral[300],
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
