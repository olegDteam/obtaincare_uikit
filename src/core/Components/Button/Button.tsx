import React, {ElementType} from 'react'
import {Button as ButtonBase, ButtonProps as ButtonPropsBase, Typography} from "@mui/material";
import {TypographyProps} from "../Typography";

const Button: React.FC<ButtonProps> = props => {
  const {typoVariant, ...otherProps} = props
  return (
    <ButtonBase
      disableRipple
      color={props.color ?? 'secondary'}
      size={props.size ?? 'm'}
      {...otherProps}>
      <Typography variant={typoVariant??'button'}>
        {props.children}
      </Typography>
    </ButtonBase>
  )
}

export type ButtonProps = ButtonPropsBase & {
  component?: ElementType
  to?: string
  typoVariant?: TypographyProps['variant']
}

export default Button