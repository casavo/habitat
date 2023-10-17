import React from "react"
import {Switch as SwitchAria} from 'react-aria-components';
import { base, indicator } from "./Switch.css";


type Props = {
  size?: 'normal' | 'small'
  theme?: 'b2c' | 'b2b' | 'neutral'
  disabled?: boolean
  onChange?: VoidFunction
  isSelected?: boolean
}



export const Switch:React.FC<Props> =
  ({size = 'normal', theme = 'b2c', onChange, isSelected, disabled}) => {
  const optionalProps = {
    ...(onChange ? {onChange: onChange}: {}),
    ...(typeof isSelected !== 'undefined' ? {isSelected: isSelected}: {})
  }
  return (
    <SwitchAria
      className={base}
      isDisabled={disabled || false}
      {...optionalProps}
    >
      <div className={indicator({size,theme})} />
    </SwitchAria>
  )
}