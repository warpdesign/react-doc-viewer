"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var styled_components_1 = __importStar(require("styled-components"));
var common_1 = require("../../../components/common");
var state_1 = require("../state");
var actions_1 = require("../state/actions");
var useTranslation_1 = require("../../../hooks/useTranslation");
var icons_1 = require("./icons");
var PDFPagination_1 = __importDefault(require("./PDFPagination"));
var PDFControls = function () {
    var t = (0, useTranslation_1.useTranslation)().t;
    var _a = (0, react_1.useContext)(state_1.PDFContext), _b = _a.state, paginated = _b.paginated, zoomLevel = _b.zoomLevel, numPages = _b.numPages, zoomJump = _b.zoomJump, defaultZoomLevel = _b.defaultZoomLevel, dispatch = _a.dispatch;
    var textPrimary = (0, react_1.useContext)(styled_components_1.ThemeContext).textPrimary;
    return (react_1.default.createElement(Container, { id: "pdf-controls" },
        paginated && numPages > 1 && react_1.default.createElement(PDFPagination_1.default, null),
        react_1.default.createElement(ControlButton, { id: "pdf-zoom-out", onMouseDown: function () { return dispatch((0, actions_1.setZoomLevel)(zoomLevel - zoomJump)); } },
            react_1.default.createElement(icons_1.ZoomOutPDFIcon, { color: textPrimary, size: "80%" })),
        react_1.default.createElement(ControlButton, { id: "pdf-zoom-in", onMouseDown: function () { return dispatch((0, actions_1.setZoomLevel)(zoomLevel + zoomJump)); } },
            react_1.default.createElement(icons_1.ZoomInPDFIcon, { color: textPrimary, size: "80%" })),
        react_1.default.createElement(ControlButton, { id: "pdf-zoom-reset", onMouseDown: function () { return dispatch((0, actions_1.setZoomLevel)(defaultZoomLevel)); }, disabled: zoomLevel === defaultZoomLevel },
            react_1.default.createElement(icons_1.ResetZoomPDFIcon, { color: textPrimary, size: "70%" }))));
};
exports.default = PDFControls;
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  position: sticky;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  justify-content: flex-end;\n  padding: 8px;\n  background-color: ", ";\n  box-shadow: 0px 4px 15px -3px rgb(0 0 0 / 40%);\n\n  @media (max-width: 768px) {\n    padding: 6px;\n  }\n"], ["\n  display: flex;\n  position: sticky;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  justify-content: flex-end;\n  padding: 8px;\n  background-color: ", ";\n  box-shadow: 0px 4px 15px -3px rgb(0 0 0 / 40%);\n\n  @media (max-width: 768px) {\n    padding: 6px;\n  }\n"])), function (props) { return props.theme.tertiary; });
var ControlButton = (0, styled_components_1.default)(common_1.Button)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 30px;\n  height: 30px;\n  @media (max-width: 768px) {\n    width: 25px;\n    height: 25px;\n  }\n"], ["\n  width: 30px;\n  height: 30px;\n  @media (max-width: 768px) {\n    width: 25px;\n    height: 25px;\n  }\n"])));
var templateObject_1, templateObject_2;
