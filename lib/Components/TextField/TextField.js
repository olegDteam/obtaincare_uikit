var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from 'react';
import { styled, TextField as TextFieldBase } from '@mui/material';
import { colors } from "../../Theme/theme";
var TextFieldStyled = styled(function (props) { return React.createElement(TextFieldBase, __assign({ variant: 'outlined' }, props)); })(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border-radius: 5px;\n  background-color: ", ";\n\n  .MuiOutlinedInput-input {\n    ::placeholder {\n      color: ", ";\n      opacity: unset;\n    }\n  }\n\n  .MuiFormHelperText-root {\n    margin: 0.5rem 0 -19.4px;\n    font-size: 12px;\n    font-weight: 400;\n    line-height: 14.4px;\n  }\n\n  .MuiOutlinedInput-root {\n    padding: 0;\n    height: 46px;\n\n    fieldset {\n      border: 1px solid ", ";\n    }\n\n    &:hover fieldset {\n      border: 1px solid ", ";\n    }\n\n    &.Mui-focused fieldset {\n      border: 1px solid ", ";\n    }\n\n    &.Mui-disabled fieldset {\n      border: 1px solid ", ";\n      background-color: ", ";;\n    }\n\n    &.Mui-error fieldset {\n      border: 1px solid ", ";\n    }\n  }\n"], ["\n  border-radius: 5px;\n  background-color: ", ";\n\n  .MuiOutlinedInput-input {\n    ::placeholder {\n      color: ", ";\n      opacity: unset;\n    }\n  }\n\n  .MuiFormHelperText-root {\n    margin: 0.5rem 0 -19.4px;\n    font-size: 12px;\n    font-weight: 400;\n    line-height: 14.4px;\n  }\n\n  .MuiOutlinedInput-root {\n    padding: 0;\n    height: 46px;\n\n    fieldset {\n      border: 1px solid ", ";\n    }\n\n    &:hover fieldset {\n      border: 1px solid ", ";\n    }\n\n    &.Mui-focused fieldset {\n      border: 1px solid ", ";\n    }\n\n    &.Mui-disabled fieldset {\n      border: 1px solid ", ";\n      background-color: ", ";;\n    }\n\n    &.Mui-error fieldset {\n      border: 1px solid ", ";\n    }\n  }\n"])), colors.common.white, colors.text.grey, colors.border.additional, colors.border.additional, colors.border.secondary, colors.border.additional, colors.border.additional, colors.border.danger);
var TextField = function (props) {
    return React.createElement(TextFieldStyled, __assign({}, props));
};
export default TextField;
var templateObject_1;
//# sourceMappingURL=TextField.js.map