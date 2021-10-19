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
import { styled, Switch as SwitchBase } from "@mui/material";
import { colors } from '../../Theme/theme';
var Switch = styled(function (props) { return (React.createElement(SwitchBase, __assign({ focusVisibleClassName: ".Mui-focusVisible", disableRipple: true }, props))); })({
    width: 51,
    height: 31,
    padding: 0,
    '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: '1.5px 2px',
        transitionDuration: '300ms',
        '&.Mui-checked': {
            transform: 'translateX(19px)',
            color: colors.common.white,
            '& + .MuiSwitch-track': {
                backgroundColor: colors.danger.red,
                opacity: 1,
                border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5,
            },
        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: colors.common.lightGray,
            opacity: 0.5,
            border: '6px solid #fff',
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
            color: colors.common.white
        },
        '&.Mui-disabled + .MuiSwitch-track': {
            opacity: 0.5
        },
    },
    '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        width: 28,
        height: 28,
    },
    '& .MuiSwitch-track': {
        borderRadius: 18,
        backgroundColor: colors.common.lightGray,
        opacity: 1,
    },
});
export default Switch;
//# sourceMappingURL=Switch.js.map