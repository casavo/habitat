import { recipe } from "@vanilla-extract/recipes";
import { mq } from "../../utils/mediaqueries";
import { fontFace, globalStyle, style } from "@vanilla-extract/css";

const Bagoss = fontFace({
  src: 'url("https://cdn-base-ui.casavo.com/fonts/BagossCondensed-Light.woff2")',
});

const Inter = "Inter, -apple-system, BlinkMacSystemFont, sans-serif";

const whiteSpace = "pre-line";

globalStyle("a", {
  // TODO: change this to a color token when --greyscale-600-black will be available
  color: "#1D1D1B",
});

export const HeadingsStyle = recipe({
  base: {
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
        fontFamily: Bagoss,
        fontSize: 40,
      },
      h2: {
        "@media": {
          [mq.desktop]: { fontSize: 32 },
        },
        fontFamily: Bagoss,
        fontSize: 28,
      },
      h3: {
        "@media": {
          [mq.desktop]: { fontSize: 28 },
        },
        fontFamily: Inter,
        fontSize: 24,
        fontWeight: 600,
      },
      h4: {
        "@media": {
          [mq.desktop]: { fontSize: 24 },
        },
        fontFamily: Inter,
        fontSize: 20,
        fontWeight: 600,
      },
    },
  },
});

// shared styles for non heading elements
const base = style({
  fontFamily: Inter,
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
