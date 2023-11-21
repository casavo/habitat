import { getColors } from "./colors";

export const argTypes = {
  color: {
    control: "select",
    description: "set a color token from the available ones",
    options: ["", ...getColors()],
  },
  html: {
    control: "text",
    description: "allow to pass HTML directly to the component",
  },
};

export const bodyArgTypes = {
  ...argTypes,
  size: {
    control: { options: ["s", "m", "l"], type: "radio" },
    defaultValue: "m",
    description: "define the font size",
  },
  strong: {
    control: { type: "boolean" },
    defaultValue: false,
    description: "toggle the strong/bold font type",
  },
  underline: {
    control: { type: "boolean" },
    defaultValue: false,
    description: "toggle the underline text decoration",
  },
};
