/* eslint-disable sort-keys-fix/sort-keys-fix */
import { recipe } from "@vanilla-extract/recipes";
import { themeContract } from "../../utils/themes";
import { keyframes, style } from "@vanilla-extract/css";

const rotate = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

// or interpolate as a shorthand:
export const infiniteRotation = style({
  animation: `${rotate} 0.6s ease-out infinite`,
});

export const ButtonContainer = recipe({
  base: {
    alignItems: "center",
    alignSelf: "stretch",
    borderRadius: themeContract.corners[50],
    display: "inline-flex",
    gap: themeContract.space[100],
    justifyContent: "center",
    padding: `${themeContract.space[150]} ${themeContract.space[200]}`,
    cursor: "pointer",
    ":disabled": {
      cursor: "not-allowed",
    },
    ":focus-visible": {
      outline: "none",
    },
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: themeContract.colors.buttons.background.default,
        color: themeContract.colors.buttons.text.inverted,
        fill: themeContract.colors.buttons.text.inverted,
        border: `1px solid ${themeContract.colors.buttons.border.default}`,
        ":hover": {
          backgroundColor: themeContract.colors.buttons.background.hover,
          border: `1px solid ${themeContract.colors.buttons.border.hover}`,
        },
        ":active": {
          backgroundColor:
            themeContract.colors.buttons.background["active, pressed"],
          border: `1px solid ${themeContract.colors.buttons.border["active, pressed"]}`,
        },
        ":disabled": {
          backgroundColor: themeContract.colors.buttons.background.disabled,
          border: `1px solid ${themeContract.colors.buttons.border.disabled}`,
          color: themeContract.colors.buttons.text.disabled,
          fill: themeContract.colors.buttons.text.disabled,
        },
      },
      secondary: {
        backgroundColor: "transparent",
        color: themeContract.colors.buttons.text.primary,
        fill: themeContract.colors.buttons.text.primary,
        border: `1px solid ${themeContract.colors.buttons.border.default}`,
        ":hover": {
          backgroundColor: themeContract.colors.buttons.background.default,
          color: themeContract.colors.buttons.text.inverted,
          fill: themeContract.colors.buttons.text.inverted,
        },
        ":active": {
          backgroundColor:
            themeContract.colors.buttons.background["active, pressed"],
          color: themeContract.colors.buttons.text.inverted,
          border: `1px solid ${themeContract.colors.buttons.border["active, pressed"]}`,
        },
        ":disabled": {
          backgroundColor: themeContract.colors.buttons.background.disabled,
          border: `1px solid ${themeContract.colors.buttons.border.disabled}`,
          color: themeContract.colors.buttons.text.disabled,
          fill: themeContract.colors.buttons.text.disabled,
        },
      },
      tertiary: {
        backgroundColor: "transparent",
        border: "none",
        color: themeContract.colors.buttons.text.primary,
        fill: themeContract.colors.buttons.text.primary,
        ":hover": {
          backgroundColor:
            themeContract.colors.buttons.background["hover-tertiary"],
          border: themeContract.colors.buttons.border["hover-tertiary"],
        },
        ":active": {
          backgroundColor:
            themeContract.colors.buttons.background["hover-tertiary"],
          border: `1px solid ${themeContract.colors.buttons.border["active, pressed"]}`,
        },
        ":disabled": {
          color: themeContract.colors.buttons.text.disabled,
          fill: themeContract.colors.buttons.text.disabled,
        },
      },
    },
    size: {
      small: {
        height: 40,
      },
      medium: {
        height: 48,
      },
      large: {
        height: 54,
      },
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
