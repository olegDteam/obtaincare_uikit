import React from 'react';
import { RadioProps } from "@mui/material";
declare type RadioStyledType = RadioProps & {
    fill?: string;
    iconColor?: 'primary' | 'danger' | 'secondary';
};
declare const Radio: React.FC<Omit<RadioStyledType, 'disableRipple' | 'icon' | 'checkedIcon'>>;
export default Radio;
//# sourceMappingURL=Radio.d.ts.map