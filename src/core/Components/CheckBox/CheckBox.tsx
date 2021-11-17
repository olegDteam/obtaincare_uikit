import React from 'react'
import {Checkbox as CheckboxBase, CheckboxProps as CheckboxPropsBase, SvgIconProps} from "@mui/material";
import { colors } from "../../Theme";
import {CheckboxChecked} from "../Icons/CheckboxChecked";
import {CheckboxUnchecked} from "../Icons/CheckboxUnchecked";

export type CheckBoxProps=Omit<CheckboxPropsBase,'disableRipple'|'disableTouchRipple'|'disableFocusRipple'>& {
  iconColor?: 'primary'|'danger'|'secondary'
  fontSize?: SvgIconProps['fontSize']
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
  const {iconColor, fontSize, icon, checkedIcon, ...otherProps}= props
  return (
    <CheckboxBase
      icon={icon??<CheckboxUnchecked fontSize={fontSize} fill={fill}/>}
      checkedIcon={checkedIcon??<CheckboxChecked fontSize={fontSize} fill={fill}/>}
      disableRipple
      disableTouchRipple
      disableFocusRipple
      {...otherProps}
    />
  )
}

export default CheckBox