import { recipe } from "@vanilla-extract/recipes";

const whiteSpace = "pre-line";

const shared = {
  strong: {
    true: { fontWeight: 600 },
  },
  underline: {
    true: { textDecoration: "underline" },
  },
};

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
      display: { fontSize: 40 },
      h1: { fontSize: 32 },
      h2: { fontSize: 28 },
      h3: { fontSize: 24 },
      h4: { fontSize: 20 },
    },
  },
});

export const BodyStyle = recipe({
  base: {
    fontWeight: 400,
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
    lineHeight: 1.5,
    textDecoration: "none",
    whiteSpace,
  },
  variants: {
    ...shared,
    size: {
      m: { fontSize: 16 },
      l: { fontSize: 18 },
    },
  },
});
