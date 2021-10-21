import React from "react";
import {InputAdornment as InputAdornmentBase, InputAdornmentProps as InputAdornmentPropsBase} from "@mui/material";

export type InputAdornmentProps = InputAdornmentPropsBase

const InputAdornment:React.FC<InputAdornmentProps> = props => <InputAdornmentBase {...props}/>

export default InputAdornment