import React from 'react'
import {styled, Radio as RadioBase, RadioProps as RadioPropsBase} from "@mui/material";
import {RadioChecked} from "../Icons/RadioChecked";
import {RadioUnchecked} from "../Icons/RadioUnchecked";
import {colors} from "../../Theme/theme";

export type RadioProps = Omit<RadioPropsBase, 'disableRipple'|'icon'|'checkedIcon'> & {
  fill?:string
  iconColor?: 'primary'|'danger'|'secondary'
}

const RadioStyled = styled(RadioBase)(()=>`
  &.MuiRadio-root {
    padding: 0;

    &:hover {
      background-color: transparent;
    }
  }
`)

const Radio:React.FC<RadioProps> = (props) =>{
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
  const {iconColor, ...otherProps} = props
  return <RadioStyled fill={fill}
                      disableRipple
                      size={otherProps.size??"medium"}
                      checkedIcon={<RadioChecked fill={fill}/>}
                      icon={<RadioUnchecked fill={fill}/>}
                      {...otherProps}/>
}

export default Radio