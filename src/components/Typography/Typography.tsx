import React from "react";

import {
  BodyStyle,
  CaptionStyle,
  DescriptionStyle,
  HeadingsStyle,
} from "./Typography.css";

type BaseProps = {
  children?: React.ReactElement | string;
  color?: string;
};

type TextProps = BaseProps & {
  strong?: boolean;
  underline?: boolean;
};

type BodyProps = TextProps & {
  size?: "s" | "m" | "l";
};

export const Display = ({ children }: BaseProps) => (
  <h1 className={HeadingsStyle({ element: "display" })}>{children}</h1>
);

export const H1 = ({ children }: BaseProps) => (
  <h1 className={HeadingsStyle({ element: "h1" })}>{children}</h1>
);

export const H2 = ({ children }: BaseProps) => (
  <h2 className={HeadingsStyle({ element: "h2" })}>{children}</h2>
);

export const H3 = ({ children }: BaseProps) => (
  <h3 className={HeadingsStyle({ element: "h3" })}>{children}</h3>
);

export const H4 = ({ children }: BaseProps) => (
  <h4 className={HeadingsStyle({ element: "h4" })}>{children}</h4>
);

export const Body = ({
  children,
  size = "m",
  strong = false,
  underline = false,
}: BodyProps) => (
  <p className={BodyStyle({ size, strong, underline })}>{children}</p>
);

export const Description = ({
  children,
  strong = false,
  underline = false,
}: TextProps) => (
  <legend className={DescriptionStyle({ strong, underline })}>
    {children}
  </legend>
);

export const Caption = ({
  children,
  strong = false,
  underline = false,
}: TextProps) => (
  <figcaption className={CaptionStyle({ strong, underline })}>
    {children}
  </figcaption>
);
