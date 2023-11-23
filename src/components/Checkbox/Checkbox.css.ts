import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "../../utils/theme.css";
import { recipe } from "@vanilla-extract/recipes";

const gap = 8;
const size = 16;
const black = vars.colors.neutral[100];
const grey = "#B3B3B2";
const red = vars.colors.alertcolors.error["100"];
const orange = vars.colors.orange["100"];
const green = vars.colors.green["100"];

export const wrapper = style({
  alignItems: "center",
  display: "flex",
  flexWrap: "wrap",
  gap: `0 ${gap}px`,
  transition: "all 200ms",
});

export const checkbox = recipe({
  base: {
    alignItems: "center",
    backgroundColor: vars.colors.neutral[0],
    border: `1px solid ${grey}`,
    borderRadius: 4,
    display: "flex",
    height: size,
    justifyContent: " center",
    transition: "all 200ms",
    width: size,
  },
  compoundVariants: [
    {
      style: {
        backgroundColor: orange,
        borderColor: orange,
      },
      variants: {
        checked: true,
        variant: "b2b",
      },
    },
    {
      style: {
        backgroundColor: green,
        borderColor: green,
      },
      variants: {
        checked: true,
        variant: "b2c",
      },
    },
    {
      style: {
        backgroundColor: red,
        borderColor: red,
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
        backgroundColor: black,
        borderColor: black,
      },
    },
    disabled: {
      true: {
        backgroundColor: "#E8E8E8",
        borderColor: grey,
      },
    },
    error: {
      true: {
        borderColor: red,
      },
    },
    variant: {
      b2b: {},
      b2c: {},
      neutral: {},
    },
  },
});

globalStyle(`${checkbox} > svg`, {
  fill: "none",
});

globalStyle(`${wrapper}[data-disabled] > p`, {
  color: grey,
});

export const messageStyle = style({
  color: red,
  flexBasis: "100%",
  margin: 0,
  marginLeft: size + gap,
});
