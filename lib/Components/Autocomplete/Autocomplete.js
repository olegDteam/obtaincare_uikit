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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { Autocomplete as AutocompleteBase, InputBase, Paper as PaperBase, styled, Typography } from "@mui/material";
import { colors } from "../../Theme/theme";
export var Input = styled(InputBase)(function () { return "\n  position: relative;\n  display: inline-flex;\n  flex-wrap: wrap;\n  flex: 1;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 18px;\n  min-height: 46px;\n  padding-left: 10px;\n  color: " + colors.text.additional + ";\n  border-radius: 5px;\n  .MuiInputBase-input {\n    width: 0;\n    min-width: 30px;\n  }\n  &.MuiInputBase-colorPrimary {\n    border: 1px solid " + colors.primary.main + ";\n  }\n  &.MuiInputBase-colorSecondary {\n    border: 1px solid " + colors.secondary.main + ";\n  }\n  &.Mui-focused {\n    border-radius: 5px 5px 0 0;\n  }\n  \n  &.Mui-error {\n    border: 1px solid " + colors.danger.red + ";\n  }\n  \n  &.Mui-disabled {\n    border: none;\n    background-color: " + colors.common.sweetBlue + ";\n  }\n  .MuiButtonBase-root {\n    background-color: " + colors.common.sweetBlue + ";\n    padding-right: 20px;\n    padding-top: 4px;\n    span {\n      font-size: 14px;\n      line-height: 17px;\n      font-weight: 600;\n      font-style: normal;\n      color: " + colors.text.grey + ";\n    }\n    svg {\n      position: absolute;\n      top: 12px;\n      left: calc(100% - 14px);\n      path {\n        d: path(\"M7.79269 6.81652C8.06908 7.09318 8.06908 7.52354 7.79269 7.8002C7.6545 7.93852 7.4856 8 7.30134 8C7.11707 8 6.94818 7.93852 6.80998 7.8002L3.99999 4.98752L1.19 7.8002C1.05181 7.93852 0.88291 8 0.698649 8C0.514388 8 0.345489 7.93852 0.207294 7.8002C-0.0690979 7.52354 -0.0690979 7.09318 0.207294 6.81652L3.01726 4.00384L0.207294 1.19117C-0.0690979 0.914509 -0.0690979 0.48415 0.207294 0.207493C0.483685 -0.0691642 0.913613 -0.0691642 1.19 0.207493L3.99999 3.02017L6.80998 0.207493C7.08637 -0.0691642 7.5163 -0.0691642 7.79269 0.207493C8.06908 0.48415 8.06908 0.914509 7.79269 1.19117L4.9827 4.00384L7.79269 6.81652Z\");\n        fill: " + colors.danger.red + ";\n      }\n    }\n  }\n"; });
export var Paper = styled(PaperBase)(function () { return "\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.08);\n  ul {\n    ::-webkit-scrollbar {\n      width: 20px;\n    }\n\n    ::-webkit-scrollbar-track {\n      background-color: transparent;\n    }\n\n    ::-webkit-scrollbar-thumb {\n      background-color: " + colors.common.lightGray + ";\n      border-radius: 20px;\n      border: 8px solid transparent;\n      background-clip: content-box;\n    }\n\n    ::-webkit-scrollbar-button {\n      height: 0;\n      background-color: transparent;\n    }\n\n    ::-webkit-scrollbar-corner {\n      background-color: transparent;\n    }\n  }\n\n  .MuiAutocomplete-listbox {\n    padding: 0;\n\n    .MuiAutocomplete-option {\n      padding: 12px 15px;\n    }\n\n    .MuiAutocomplete-option.Mui-focused {\n      background-color: " + colors.common.sweetBlue + "\n    }\n  }\n"; });
var Autocomplete = function (props) {
    var color = props.color, name = props.name, inputPropValue = props.inputPropValue, error = props.error, onInputPropChange = props.onInputPropChange, helperText = props.helperText, otherProps = __rest(props, ["color", "name", "inputPropValue", "error", "onInputPropChange", "helperText"]);
    return React.createElement(React.Fragment, null,
        React.createElement(AutocompleteBase, __assign({}, otherProps, { options: props.options, popupIcon: false, PaperComponent: Paper, renderInput: function (params) {
                var _a;
                var InputLabelProps = params.InputLabelProps, InputProps = params.InputProps, otherParams = __rest(params, ["InputLabelProps", "InputProps"]);
                return React.createElement(Input, __assign({ color: (_a = props.color) !== null && _a !== void 0 ? _a : 'primary', ref: params.InputProps.ref, name: name, value: inputPropValue, error: error, onChange: onInputPropChange, startAdornment: params.InputProps.startAdornment, endAdornment: null }, otherParams));
            } })),
        error && React.createElement(Typography, { variant: 'p3', color: colors.danger.red }, helperText));
};
export default Autocomplete;
//# sourceMappingURL=Autocomplete.js.map