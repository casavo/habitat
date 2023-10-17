import { Button as ButtonAria } from "react-aria-components";
import type { ButtonProps } from "react-aria-components";
import { ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./Button.css";

type Props = {
  children: React.ReactNode;
  "data-testid"?: string;
  disabled: boolean;
  icon?: React.ReactNode;
  iconLayout?: "sx" | "dx";
  loading: boolean;
  theme?: "light" | "dark";
  type?: ButtonHTMLAttributes<object>["type"];
  variant?: "primary" | "secondary" | "tertiary";
} & ButtonProps;

export const Button = ({
  children,
  loading,
  variant = "primary",
  theme = "dark",
  icon,
  iconLayout = "sx",
  ...props
}: Props) => {
  return (
    <ButtonAria
      {...props}
      isDisabled={props.disabled}
      className={ButtonContainer({ iconLayout, theme, variant })}
    >
      {icon && icon}
      {loading ? "loading" : children}
    </ButtonAria>
  );
};
