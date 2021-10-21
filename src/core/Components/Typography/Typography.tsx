import React from "react";
import {TypographyProps as TypographyPropsBase, Typography as TypographyBase} from "@mui/material";

export type TypographyProps = TypographyPropsBase

const Typography: React.FC<TypographyProps> = (props) => <TypographyBase {...props}/>

export default Typography