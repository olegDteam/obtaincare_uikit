import React from "react";
import {SvgIconProps as SvgIconPropsBase, SvgIcon as SvgIconBase} from "@mui/material";

export type SvgIconProps = SvgIconPropsBase

const SvgIcon: React.FC<SvgIconProps> = (props) => <SvgIconBase {...props}/>

export default SvgIcon