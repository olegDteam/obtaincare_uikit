import React from "react";
import {
  LinearProgressProps as LinearProgressPropsBase,
  LinearProgress as LinearProgressBase,
  styled
} from "@mui/material";
import {colors} from "../../Theme";

export type LinearProgressProps = LinearProgressPropsBase

const LinearProgress = styled((props:LinearProgressProps)=><LinearProgressBase variant={props.variant??'determinate'} {...props}/>)({
  '&.MuiLinearProgress-root': {
    height: 6,
    borderRadius: 555,
    '&.MuiLinearProgress-colorPrimary': {
      backgroundColor: colors.common.sweetBlue,
    },
    '&.MuiLinearProgress-colorSecondary': {
      backgroundColor: colors.common.sweetBlue
    },
    '&.MuiLinearProgress-colorInfo': {
      backgroundColor: colors.common.sweetBlue
    },
    '&.MuiLinearProgress-colorSuccess': {
      height: 7,
      backgroundColor: colors.background.grey
    },
    '.MuiLinearProgress-bar': {
      borderRadius: 555,
      '&.MuiLinearProgress-barColorPrimary': {
        backgroundColor: colors.primary.main,
      },
      '&.MuiLinearProgress-barColorSecondary': {
        backgroundColor: colors.secondary.main,
      },
      '&.MuiLinearProgress-barColorInfo': {
        backgroundColor: colors.common.orange,
      },
      '&.MuiLinearProgress-barColorSuccess': {
        height: 7,
        backgroundColor: colors.primary.main,
      }
    }
  }
})

export default LinearProgress