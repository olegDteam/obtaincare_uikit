import React from 'react'
import {styled, TextField as TextFieldBase, TextFieldProps as TextFieldPropsBase} from '@mui/material'
import {colors} from "../../Theme/theme";

export type TextFieldProps = Omit<TextFieldPropsBase, 'variant'>

const TextFieldStyled = styled((props: TextFieldPropsBase) => <TextFieldBase variant={'outlined'} {...props}/>)`
  border-radius: 5px;
  background-color: ${colors.common.white};

  .MuiOutlinedInput-input {
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
    height: 46px;

    fieldset {
      border: 1px solid ${colors.border.additional};
    }

    &:hover fieldset {
      border: 1px solid ${colors.border.additional};
    }

    &.Mui-focused fieldset {
      border: 1px solid ${colors.border.secondary};
    }

    &.Mui-disabled fieldset {
      border: 1px solid ${colors.border.additional};
      background-color: ${colors.border.additional};;
    }

    &.Mui-error fieldset {
      border: 1px solid ${colors.border.danger};
    }
  }
`

const TextField: React.FC<TextFieldProps> = (props) => {
  return <TextFieldStyled {...props}/>
}

export default TextField