import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "../../utils/theme.css";
import { recipe } from "@vanilla-extract/recipes";

const size = 16;
const black = vars.colors.neutral[100];
const grey = "#B3B3B2";
const red = vars.colors.alertcolors.error["100"];
const orange = vars.colors.orange["100"];
const green = vars.colors.green["100"];

export const wrapper = style({
  alignItems: "center",
  display: "flex",
  gap: 8,
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

export const message = style({
  color: red,
  margin: 0,
});
