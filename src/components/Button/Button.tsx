import { useButton } from "react-aria";
import { ButtonHTMLAttributes, useRef } from "react";

type Props = {
  children: React.ReactNode;
  "data-testid"?: string;
  disabled: boolean;
  loading: boolean;
  type?: ButtonHTMLAttributes<object>["type"];
  variant?: "primary" | "secondary";
};

export const Button = (props: Props) => {
  const ref = useRef<HTMLButtonElement>(null);
  const { buttonProps } = useButton(props, ref);
  const { children } = props;

  return (
    <button {...buttonProps} ref={ref} disabled={props.disabled}>
      {children}
    </button>
  );
};
