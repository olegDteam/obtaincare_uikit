import React from 'react';
import { AutocompleteProps as AutocompletePropsBase } from "@mui/material";
export declare const Input: import("@mui/system").StyledComponent<import("@mui/material").InputBaseProps & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme>, {}, {}>;
export declare const Paper: import("@mui/system").StyledComponent<{
    children?: React.ReactNode;
    classes?: Partial<import("@mui/material").PaperClasses> | undefined;
    elevation?: number | undefined;
    square?: boolean | undefined;
    sx?: import("@mui/system").SxProps<import("@mui/material").Theme> | undefined;
    variant?: "outlined" | "elevation" | undefined;
} & import("@mui/material/OverridableComponent").CommonProps & Omit<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & {
    ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
}, "square" | keyof import("@mui/material/OverridableComponent").CommonProps | "children" | "sx" | "variant" | "elevation"> & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme>, {}, {}>;
export declare type AutocompleteProps = Omit<AutocompletePropsBase<any, any, any, any>, 'PaperComponent' | 'renderInput'> & {
    color?: 'primary' | 'secondary';
    name?: string;
    inputPropValue?: unknown;
    error?: boolean;
    onInputPropChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
    helperText?: string | null;
};
declare const Autocomplete: React.FC<AutocompleteProps>;
export default Autocomplete;
//# sourceMappingURL=Autocomplete.d.ts.map