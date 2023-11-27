import React from "react";
import { Switch as SwitchAria } from "react-aria-components";
import { base, indicator } from "./Switch.css";

type Props = {
  disabled?: boolean;
  isSelected?: boolean;
  onChange?: VoidFunction;
  size?: "normal" | "small";
};

export const Switch: React.FC<Props> = ({
  size = "normal",
  onChange,
  isSelected,
  disabled,
}) => {
  const optionalProps = {
    ...(onChange ? { onChange: onChange } : {}),
    ...(typeof isSelected !== "undefined" ? { isSelected: isSelected } : {}),
  };
  return (
    <SwitchAria
      className={base}
      isDisabled={disabled || false}
      {...optionalProps}
    >
      <div className={indicator({ size })} />
    </SwitchAria>
  );
};
