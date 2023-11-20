import React from "react";

import { vars } from "../../utils/theme.css";

import {
  BodyStyle,
  CaptionStyle,
  DescriptionStyle,
  HeadingsStyle,
} from "./Typography.css";

type BaseProps = {
  children?: React.ReactNode | string;
  color?: string;
  html?: string;
};

type TextProps = BaseProps & {
  strong?: boolean;
  underline?: boolean;
};

type BodyProps = TextProps & {
  size?: "s" | "m" | "l";
};

/**
 * It returns an object with the attributes to be passed to the component
 */
const conditionalAttrs = (html?: string, color?: string) => {
  const attrs: { [key: string]: object } = {};
  html ? (attrs.dangerouslySetInnerHTML = { __html: html }) : null;
  color ? (attrs.style = { color: getColor(color) }) : null;
  return attrs;
};

/**
 * Starting from a string like "neutral.0" which is the path within the Vanilla Extract color
 * variables, it returns the corresponding color as CSS variable value
 */
const getColor = (color?: string) => {
  const fallback = vars.colors.neutral["0"];
  const paths = color?.split(".");
  const result =
    paths && paths.reduce((acc, path) => acc[path as never], vars.colors);
  return result || fallback;
};

export const H1 = ({ children, color, html }: BaseProps) => (
  <h1
    className={HeadingsStyle({ element: "h1" })}
    {...conditionalAttrs(html, color)}
  >
    {!html ? children : null}
  </h1>
);

export const H2 = ({ children, color, html }: BaseProps) => (
  <h2
    className={HeadingsStyle({ element: "h2" })}
    {...conditionalAttrs(html, color)}
  >
    {!html ? children : null}
  </h2>
);

export const H3 = ({ children, color, html }: BaseProps) => (
  <h3
    className={HeadingsStyle({ element: "h3" })}
    {...conditionalAttrs(html, color)}
  >
    {!html ? children : null}
  </h3>
);

export const H4 = ({ children, color, html }: BaseProps) => (
  <h4
    className={HeadingsStyle({ element: "h4" })}
    {...conditionalAttrs(html, color)}
  >
    {!html ? children : null}
  </h4>
);

export const Body = ({
  children,
  color,
  html,
  size = "m",
  strong = false,
  underline = false,
}: BodyProps) => (
  <p
    className={BodyStyle({ size, strong, underline })}
    {...conditionalAttrs(html, color)}
  >
    {!html ? children : null}
  </p>
);

export const Description = ({
  children,
  color,
  html,
  strong = false,
  underline = false,
}: TextProps) => (
  <p
    className={DescriptionStyle({ strong, underline })}
    {...conditionalAttrs(html, color)}
  >
    {!html ? children : null}
  </p>
);

export const Caption = ({
  children,
  color,
  html,
  strong = false,
  underline = false,
}: TextProps) => (
  <p
    className={CaptionStyle({ strong, underline })}
    {...conditionalAttrs(html, color)}
  >
    {!html ? children : null}
  </p>
);
