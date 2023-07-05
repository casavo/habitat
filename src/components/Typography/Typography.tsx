import React from "react";

import { BodyStyle, HeadingsStyle } from "./Typography.css";

type BaseProps = {
  color?: string;
  children?: React.ReactElement | string;
};

type TextProps = BaseProps & {
  strong?: boolean;
  underline?: boolean;
};

type BodyProps = TextProps & {
  size?: "m" | "l";
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
  underline,
}: BodyProps) => (
  <p className={BodyStyle({ strong, underline, size })}>{children}</p>
);

export const Description = ({ children }: TextProps) => <p>{children}</p>;

export const Caption = ({ children }: TextProps) => <p>{children}</p>;

export const Small = ({ children }: TextProps) => <small>{children}</small>;
