import type { CheckboxProps } from "react-aria-components";
import { Checkbox as CheckboxAria } from "react-aria-components";
import { checkbox, messageStyle, wrapper } from "./Checkbox.css";
import { Body } from "../Typography";
import {vars} from "../../utils/theme.css.ts";

type Props = React.PropsWithChildren<{
  checked?: boolean;
  disabled?: boolean;
  error?: boolean;
  message?: string;
} & Omit<CheckboxProps,"isSelected"|"isDisabled"|"children"|"className">>  ;

export const Checkbox = ({
  checked,
  children,
  disabled,
  error,
  message,
    ...props
}: Props) => {
  return (
    <CheckboxAria
        {...props}
      isDisabled={disabled}
      isSelected={checked}
      className={wrapper}
    >
      <div
        data-id="check-icon"
        className={checkbox({ checked, disabled, error })}
      >
        {checked && <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M4.35982 7.39202L2.87769 8.73317L6.5114 12.7572L13.5542 5.70712L12.1414 4.29291L6.58447 9.85565L4.35982 7.39202Z"
              fill= {vars.colors.root.neutral[0]}
            />
          </svg>
        }
      </div>
      <Body noMargin={true}>{children}</Body>
      {error && (
        <div className={messageStyle}>
          <Body noMargin size="s" color={'root.red.600'}>
            {message || "error message"}
          </Body>
        </div>
      )}
    </CheckboxAria>
  );
};
