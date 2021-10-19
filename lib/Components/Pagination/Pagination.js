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
import { styled, Pagination as PaginationBase } from "@mui/material";
import React from "react";
import { colors } from "../../Theme/theme";
var PaginationStyled = styled(function (props) {
    var _a;
    return (React.createElement(PaginationBase, __assign({ shape: "rounded", color: (_a = props.color) !== null && _a !== void 0 ? _a : 'secondary', variant: "outlined" }, props)));
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  .MuiPaginationItem-outlinedPrimary {\n    width: 50px;\n    height: 50px;\n    border: 2px solid ", ";\n    color: ", ";\n    font-size: 16px;\n    line-height: 19.2px;\n    font-weight: 700;\n  }\n\n  .MuiPaginationItem-outlinedSecondary {\n    width: 50px;\n    height: 50px;\n    border: 2px solid ", ";\n    color: ", ";\n    font-size: 16px;\n    line-height: 19.2px;\n    font-weight: 700;\n  }\n\n  .MuiPaginationItem-previousNext {\n    background-color: ", ";\n    border: none;\n  }\n\n  .MuiPaginationItem-root {\n    &.MuiPaginationItem-ellipsis {\n      padding-top: 16px;\n    }\n    &.MuiPaginationItem-outlinedPrimary {\n      &.Mui-selected {\n        border: none;\n        background-color: ", ";\n        color: ", "\n      }\n    }\n\n    &.MuiPaginationItem-outlinedSecondary {\n      &.Mui-selected {\n        border: none;\n        background-color: ", ";\n        color: ", "\n      }\n    }\n  }\n"], ["\n  .MuiPaginationItem-outlinedPrimary {\n    width: 50px;\n    height: 50px;\n    border: 2px solid ", ";\n    color: ", ";\n    font-size: 16px;\n    line-height: 19.2px;\n    font-weight: 700;\n  }\n\n  .MuiPaginationItem-outlinedSecondary {\n    width: 50px;\n    height: 50px;\n    border: 2px solid ", ";\n    color: ", ";\n    font-size: 16px;\n    line-height: 19.2px;\n    font-weight: 700;\n  }\n\n  .MuiPaginationItem-previousNext {\n    background-color: ", ";\n    border: none;\n  }\n\n  .MuiPaginationItem-root {\n    &.MuiPaginationItem-ellipsis {\n      padding-top: 16px;\n    }\n    &.MuiPaginationItem-outlinedPrimary {\n      &.Mui-selected {\n        border: none;\n        background-color: ", ";\n        color: ", "\n      }\n    }\n\n    &.MuiPaginationItem-outlinedSecondary {\n      &.Mui-selected {\n        border: none;\n        background-color: ", ";\n        color: ", "\n      }\n    }\n  }\n"])), colors.paginationBorder, colors.text.green, colors.paginationBorder, colors.text.blue, colors.paginationPrevNextBG, colors.primary.main, colors.white, colors.secondary.main, colors.white);
var Pagination = function (props) {
    return React.createElement(PaginationStyled, __assign({}, props));
};
export default Pagination;
var templateObject_1;
//# sourceMappingURL=Pagination.js.map