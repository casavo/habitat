import { ButtonHTMLAttributes } from "react";
import type { ButtonProps } from "react-aria-components";
import { Button as ButtonAria } from "react-aria-components";
import { Body } from "../Typography";
import { ButtonContainer } from "./Button.css";
import { Spinner } from "../Spinner/Spinner";

type Props = {
  children: React.ReactNode;
  "data-testid"?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  iconLayout?: "sx" | "dx";
  loading?: boolean;
  size?: "small" | "medium" | "large";
  theme?: "light" | "dark";
  type?: ButtonHTMLAttributes<object>["type"];
  variant?: "primary" | "secondary" | "tertiary";
} & Omit<ButtonProps, "className">;

export const Button = ({
  children,
  disabled = false,
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
      isDisabled={disabled}
      className={ButtonContainer({ iconLayout, size, theme, variant })}
    >
      {loading && <Spinner size={size} theme={theme} />}
      {!loading && icon ? icon : null}
      {!loading && (size === "small" || size === "medium") ? (
        <Body size="m" strong={true} noMargin={true}>
          {children}
        </Body>
      ) : null}
      {!loading && size === "large" ? (
        <Body size="l" strong={true} noMargin={true}>
          {children}
        </Body>
      ) : null}
    </ButtonAria>
  );
};
