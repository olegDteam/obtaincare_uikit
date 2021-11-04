import React from 'react'
import {styled, Radio as RadioBase, RadioProps as RadioPropsBase} from "@mui/material";
import {RadioChecked} from "../Icons/RadioChecked";
import {RadioUnchecked} from "../Icons/RadioUnchecked";
import {colors} from "../../Theme";

export type RadioProps = RadioPropsBase

const Radio = styled((props: RadioProps) => <RadioBase
  disableRipple={props.disableRipple ?? true}
  size={props.size ?? "medium"}
  checkedIcon={props.checkedIcon??<RadioChecked/>}
  icon={props.icon??<RadioUnchecked/>}
  {...props}
/>)({
  '&.MuiRadio-root': {
    padding: 0,
    '&.MuiRadio-colorPrimary': {
      '&.Mui-checked': {
        color: colors.primary.main
      }
    },
    '&.MuiRadio-colorSecondary': {
      '&.Mui-checked': {
        color: colors.secondary.main
      }
    },
    '&.MuiRadio-colorError': {
      '&.Mui-checked': {
        color: colors.danger.red
      }
    }
  },
  '&:hover': {
    backgroundColor: 'transparent'
  }
})

export default Radio