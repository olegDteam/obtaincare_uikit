import React from 'react'
import {ButtonProps as ButtonPropsBase, Button as ButtonBase, Typography} from "@mui/material";

export type ButtonProps = ButtonPropsBase

const Button:React.FC<ButtonProps> = props => {
  return (
    <ButtonBase disableRipple {...props}>
      <Typography variant={'button'}>
        {props.children}
      </Typography>
    </ButtonBase>
  )
}


export default Button