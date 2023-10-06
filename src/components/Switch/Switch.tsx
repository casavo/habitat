import React from "react"
import {Switch as SwitchAria} from 'react-aria-components';
import { base, indicator } from "./Switch.css";


type Props = {
  size?: 'normal' | 'small'
  disabled?: boolean
  onChange?: VoidFunction
  isSelected?: boolean
}



export const Switch:React.FC<Props> = (props) => {
  const optionalProps = {
    ...(props.onChange ? {onChange: props.onChange}: {}),
    ...(typeof props.isSelected !== 'undefined' ? {isSelected: props.isSelected}: {})
  }
  return (
    <SwitchAria
      className={base}
      isDisabled={props.disabled || false}
      {...optionalProps}
    >
      <div className={indicator} />
    </SwitchAria>
  )
}