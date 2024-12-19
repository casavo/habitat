/* eslint-disable sort-keys-fix/sort-keys-fix */
import { keyframes } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../../utils/theme.css";

const sizes: Record<"large" | "medium" | "small", number> = {
  large: 28,
  medium: 24,
  small: 20,
};

const rotate = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

export const Container = recipe({
  base: {
    position: "relative",
    display: "inline-block",
  },
  variants: {
    size: {
      small: {
        height: 20,
        width: 20,
        position: "relative",
      },
      medium: {
        height: 24,
        width: 24,
        position: "relative",
      },
      large: {
        height: 28,
        width: 28,
        position: "relative",
      },
    },
  },
});

export const Circle = recipe({
  base: {
    border: `1px solid`,
    borderRadius: "100%",
    boxSizing: "border-box",
    display: "block",
    position: "absolute",
  },

  variants: {
    theme: {
      dark: {},
      light: {},
    },
    variant: {
      primary: {},
      secondary: {},
      tertiary: {},
    },
    size: {
      small: {
        height: sizes["small"] - 1,
        width: sizes["small"] - 1,
        lineHeight: sizes["small"],
        left: `calc(50% - ${(sizes["small"] - 1) / 2}px)`,
        top: `calc(50% - ${(sizes["small"] - 1) / 2}px)`,
      },
      medium: {
        height: sizes["medium"] - 1,
        width: sizes["medium"] - 1,
        lineHeight: sizes["medium"] - 1,
        left: `calc(50% - ${(sizes["medium"] - 1) / 2}px)`,
        top: `calc(50% - ${(sizes["medium"] - 1) / 2}px)`,
      },
      large: {
        height: sizes["large"] - 1,
        width: sizes["large"] - 1,
        lineHeight: sizes["large"],
        left: `calc(50% - ${(sizes["large"] - 1) / 2}px)`,
        top: `calc(50% - ${(sizes["large"] - 1) / 2}px)`,
      },
    },
  },
  compoundVariants: [
    {
      variants: {
        theme: "dark",
        variant: "primary",
      },
      style: {
        borderColor: vars.colors.root.neutral[0],
      },
    },
    {
      variants: {
        theme: "dark",
        variant: "secondary",
      },
      style: {
        borderColor: vars.colors.root.neutral[600],
      },
    },
    {
      variants: {
        theme: "light",
        variant: "primary",
      },
      style: {
        borderColor: vars.colors.root.neutral[600],
      },
    },
    {
      variants: {
        theme: "light",
        variant: "secondary",
      },
      style: {
        borderColor: vars.colors.root.neutral[0],
      },
    },
  ],
});

export const Spin = recipe({
  base: {
    animation: `${rotate} 0.6s ease-out infinite`,
    border: `2px solid`,
    borderColor: "transparent",
    borderRadius: "100%",
    borderTop: `2px solid`,
    boxSizing: "border-box",
    display: "block",
    position: "absolute",
  },

  variants: {
    variant: {
      primary: {},
      secondary: {},
      tertiary: {},
    },
    theme: {
      dark: {},
      light: {},
    },
    size: {
      small: {
        height: sizes["small"] - 1,
        width: sizes["small"] - 1,
        lineHeight: sizes["small"],
        left: `calc(50% - ${(sizes["small"] - 1) / 2}px)`,
        top: `calc(50% - ${(sizes["small"] - 1) / 2}px)`,
      },
      medium: {
        height: sizes["medium"] - 1,
        width: sizes["medium"] - 1,
        lineHeight: sizes["medium"],
        left: `calc(50% - ${(sizes["medium"] - 1) / 2}px)`,
        top: `calc(50% - ${(sizes["medium"] - 1) / 2}px)`,
      },
      large: {
        height: sizes["large"] - 1,
        width: sizes["large"] - 1,
        lineHeight: sizes["large"],
        left: `calc(50% - ${(sizes["large"] - 1) / 2}px)`,
        top: `calc(50% - ${(sizes["large"] - 1) / 2}px)`,
      },
    },
  },
  compoundVariants: [
    {
      variants: {
        theme: "dark",
        variant: "primary",
      },
      style: {
        borderTopColor: vars.colors.root.neutral[0],
      },
    },
    {
      variants: {
        theme: "dark",
        variant: "secondary",
      },
      style: {
        borderTopColor: vars.colors.root.neutral[600],
      },
    },
    {
      variants: {
        theme: "light",
        variant: "primary",
      },
      style: {
        borderTopColor: vars.colors.root.neutral[600],
      },
    },
    {
      variants: {
        theme: "light",
        variant: "secondary",
      },
      style: {
        borderTopColor: vars.colors.root.neutral[0],
      },
    },
  ],
});
