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
import { Button as ButtonBase, Typography } from "@mui/material";
var Button = function (props) {
    return (React.createElement(ButtonBase, __assign({ disableRipple: true }, props),
        React.createElement(Typography, { variant: 'button' }, props.children)));
};
export default Button;
//# sourceMappingURL=Button.js.map