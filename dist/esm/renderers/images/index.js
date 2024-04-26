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
import styled from "styled-components";
import ImageProxyRenderer from "../imageProxy";
var StyledImageRenderer = styled(ImageProxyRenderer)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex: 1;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  background-color: white;\n  background-image: linear-gradient(45deg, #e0e0e0 25%, transparent 25%),\n    linear-gradient(-45deg, #e0e0e0 25%, transparent 25%),\n    linear-gradient(45deg, transparent 75%, #e0e0e0 75%),\n    linear-gradient(-45deg, transparent 75%, #e0e0e0 75%);\n  background-size: 20px 20px;\n  background-position:\n    0 0,\n    0 10px,\n    10px -10px,\n    -10px 0px;\n"], ["\n  display: flex;\n  flex: 1;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  background-color: white;\n  background-image: linear-gradient(45deg, #e0e0e0 25%, transparent 25%),\n    linear-gradient(-45deg, #e0e0e0 25%, transparent 25%),\n    linear-gradient(45deg, transparent 75%, #e0e0e0 75%),\n    linear-gradient(-45deg, transparent 75%, #e0e0e0 75%);\n  background-size: 20px 20px;\n  background-position:\n    0 0,\n    0 10px,\n    10px -10px,\n    -10px 0px;\n"])));
var ImagesRenderer = function (props) { return React.createElement(StyledImageRenderer, __assign({}, props)); };
ImagesRenderer.fileTypes = ["png", "gif", "jpg", "jpeg", "bmp", "webp", "svg", "image/png", "image/gif", "image/jpg", "image/jpeg", "image/bmp", "image/webp", "image/svg+xml"];
ImagesRenderer.weight = 0;
ImagesRenderer.fileLoader = function (_a) {
    var fileLoaderComplete = _a.fileLoaderComplete, documentURI = _a.documentURI;
    var img = new Image();
    img.onload = function () {
        fileLoaderComplete({
            result: null
        });
    };
    img.src = documentURI;
};
export default ImagesRenderer;
var templateObject_1;
