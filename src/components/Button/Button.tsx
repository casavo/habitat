import React, { ButtonHTMLAttributes, forwardRef } from "react";
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
  type?: ButtonHTMLAttributes<object>["type"];
  variant?: "primary" | "secondary" | "tertiary";
} & Omit<ButtonProps, "className" | "isDisabled">;

export const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      children,
      disabled = false,
      loading = false,
      variant = "primary",
      icon,
      iconLayout = "sx",
      size = "medium",
      ...props
    },
    ref
  ) => {
    return (
      <ButtonAria
        {...props}
        ref={ref}
        isDisabled={disabled}
        className={ButtonContainer({ iconLayout, size, variant })}
      >
        {loading && <Spinner size={size} theme="dark" />}
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
  }
);

Button.displayName = "Button";
