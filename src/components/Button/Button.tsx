import { useButton } from "react-aria";
import { ButtonHTMLAttributes, useRef } from "react";

type Props = {
  children: React.ReactNode;
  "data-testid"?: string;
  type?: ButtonHTMLAttributes<object>["type"];
};

export const Button = (props: Props) => {
  const ref = useRef<HTMLButtonElement>(null);
  const { buttonProps } = useButton(props, ref);
  const { children } = props;

  return (
    <button {...buttonProps} ref={ref}>
      {children}
    </button>
  );
};
