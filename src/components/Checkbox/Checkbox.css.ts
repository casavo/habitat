import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "../../utils/theme.css";
import { recipe } from "@vanilla-extract/recipes";

const gap = vars.space[100];
const size = vars.space[200];
const checked = vars.colors.root.orange[500];
const grey = vars.colors.root.neutral[300];
const white = vars.colors.root.neutral[100]
const error = vars.colors.root.red[600];

export const wrapper = style({
  alignItems: "center",
  display: "flex",
  gap: `0 ${gap}`,
  transition: "all 200ms",
});

export const checkbox = recipe({
  base: {
    alignItems: "center",
    backgroundColor: vars.colors.root.neutral[0],
    border: `1px solid ${grey}`,
    borderRadius: 4,
    display: "flex",
    flexShrink:0,
    height: size,
    justifyContent: " center",
    transition: "all 200ms",
    width: size,
  },
  compoundVariants: [
    {
      style: {
        backgroundColor: error,
        borderColor: error,
      },
      variants: {
        checked: true,
        error: true,
      },
    },
  ],
  variants: {
    checked: {
      true: {
        backgroundColor: checked,
        borderColor: checked,
      },
    },
    disabled: {
      true: {
        backgroundColor: white,
        borderColor: grey,
      },
    },
    error: {
      true: {
        borderColor: error,
      },
    },
  },
});

globalStyle(`div[data-id="check-icon"] > svg`, {
  fill: "none",
});

globalStyle(`${wrapper}[data-disabled] > p`, {
  color: grey,
});

export const messageStyle = style({
  color: error,
  flexBasis: "100%",
  margin: 0,
  marginLeft: `calc(${size} + ${gap})`,
});
