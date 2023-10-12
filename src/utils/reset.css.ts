import { globalStyle } from "@vanilla-extract/css";

/**
 * Built on top of modern-normalize
 * https://github.com/sindresorhus/modern-normalize/blob/main/modern-normalize.css
 * and quickly ported with https://transform.tools/css-to-js
 */

globalStyle("*, ::before, ::after", {
  boxSizing: "border-box",
  borderWidth: 0,
  borderStyle: "solid",
});

globalStyle("html", {
  fontFamily:
    "system-ui,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji'",
  lineHeight: 1.15,
  WebkitTextSizeAdjust: "100%",
  MozTabSize: 4,
  tabSize: 4,
});

globalStyle("body", {
  margin: 0,
});

globalStyle("hr", {
  height: 0,
  color: "inherit",
});

globalStyle("abbr[title]", {
  textDecoration: "underline dotted",
});

globalStyle("b, strong", {
  fontWeight: "bolder",
});

globalStyle("code, kbd, samp, pre", {
  fontFamily:
    "ui-monospace,SFMono-Regular,Consolas,'Liberation Mono',Menlo,monospace",
  fontSize: "1em",
});

globalStyle("small", {
  fontSize: "80%",
});

globalStyle("sub, sup", {
  fontSize: "75%",
  lineHeight: 0,
  position: "relative",
  verticalAlign: "baseline",
});

globalStyle("sub", {
  bottom: "-0.25em",
});

globalStyle("sup", {
  top: "-0.5em",
});

globalStyle("table", {
  textIndent: 0,
  borderColor: "inherit",
});

globalStyle("button, input, optgroup, select, textarea", {
  fontFamily: "inherit",
  fontSize: "100%",
  lineHeight: 1.15,
  margin: 0,
});

globalStyle("button, select", {
  textTransform: "none",
});

globalStyle("button, [type='button'], [type='reset'], [type='submit']", {
  WebkitAppearance: "button",
});

globalStyle("::-moz-focus-inner", {
  borderStyle: "none",
  padding: 0,
});

globalStyle(":-moz-focusring", {
  outline: "1px dotted ButtonText",
});

globalStyle(":-moz-ui-invalid", {
  boxShadow: "none",
});

globalStyle("legend", {
  padding: 0,
});

globalStyle("progress", {
  verticalAlign: "baseline",
});

globalStyle("::-webkit-inner-spin-button, ::-webkit-outer-spin-button", {
  height: "auto",
});

globalStyle("[type='search']", {
  WebkitAppearance: "textfield",
  outlineOffset: "-2px",
});

globalStyle("::-webkit-search-decoration", {
  WebkitAppearance: "none",
});

globalStyle("::-webkit-file-upload-button", {
  WebkitAppearance: "button",
  font: "inherit",
});

globalStyle("summary", {
  display: "list-item",
});

/**
 * this is basically Tailwind's Preflight
 * https://tailwindcss.com/docs/preflight
 */

globalStyle("blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre", {
  margin: 0,
});

globalStyle("h1, h2, h3, h4, h5, h6", {
  fontSize: "inherit",
  fontWeight: "inherit",
});

globalStyle("ol, ul", {
  listStyle: "none",
  margin: 0,
  padding: 0,
});

globalStyle("img, svg, video, canvas, audio, iframe, embed, object", {
  display: "block",
  verticalAlign: "middle",
});

globalStyle("img, video", {
  maxWidth: "100%",
  height: "auto",
});
