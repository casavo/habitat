import { recipe } from "@vanilla-extract/recipes";
import { mq } from "../../utils/mediaqueries";
import { space } from "../../utils/spacing";
import { fontFace, globalStyle, style } from "@vanilla-extract/css";

const Bagoss = fontFace({
  src: 'url("https://cdn-base-ui.casavo.com/fonts/BagossCondensed-Light.woff2")',
});

const Inter = "Inter, -apple-system, BlinkMacSystemFont, sans-serif";

const whiteSpace = "pre-line";

const noMargin = {
  true: { marginBottom: 0 },
};

globalStyle("a", {
  // TODO: change this to a color token when --greyscale-600-black will be available
  color: "#1D1D1B",
});

export const HeadingsStyle = recipe({
  base: {
    fontStyle: "normal",
    fontWeight: 300,
    lineHeight: 1.2,
    whiteSpace,
  },
  variants: {
    display: {
      true: {
        "@media": {
          [mq.desktop]: { fontSize: "56px !important" },
        },
        fontFamily: Bagoss,
        fontSize: "40px !important",
        marginBottom: `${space[600]} !important`,
      },
    },
    element: {
      h1: {
        "@media": {
          [mq.desktop]: { fontSize: 48 },
        },
        fontFamily: Bagoss,
        fontSize: 36,
        marginBottom: space[400],
      },
      h2: {
        "@media": {
          [mq.desktop]: { fontSize: 40 },
        },
        fontFamily: Bagoss,
        fontSize: 32,
        marginBottom: space[300],
      },
      h3: {
        "@media": {
          [mq.desktop]: { fontSize: 28 },
        },
        fontFamily: Inter,
        fontSize: 24,
        fontWeight: 400,
        lineHeight: 1.5,
        marginBottom: space[300],
      },
      h4: {
        "@media": {
          [mq.desktop]: { fontSize: 24 },
        },
        fontFamily: Inter,
        fontSize: 20,
        fontWeight: 400,
        lineHeight: 1.5,
        marginBottom: space[300],
      },
      h5: {
        "@media": {
          [mq.desktop]: { fontSize: 20 },
        },
        fontFamily: Inter,
        fontSize: 16,
        fontWeight: 400,
        lineHeight: 1.5,
        marginBottom: space[200],
      },
      h6: {
        fontFamily: Inter,
        fontSize: 16,
        fontWeight: 400,
        lineHeight: 1.5,
        marginBottom: space[200],
      },
    },
    noMargin,
  },
});

// shared styles for non heading elements
const base = style({
  fontFamily: Inter,
  fontWeight: 400,
  lineHeight: 1.5,
  marginBottom: space[200],
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
    noMargin,
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

export const InlineStyle = recipe({
  variants: {
    italic: {
      true: { fontStyle: "italic" },
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
