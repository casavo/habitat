import { recipe } from "@vanilla-extract/recipes";
import { mq } from "../../utils/mediaqueries";

const whiteSpace = "pre-line";

export const HeadingsStyle = recipe({
  base: {
    fontFamily: "Bagoss Condensed",
    fontSize: 32,
    fontWeight: 300,
    lineHeight: 1.2,
    whiteSpace,
  },
  variants: {
    element: {
      display: {
        "@media": {
          [mq.desktop]: { fontSize: 52 },
        },
        fontSize: 40,
      },
      h1: {
        "@media": {
          [mq.desktop]: { fontSize: 40 },
        },
        fontSize: 32,
      },
      h2: {
        "@media": {
          [mq.desktop]: { fontSize: 32 },
        },
        fontSize: 28,
      },
      h3: {
        "@media": {
          [mq.desktop]: { fontSize: 28 },
        },
        fontSize: 24,
        fontWeight: 600,
      },
      h4: {
        "@media": {
          [mq.desktop]: { fontSize: 24 },
        },
        fontSize: 20,
        fontWeight: 600,
      },
    },
  },
});

export const BodyStyle = recipe({
  base: {
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
    fontWeight: 400,
    lineHeight: 1.5,
    textDecoration: "none",
    whiteSpace,
  },
  variants: {
    size: {
      l: {
        "@media": {
          [mq.desktop]: { fontSize: 20 },
        },
        fontSize: 18,
      },
      m: { fontSize: 16 },
    },
    strong: {
      true: { fontWeight: 600 },
    },
    underline: {
      true: { textDecoration: "underline" },
    },
  },
});
