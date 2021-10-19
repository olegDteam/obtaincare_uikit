import React from 'react'
import {Checkbox as CheckboxBase, CheckboxProps} from "@mui/material";
import { colors } from "../../Theme/theme";
import {CheckboxChecked} from "../Icons/CheckboxChecked";
import {CheckboxUnchecked} from "../Icons/CheckboxUnchecked";

type CheckBoxType=Omit<CheckboxProps,'disableRipple'|'disableTouchRipple'|'disableFocusRipple'|'icon'|'checkedIcon'>& {
  iconColor?: 'primary'|'danger'|'secondary'
}

const CheckBox = (props:CheckBoxType) => {
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