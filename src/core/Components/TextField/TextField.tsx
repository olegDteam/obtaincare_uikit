import React from 'react'
import {styled, TextField as TextFieldBase, TextFieldProps as TextFieldPropsBase} from '@mui/material'
import {colors} from "../../Theme";

export type TextFieldProps = Omit<TextFieldPropsBase, 'variant'>

const TextFieldStyled = styled((props: TextFieldPropsBase) => <TextFieldBase variant={'outlined'} {...props}/>)`
  border-radius: 5px;
  background-color: ${colors.common.white};

  .MuiOutlinedInput-input {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    padding: 14px 15px;

    ::placeholder {
      color: ${colors.text.grey};
      opacity: unset;
    }
  }

  .MuiFormHelperText-root {
    margin: 0.5rem 0 -19.4px;
    font-size: 12px;
    font-weight: 400;
    line-height: 14.4px;
  }

  .MuiOutlinedInput-root {
    padding: 0;
    min-height: 46px;

    &.MuiInputBase-colorInfo {

      .Mui-disabled {
        -webkit-text-fill-color: ${colors.text.grey} !important
      }

      fieldset {
        border: 1px solid ${colors.border.additional};
      }

      &.Mui-disabled fieldset {
        border: unset;
      }
      
      &.Mui-error fieldset {
        border: 1px solid ${colors.border.danger};
      }

      &:hover fieldset {
        border: 1px solid ${colors.border.additional} !important;
      }
    }

    &.MuiInputBase-colorPrimary {

      fieldset {
        border: 1px solid ${colors.primary.main};
      }

      &:hover fieldset {
        border: 1px solid ${colors.primary.hover};
      }

      &.Mui-focused fieldset {
        border: 1px solid ${colors.primary.active};
      }

      &.Mui-disabled fieldset {
        border: 1px solid ${colors.primary.main}
      }

      &.Mui-error fieldset {
        border: 1px solid ${colors.border.danger};
      }
    }

    &.MuiInputBase-colorSecondary {
      .Mui-disabled {
        -webkit-text-fill-color: ${colors.text.grey} !important;
        z-index: 2;
      }
      fieldset {
        border: 1px solid ${colors.border.secondary};
      }

      &:hover fieldset {
        border: 1px solid ${colors.border.secondary};
      }

      &.Mui-focused fieldset {
        border: 1px solid ${colors.border.secondary};
      }

      &.Mui-disabled fieldset {
        border: 1px solid ${colors.border.additional};
        background-color: ${colors.border.additional};
        z-index: 1;
      }

      &.Mui-error fieldset {
        border: 1px solid ${colors.border.danger};
      }
    }
  }
`

const TextField: React.FC<TextFieldProps> = (props) => {
  const {color, ...otherProps} = props
  return <TextFieldStyled color={color ?? 'secondary'} {...otherProps}/>
}

export default TextField