import React from "react";

import { themeContract } from "../../utils/themes";

import { BodyStyle, HeadingsStyle, InlineStyle } from "./Typography.css";

type NestedKeyOf<ObjectType extends object> = {
  [Key in keyof ObjectType & string]: ObjectType[Key] extends object
    ? // @ts-ignore TODO: we need to re-evaluate this after the new color tokens will be in place
      `${Key}.${NestedKeyOf<ObjectType[Key]>}`
    : `${Key}`;
}[keyof ObjectType & string];

type Colors = NestedKeyOf<typeof themeContract.colors>;

type BaseProps = {
  children?: React.ReactNode | string;
  color?: Colors;
  html?: string;
  noMargin?: boolean;
};

type TextProps = BaseProps & {
  italic?: boolean;
  strong?: boolean;
  underline?: boolean;
};

type BodyProps = TextProps & {
  size?: "l" | "m" | "s" | "xs";
};

type Heading1 = BaseProps & {
  display?: boolean;
};

/**
 * It returns an object with the attributes to be passed to the component
 */
const conditionalAttrs = (html?: string, color?: Colors) => {
  const attrs: { [key: string]: object } = {};
  html ? (attrs.dangerouslySetInnerHTML = { __html: html }) : null;
  color ? (attrs.style = { color: getColor(color) }) : null;
  return attrs;
};

/**
 * Starting from a string like "neutral.0" which is the path within the Vanilla Extract color
 * variables, it returns the corresponding color as CSS variable value
 */
const getColor = (color?: Colors) => {
  const fallback = themeContract.colors.root.neutral[600];
  const paths = color?.split(".");
  const result =
    paths &&
    paths.reduce((acc, path) => acc[path as never], themeContract.colors);
  return result || fallback;
};

export const H1 = ({ children, color, display, html, noMargin }: Heading1) => (
  <h1
    className={HeadingsStyle({ display, element: "h1", noMargin })}
    {...conditionalAttrs(html, color)}
  >
    {!html ? children : null}
  </h1>
);

export const H2 = ({ children, color, html, noMargin }: BaseProps) => (
  <h2
    className={HeadingsStyle({ element: "h2", noMargin })}
    {...conditionalAttrs(html, color)}
  >
    {!html ? children : null}
  </h2>
);

export const H3 = ({ children, color, html, noMargin }: BaseProps) => (
  <h3
    className={HeadingsStyle({ element: "h3", noMargin })}
    {...conditionalAttrs(html, color)}
  >
    {!html ? children : null}
  </h3>
);

export const H4 = ({ children, color, html, noMargin }: BaseProps) => (
  <h4
    className={HeadingsStyle({ element: "h4", noMargin })}
    {...conditionalAttrs(html, color)}
  >
    {!html ? children : null}
  </h4>
);

export const H5 = ({ children, color, html, noMargin }: BaseProps) => (
  <h5
    className={HeadingsStyle({ element: "h5", noMargin })}
    {...conditionalAttrs(html, color)}
  >
    {!html ? children : null}
  </h5>
);

export const H6 = ({ children, color, html, noMargin }: BaseProps) => (
  <h6
    className={HeadingsStyle({ element: "h6", noMargin })}
    {...conditionalAttrs(html, color)}
  >
    {!html ? children : null}
  </h6>
);

export const Body = ({
  children,
  color,
  html,
  size = "m",
  strong = false,
  underline = false,
  noMargin = false,
}: BodyProps) => (
  <p
    className={BodyStyle({ noMargin, size, strong, underline })}
    {...conditionalAttrs(html, color)}
  >
    {!html ? children : null}
  </p>
);

export const Inline = ({
  children,
  color,
  italic = false,
  html,
  strong = false,
  underline = false,
}: Omit<TextProps, "noMargin" | "size">) => (
  <span
    className={InlineStyle({ italic, strong, underline })}
    {...conditionalAttrs(html, color)}
  >
    {!html ? children : null}
  </span>
);
