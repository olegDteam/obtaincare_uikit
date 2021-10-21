import React from 'react';
import { RadioProps as RadioPropsBase } from "@mui/material";
export declare type RadioProps = Omit<RadioPropsBase, 'disableRipple' | 'icon' | 'checkedIcon'> & {
    fill?: string;
    iconColor?: 'primary' | 'danger' | 'secondary';
};
declare const Radio: React.FC<RadioProps>;
export default Radio;
//# sourceMappingURL=Radio.d.ts.map