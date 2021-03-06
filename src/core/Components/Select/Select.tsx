import React from 'react'
import {
  SelectProps as SelectPropsBase,
  Select as SelectBase,
  MenuItem,
  Typography,
  InputBase,
  styled,
} from "@mui/material";
import {colors} from '../../Theme/theme';

export type SelectProps = SelectPropsBase & {
  options: {
    label: string
    value: string | number | readonly string[] | undefined
  }[]
}

const Input = styled(InputBase)(() => `
  border-radius: 5px;
  min-height: 46px;
  background-color: ${colors.common.white};

  &.MuiInputBase-root {
    .MuiSelect-select {
      padding-left: 15px;
    }
  }

  &.Mui-focused {
    border-radius: 5px 5px 0 0;
  }

  &.MuiInputBase-colorPrimary {
    border: 1px solid ${colors.primary.main};
  }

  &.MuiInputBase-colorSecondary {
    border: 1px solid ${colors.secondary.main};
  }

`)

const Select: React.FC<SelectProps> = (props) => {
  const {options, ...otherProps} = props
  const styles = require('./styles.module.css')
  return (
    <SelectBase
      fullWidth
      MenuProps={{
        classes: {
          paper: styles.paper
        },
        style: {
          top: 9,
          width: '100%',

        }
      }}
      input={otherProps.input??<Input/>}
      {...otherProps}
    >
      {options.map((option) =>
        <MenuItem key={option.label} value={option.value}>
          <Typography variant={'p3Text'}>
            {option.label}
          </Typography>
        </MenuItem>
      )}
    </SelectBase>
  )
}

export default Select