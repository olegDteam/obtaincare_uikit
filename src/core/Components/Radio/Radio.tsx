import React from 'react'
import {styled, Radio as RadioBase, RadioProps as RadioPropsBase} from "@mui/material";
import {RadioChecked} from "../Icons/RadioChecked";
import {RadioUnchecked} from "../Icons/RadioUnchecked";
import {colors} from "../../Theme";

export type RadioProps = Omit<RadioPropsBase, 'disableRipple' | 'icon' | 'checkedIcon'> & {
  fill?: string
  checkedIconColor?: 'primary' | 'danger' | 'secondary'
  uncheckedIconColor?: 'primary' | 'danger' | 'secondary'
}

const RadioStyled = styled(RadioBase)(() => `
  &.MuiRadio-root {
    padding: 0;

    &:hover {
      background-color: transparent;
    }
  }
`)

const Radio: React.FC<RadioProps> = (props) => {
  let fillChecked
  let fillUnchecked

  const {checkedIconColor, uncheckedIconColor, ...otherProps} = props
  if (checkedIconColor === 'primary') {
    fillChecked = colors.primary.main
  }
  if (checkedIconColor === 'secondary') {
    fillChecked = colors.secondary.main
  }
  if (checkedIconColor === 'danger') {
    fillChecked = colors.danger.red
  }
  if (uncheckedIconColor === 'primary') {
    fillUnchecked = colors.primary.main
  }
  if (uncheckedIconColor === 'secondary') {
    fillUnchecked = colors.secondary.main
  }
  if (uncheckedIconColor === 'danger') {
    fillUnchecked = colors.danger.red
  }
  return <RadioStyled disableRipple
                      size={otherProps.size ?? "medium"}
                      checkedIcon={<RadioChecked fill={fillChecked ?? colors.common.lightGray}/>}
                      icon={<RadioUnchecked fill={fillUnchecked ?? colors.common.lightGray}/>}
                      {...otherProps}
  />
}

export default Radio