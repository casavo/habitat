import { recipe } from "@vanilla-extract/recipes";
import { mq } from "../../utils/mediaqueries";
import { fontFace, style } from "@vanilla-extract/css";

const Bagoss = fontFace({
  src: 'url("https://cdn-base-ui.casavo.com/fonts/BagossCondensed-Light.woff2")',
});

const whiteSpace = "pre-line";

export const HeadingsStyle = recipe({
  base: {
    fontFamily: Bagoss,
    fontSize: 32,
    fontStyle: "normal",
    fontWeight: 300,
    lineHeight: 1.2,
    whiteSpace,
  },
  variants: {
    element: {
      h1: {
        "@media": {
          [mq.desktop]: { fontSize: 52 },
        },
        fontSize: 40,
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

// shared styles for non heading elements
const base = style({
  fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
  fontWeight: 400,
  lineHeight: 1.5,
  textDecoration: "none",
  whiteSpace,
});

const strong = {
  true: { fontWeight: 600 },
};

const underline = {
  true: { textDecoration: "underline" },
};

export const BodyStyle = recipe({
  base,
  variants: {
    size: {
      l: {
        "@media": {
          [mq.desktop]: { fontSize: 20 },
        },
        fontSize: 18,
      },
      m: { fontSize: 16 },
      s: { fontSize: 11 },
    },
    strong,
    underline,
  },
});

export const DescriptionStyle = recipe({
  base: [
    base,
    {
      fontSize: 14,
    },
  ],
  variants: {
    strong,
    underline,
  },
});

export const CaptionStyle = recipe({
  base: [
    base,
    {
      fontSize: 12,
    },
  ],
  variants: {
    strong,
    underline,
  },
});
