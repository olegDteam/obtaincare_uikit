import React from "react";
import {
  LinearProgressProps as LinearProgressPropsBase,
  LinearProgress as LinearProgressBase,
  styled
} from "@mui/material";
import {colors} from "../../Theme";

export type LinearProgressProps = Omit<LinearProgressPropsBase, 'variant'>

const LinearProgress = styled((props:LinearProgressProps)=><LinearProgressBase variant={'determinate'} {...props}/>)({
  '&.MuiLinearProgress-root': {
    height: 6,
    borderRadius: 555,
    '&.MuiLinearProgress-colorPrimary': {
      backgroundColor: colors.common.sweetBlue,
    },
    '&.MuiLinearProgress-colorSecondary': {
      backgroundColor: colors.common.sweetBlue
    },
    '.MuiLinearProgress-bar': {
      borderRadius: 555,
      '&.MuiLinearProgress-barColorPrimary': {
        backgroundColor: colors.primary.main,
      },
      '&.MuiLinearProgress-barColorSecondary': {
        backgroundColor: colors.secondary.main,
      }
    }
  }
})

export default LinearProgress