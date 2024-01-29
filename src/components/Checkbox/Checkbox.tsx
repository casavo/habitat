import type { CheckboxProps } from "react-aria-components";
import { Checkbox as CheckboxAria } from "react-aria-components";
import { checkbox, messageStyle, wrapper } from "./Checkbox.css";
import { Body, Caption } from "../Typography";

type Props = CheckboxProps & {
  checked?: boolean;
  children?: React.ReactNode;
  disabled?: boolean;
  error?: boolean;
  message?: string;
  onChange?: (args: { checked: boolean; value?: string }) => void;
  value?: string;
  variant?: "neutral" | "b2b" | "b2c";
};

export const Checkbox = ({
  checked,
  children,
  disabled,
  error,
  message,
  onChange,
  value,
  variant,
}: Props) => {
  return (
    <CheckboxAria
      isDisabled={disabled}
      isSelected={checked}
      className={wrapper}
      value={value}
      onChange={(args) => onChange && onChange(args)}
    >
      <div
        data-id="check-icon"
        className={checkbox({ checked, disabled, error, variant })}
      >
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
      <Body noMargin={true}>{children}</Body>
      {error && (
        <div className={messageStyle}>
          <Caption color={error && "alertcolors.error.100"}>
            {message || "error message"}
          </Caption>
        </div>
      )}
    </CheckboxAria>
  );
};
