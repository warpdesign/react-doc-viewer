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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonSecondary = exports.ButtonPrimary = exports.LinkButton = exports.Button = exports.ButtonSecondaryStyle = exports.ButtonPrimaryStyle = void 0;
var styled_components_1 = __importStar(require("styled-components"));
exports.ButtonPrimaryStyle = (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), function (props) { return props.theme.textPrimary; });
exports.ButtonSecondaryStyle = (0, styled_components_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), function (props) { return props.theme.textSecondary; });
exports.Button = styled_components_1.default.button(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", "\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 35px;\n  height: 35px;\n  padding: 0;\n  margin: 0 0 0 5px;\n  text-align: center;\n  font-size: 18px;\n  border: 0;\n  outline: none;\n  cursor: pointer;\n  text-decoration: none;\n  border-radius: 35px;\n  opacity: ", ";\n  pointer-events: ", ";\n  background-color: transparent;\n\n  @media (max-width: 768px) {\n    width: 30px;\n    height: 30px;\n    font-size: 15px;\n  }\n"], ["\n  ", "\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 35px;\n  height: 35px;\n  padding: 0;\n  margin: 0 0 0 5px;\n  text-align: center;\n  font-size: 18px;\n  border: 0;\n  outline: none;\n  cursor: pointer;\n  text-decoration: none;\n  border-radius: 35px;\n  opacity: ", ";\n  pointer-events: ", ";\n  background-color: transparent;\n\n  @media (max-width: 768px) {\n    width: 30px;\n    height: 30px;\n    font-size: 15px;\n  }\n"])), exports.ButtonPrimaryStyle, function (props) { return (props.disabled ? 0.4 : 1); }, function (props) { return (props.disabled ? "none" : "all"); });
exports.LinkButton = styled_components_1.default.a(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 0;\n  outline: none;\n  cursor: pointer;\n  text-decoration: none;\n  color: ", ";\n\n  width: 35px;\n  height: 35px;\n  font-size: 18px;\n  @media (max-width: 768px) {\n    width: 30px;\n    height: 30px;\n    font-size: 15px;\n  }\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 0;\n  outline: none;\n  cursor: pointer;\n  text-decoration: none;\n  color: ", ";\n\n  width: 35px;\n  height: 35px;\n  font-size: 18px;\n  @media (max-width: 768px) {\n    width: 30px;\n    height: 30px;\n    font-size: 15px;\n  }\n"])), function (props) { return props.theme.textPrimary; });
exports.ButtonPrimary = (0, styled_components_1.default)(exports.Button)(templateObject_5 || (templateObject_5 = __makeTemplateObject([""], [""])));
exports.ButtonSecondary = (0, styled_components_1.default)(exports.Button)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), exports.ButtonSecondaryStyle);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
