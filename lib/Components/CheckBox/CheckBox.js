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
import { Checkbox as CheckboxBase } from "@mui/material";
import { colors } from "../../Theme";
import { CheckboxChecked } from "../Icons/CheckboxChecked";
import { CheckboxUnchecked } from "../Icons/CheckboxUnchecked";
var CheckBox = function (props) {
    var fill;
    if (props.iconColor === 'primary') {
        fill = colors.primary.main;
    }
    if (props.iconColor === 'secondary') {
        fill = colors.secondary.main;
    }
    if (props.iconColor === 'danger') {
        fill = colors.danger.red;
    }
    var iconColor = props.iconColor, otherProps = __rest(props, ["iconColor"]);
    return (React.createElement(CheckboxBase, __assign({ icon: React.createElement(CheckboxUnchecked, { fontSize: 'medium', fill: fill }), checkedIcon: React.createElement(CheckboxChecked, { fontSize: 'medium', fill: fill }), disableRipple: true, disableTouchRipple: true, disableFocusRipple: true }, otherProps)));
};
export default CheckBox;
//# sourceMappingURL=CheckBox.js.map