import React from 'react';
import { SelectProps } from "@mui/material";
declare type SelectType = Omit<SelectProps, 'input'> & {
    options: {
        label: string;
        value: string | number | readonly string[] | undefined;
    }[];
};
declare const Select: React.FC<SelectType>;
export default Select;
//# sourceMappingURL=Select.d.ts.map