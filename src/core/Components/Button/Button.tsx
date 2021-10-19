import React from 'react'
import {ButtonProps, Button as ButtonBase, Typography} from "@mui/material";

const Button = (props: ButtonProps) => {
  return (
    <ButtonBase disableRipple {...props}>
      <Typography variant={'button'}>
        {props.children}
      </Typography>
    </ButtonBase>
  )
}

export default Button