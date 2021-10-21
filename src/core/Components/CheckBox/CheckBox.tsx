import React from 'react'
import {Checkbox as CheckboxBase, CheckboxProps as CheckboxPropsBase} from "@mui/material";
import { colors } from "../../Theme";
import {CheckboxChecked} from "../Icons/CheckboxChecked";
import {CheckboxUnchecked} from "../Icons/CheckboxUnchecked";

export type CheckBoxProps=Omit<CheckboxPropsBase,'disableRipple'|'disableTouchRipple'|'disableFocusRipple'|'icon'|'checkedIcon'>& {
  iconColor?: 'primary'|'danger'|'secondary'
}

const CheckBox = (props:CheckBoxProps) => {
  let fill
  if(props.iconColor==='primary') {
    fill=colors.primary.main
  }
  if(props.iconColor==='secondary') {
    fill=colors.secondary.main
  }
  if(props.iconColor==='danger') {
    fill=colors.danger.red
  }
  const {iconColor, ...otherProps}= props
  return (
    <CheckboxBase
      icon={<CheckboxUnchecked fontSize={'medium'} fill={fill}/>}
      checkedIcon={<CheckboxChecked fontSize={'medium'} fill={fill}/>}
      disableRipple
      disableTouchRipple
      disableFocusRipple
      {...otherProps}
    />
  )
}

export default CheckBox