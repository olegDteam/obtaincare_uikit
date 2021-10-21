/// <reference types="react" />
import { CheckboxProps as CheckboxPropsBase } from "@mui/material";
export declare type CheckBoxProps = Omit<CheckboxPropsBase, 'disableRipple' | 'disableTouchRipple' | 'disableFocusRipple' | 'icon' | 'checkedIcon'> & {
    iconColor?: 'primary' | 'danger' | 'secondary';
};
declare const CheckBox: (props: CheckBoxProps) => JSX.Element;
export default CheckBox;
//# sourceMappingURL=CheckBox.d.ts.map