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
import React from "react";
import { CircularProgress as CircularProgressBase, styled, Typography } from '@mui/material';
import { colors } from "../../Theme";
var CircularProgressWrapper = styled('div')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  display: inline-flex;\n"], ["\n  position: absolute;\n  display: inline-flex;\n"])));
var FrontCircle = styled(function (props) { return React.createElement(CircularProgressBase, __assign({ value: props.value, size: props.size, variant: "determinate", thickness: 5 }, props)); })(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  && {\n    z-index: 2;\n  }\n\n  .MuiCircularProgress-circle {\n    color: ", ";\n    stroke-linecap: round;\n  }\n"], ["\n  && {\n    z-index: 2;\n  }\n\n  .MuiCircularProgress-circle {\n    color: ", ";\n    stroke-linecap: round;\n  }\n"])), colors.secondary.main);
var Value = styled(function (props) { return React.createElement(Typography, __assign({ variant: 'h5' }, props)); })(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  && {\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    position: absolute;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n"], ["\n  && {\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    position: absolute;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n"])));
var BackCircle = styled(function (props) {
    return React.createElement(CircularProgressBase, __assign({ value: 100, size: props.size, variant: "determinate", thickness: 5 }, props));
})(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  && {\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    position: absolute;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    z-index: 1;\n  }\n\n  .MuiCircularProgress-circle {\n    color: ", ";\n  }\n"], ["\n  && {\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    position: absolute;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    z-index: 1;\n  }\n\n  .MuiCircularProgress-circle {\n    color: ", ";\n  }\n"])), colors.additional.main);
var CircularProgress = function (_a) {
    var value = _a.value, size = _a.size;
    return React.createElement(CircularProgressWrapper, null,
        React.createElement(FrontCircle, { value: value, size: size }),
        React.createElement(BackCircle, { size: size }),
        React.createElement(Value, null,
            value,
            "%"));
};
export default CircularProgress;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=CircularProgress.js.map