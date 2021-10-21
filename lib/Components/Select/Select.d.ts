import React from 'react';
import { SelectProps as SelectPropsBase } from "@mui/material";
export declare type SelectProps = SelectPropsBase & {
    options: {
        label: string;
        value: string | number | readonly string[] | undefined;
    }[];
};
declare const Select: React.FC<SelectProps>;
export default Select;
//# sourceMappingURL=Select.d.ts.map