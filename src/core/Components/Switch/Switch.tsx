import React from 'react'
import {styled, Switch as SwitchBase, SwitchProps as SwitchPropsBase} from "@mui/material";
import {colors} from '../../Theme';

export type SwitchProps = Omit<SwitchPropsBase,'disableRipple'>

const Switch = styled((props: SwitchProps) => (
  <SwitchBase focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))({
  width: 51,
  height: 31,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: '1.5px 2px',
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(19px)',
      color: colors.common.white,
      '& + .MuiSwitch-track': {
        backgroundColor: colors.danger.red,
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: colors.common.lightGray,
      opacity: 0.5,
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color: colors.common.white
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: 0.5
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 28,
    height: 28,
  },
  '& .MuiSwitch-track': {
    borderRadius: 18,
    backgroundColor: colors.common.lightGray,
    opacity: 1,
  },
});

export default Switch