import { Button as ButtonAria } from "react-aria-components";
import type { ButtonProps } from "react-aria-components";
import { ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./Button.css";
import { Body } from "../Typography";

type Props = {
  children: React.ReactNode;
  "data-testid"?: string;
  disabled: boolean;
  icon?: React.ReactNode;
  iconLayout?: "sx" | "dx";
  loading: boolean;
  size?: "small" | "medium" | "large";
  theme?: "light" | "dark";
  type?: ButtonHTMLAttributes<object>["type"];
  variant?: "primary" | "secondary" | "tertiary";
} & ButtonProps;

export const Button = ({
  children,
  loading = false,
  variant = "primary",
  theme = "dark",
  icon,
  iconLayout = "sx",
  size = "medium",
  ...props
}: Props) => {
  return (
    <ButtonAria
      {...props}
      isDisabled={props.disabled}
      className={ButtonContainer({ iconLayout, size, theme, variant })}
    >
      {icon && icon}
      {loading && "loading"}
      {!loading && (size === "small" || size === "medium") ? (
        <Body size="m" strong={true}>
          {children}
        </Body>
      ) : null}
      {!loading && size === "large" ? (
        <Body size="l" strong={true}>
          {children}
        </Body>
      ) : null}
    </ButtonAria>
  );
};
