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
import { Select as SelectBase, MenuItem, Typography, InputBase, styled, } from "@mui/material";
import { colors } from '../../Theme/theme';
var Input = styled(InputBase)(function () { return "\n  border-radius: 5px;\n  min-height: 46px;\n  background-color: " + colors.common.white + ";\n\n  &.MuiInputBase-root {\n    .MuiSelect-select {\n      padding-left: 15px;\n    }\n  }\n\n  &.Mui-focused {\n    border-radius: 5px 5px 0 0;\n  }\n\n  &.MuiInputBase-colorPrimary {\n    border: 1px solid " + colors.primary.main + ";\n  }\n\n  &.MuiInputBase-colorSecondary {\n    border: 1px solid " + colors.secondary.main + ";\n  }\n\n"; });
var Select = function (props) {
    var _a;
    var options = props.options, otherProps = __rest(props, ["options"]);
    var styles = require('./styles.module.css');
    return (React.createElement(SelectBase, __assign({ fullWidth: true, MenuProps: {
            classes: {
                paper: styles.paper
            },
            style: {
                top: 9,
                width: '100%',
            }
        }, input: (_a = otherProps.input) !== null && _a !== void 0 ? _a : React.createElement(Input, null) }, otherProps), options.map(function (option) {
        return React.createElement(MenuItem, { key: option.label, value: option.value },
            React.createElement(Typography, { variant: 'p3Text' }, option.label));
    })));
};
export default Select;
//# sourceMappingURL=Select.js.map