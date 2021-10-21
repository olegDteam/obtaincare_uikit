/// <reference types="react" />
import { CheckboxProps } from "@mui/material";
export declare type CheckBoxType = Omit<CheckboxProps, 'disableRipple' | 'disableTouchRipple' | 'disableFocusRipple' | 'icon' | 'checkedIcon'> & {
    iconColor?: 'primary' | 'danger' | 'secondary';
};
declare const CheckBox: (props: CheckBoxType) => JSX.Element;
export default CheckBox;
//# sourceMappingURL=CheckBox.d.ts.map