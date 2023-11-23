import type { CheckboxProps } from "react-aria-components";
import { Checkbox as RACheckbox } from "react-aria-components";
import { checkbox, wrapper } from "./Checkbox.css";
import { Body, Caption } from "../Typography";

type Props = CheckboxProps & {
  checked?: boolean;
  children?: React.ReactNode;
  disabled?: boolean;
  error?: boolean;
  message?: string;
  value?: string;
  variant?: "neutral" | "b2b" | "b2c";
};

export const Checkbox = ({
  checked,
  children,
  disabled,
  error,
  message,
  value,
  variant,
}: Props) => {
  return (
    <RACheckbox
      isDisabled={disabled}
      isSelected={checked}
      className={wrapper}
      value={value}
    >
      <div className={checkbox({ checked, disabled, variant })}>
        {checked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M4.35982 7.39202L2.87769 8.73317L6.5114 12.7572L13.5542 5.70712L12.1414 4.29291L6.58447 9.85565L4.35982 7.39202Z"
              fill="white"
            />
          </svg>
        )}
      </div>
      <Body>{children}</Body>
      {error && (
        <div>
          <Caption>{message || "error message"}</Caption>
        </div>
      )}
    </RACheckbox>
  );
};
