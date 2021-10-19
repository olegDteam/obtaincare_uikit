import React from 'react'
import {
  Autocomplete as AutocompleteBase,
  AutocompleteProps,
  InputBase,
  Paper as PaperBase,
  styled,
  Typography
} from "@mui/material";
import {colors} from "../../Theme/theme";

export const Input = styled(InputBase)(() => `
  position: relative;
  display: inline-flex;
  flex-wrap: wrap;
  flex: 1;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  min-height: 46px;
  padding-left: 10px;
  color: ${colors.text.additional};
  border-radius: 5px;
  .MuiInputBase-input {
    width: 0;
    min-width: 30px;
  }
  &.MuiInputBase-colorPrimary {
    border: 1px solid ${colors.primary.main};
  }
  &.MuiInputBase-colorSecondary {
    border: 1px solid ${colors.secondary.main};
  }
  &.Mui-focused {
    border-radius: 5px 5px 0 0;
  }
  
  &.Mui-error {
    border: 1px solid ${colors.danger.red};
  }
  
  &.Mui-disabled {
    border: none;
    background-color: ${colors.common.sweetBlue};
  }
  .MuiButtonBase-root {
    background-color: ${colors.common.sweetBlue};
    padding-right: 20px;
    padding-top: 4px;
    span {
      font-size: 14px;
      line-height: 17px;
      font-weight: 600;
      font-style: normal;
      color: ${colors.text.grey};
    }
    svg {
      position: absolute;
      top: 12px;
      left: calc(100% - 14px);
      path {
        d: path("M7.79269 6.81652C8.06908 7.09318 8.06908 7.52354 7.79269 7.8002C7.6545 7.93852 7.4856 8 7.30134 8C7.11707 8 6.94818 7.93852 6.80998 7.8002L3.99999 4.98752L1.19 7.8002C1.05181 7.93852 0.88291 8 0.698649 8C0.514388 8 0.345489 7.93852 0.207294 7.8002C-0.0690979 7.52354 -0.0690979 7.09318 0.207294 6.81652L3.01726 4.00384L0.207294 1.19117C-0.0690979 0.914509 -0.0690979 0.48415 0.207294 0.207493C0.483685 -0.0691642 0.913613 -0.0691642 1.19 0.207493L3.99999 3.02017L6.80998 0.207493C7.08637 -0.0691642 7.5163 -0.0691642 7.79269 0.207493C8.06908 0.48415 8.06908 0.914509 7.79269 1.19117L4.9827 4.00384L7.79269 6.81652Z");
        fill: ${colors.danger.red};
      }
    }
  }
`)

export const Paper = styled(PaperBase)(() => `
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.08);
  ul {
    ::-webkit-scrollbar {
      width: 20px;
    }

    ::-webkit-scrollbar-track {
      background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${colors.common.lightGray};
      border-radius: 20px;
      border: 8px solid transparent;
      background-clip: content-box;
    }

    ::-webkit-scrollbar-button {
      height: 0;
      background-color: transparent;
    }

    ::-webkit-scrollbar-corner {
      background-color: transparent;
    }
  }

  .MuiAutocomplete-listbox {
    padding: 0;

    .MuiAutocomplete-option {
      padding: 12px 15px;
    }

    .MuiAutocomplete-option.Mui-focused {
      background-color: ${colors.common.sweetBlue}
    }
  }
`)

type AutocompletePropsType = Omit<AutocompleteProps<any, any, any, any>, 'PaperComponent' | 'renderInput'> & {
  color?: 'primary' | 'secondary'
  name?: string
  inputPropValue?: unknown
  error?: boolean
  onInputPropChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
  helperText?: string | null
}

const Autocomplete: React.FC<AutocompletePropsType> = (props) => {
  const {color, name, inputPropValue, error, onInputPropChange, helperText, ...otherProps} = props
  return <>
    <AutocompleteBase
      {...otherProps}
      options={props.options}
      popupIcon={false}
      PaperComponent={Paper}
      renderInput={(params) => {
        const {InputLabelProps, InputProps, ...otherParams} = params
        return <Input color={props.color ?? 'primary'}
                      ref={params.InputProps.ref}
                      name={name}
                      value={inputPropValue}
                      error={error}
                      onChange={onInputPropChange}
                      startAdornment={params.InputProps.startAdornment}
                      endAdornment={null}
                      {...otherParams}
        />
      }}
    />
    {error && <Typography variant={'p3'} color={colors.danger.red}>{helperText}</Typography>}
  </>
}

export default Autocomplete