import React, {ElementType} from 'react'
import {Button as ButtonBase, ButtonProps as ButtonPropsBase, Typography} from "@mui/material";

const Button: React.FC<ButtonProps> = props => {
  return (
    <ButtonBase
      disableRipple
      color={props.color ?? 'secondary'}
      size={props.size ?? 'm'}
      {...props}>
      <Typography variant={'button'}>
        {props.children}
      </Typography>
    </ButtonBase>
  )
}

export type ButtonProps = ButtonPropsBase & {
  component?: ElementType
  to?: string
}

export default Button