var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { Button } from "../../../components/common";
import { PDFContext } from "../state";
import { setZoomLevel } from "../state/actions";
import { useTranslation } from "../../../hooks/useTranslation";
import { ResetZoomPDFIcon, ZoomInPDFIcon, ZoomOutPDFIcon, } from "./icons";
import PDFPagination from "./PDFPagination";
var PDFControls = function () {
    var t = useTranslation().t;
    var _a = useContext(PDFContext), _b = _a.state, paginated = _b.paginated, zoomLevel = _b.zoomLevel, numPages = _b.numPages, zoomJump = _b.zoomJump, defaultZoomLevel = _b.defaultZoomLevel, dispatch = _a.dispatch;
    var textPrimary = useContext(ThemeContext).textPrimary;
    return (React.createElement(Container, { id: "pdf-controls" },
        paginated && numPages > 1 && React.createElement(PDFPagination, null),
        React.createElement(ControlButton, { id: "pdf-zoom-out", onMouseDown: function () { return dispatch(setZoomLevel(zoomLevel - zoomJump)); } },
            React.createElement(ZoomOutPDFIcon, { color: textPrimary, size: "80%" })),
        React.createElement(ControlButton, { id: "pdf-zoom-in", onMouseDown: function () { return dispatch(setZoomLevel(zoomLevel + zoomJump)); } },
            React.createElement(ZoomInPDFIcon, { color: textPrimary, size: "80%" })),
        React.createElement(ControlButton, { id: "pdf-zoom-reset", onMouseDown: function () { return dispatch(setZoomLevel(defaultZoomLevel)); }, disabled: zoomLevel === defaultZoomLevel },
            React.createElement(ResetZoomPDFIcon, { color: textPrimary, size: "70%" }))));
};
export default PDFControls;
var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  position: sticky;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  justify-content: flex-end;\n  padding: 8px;\n  background-color: ", ";\n  box-shadow: 0px 4px 15px -3px rgb(0 0 0 / 40%);\n\n  @media (max-width: 768px) {\n    padding: 6px;\n  }\n"], ["\n  display: flex;\n  position: sticky;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  justify-content: flex-end;\n  padding: 8px;\n  background-color: ", ";\n  box-shadow: 0px 4px 15px -3px rgb(0 0 0 / 40%);\n\n  @media (max-width: 768px) {\n    padding: 6px;\n  }\n"])), function (props) { return props.theme.tertiary; });
var ControlButton = styled(Button)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 30px;\n  height: 30px;\n  @media (max-width: 768px) {\n    width: 25px;\n    height: 25px;\n  }\n"], ["\n  width: 30px;\n  height: 30px;\n  @media (max-width: 768px) {\n    width: 25px;\n    height: 25px;\n  }\n"])));
var templateObject_1, templateObject_2;
