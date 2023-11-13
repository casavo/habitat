import React from "react";

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

const conditionalHTML = (html?: string) => {
  const attrs: { [key: string]: object } = {};
  html ? (attrs.dangerouslySetInnerHTML = { __html: html }) : null;
  return attrs;
};

export const H1 = ({ children, html }: BaseProps) => (
  <h1 className={HeadingsStyle({ element: "h1" })} {...conditionalHTML(html)}>
    {!html ? children : null}
  </h1>
);

export const H2 = ({ children, html }: BaseProps) => (
  <h2 className={HeadingsStyle({ element: "h2" })} {...conditionalHTML(html)}>
    {!html ? children : null}
  </h2>
);

export const H3 = ({ children, html }: BaseProps) => (
  <h3 className={HeadingsStyle({ element: "h3" })} {...conditionalHTML(html)}>
    {!html ? children : null}
  </h3>
);

export const H4 = ({ children, html }: BaseProps) => (
  <h4 className={HeadingsStyle({ element: "h4" })} {...conditionalHTML(html)}>
    {!html ? children : null}
  </h4>
);

export const Body = ({
  children,
  html,
  size = "m",
  strong = false,
  underline = false,
}: BodyProps) => (
  <p
    className={BodyStyle({ size, strong, underline })}
    {...conditionalHTML(html)}
  >
    {!html ? children : null}
  </p>
);

export const Description = ({
  children,
  html,
  strong = false,
  underline = false,
}: TextProps) => (
  <p
    className={DescriptionStyle({ strong, underline })}
    {...conditionalHTML(html)}
  >
    {!html ? children : null}
  </p>
);

export const Caption = ({
  children,
  html,
  strong = false,
  underline = false,
}: TextProps) => (
  <p className={CaptionStyle({ strong, underline })} {...conditionalHTML(html)}>
    {!html ? children : null}
  </p>
);
