var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React, { useCallback, useContext } from "react";
import styled, { ThemeContext, keyframes } from "styled-components";
import { setRendererRect } from "../store/actions";
import { getFileName } from "../utils/getFileName";
import { useDocumentLoader } from "../hooks/useDocumentLoader";
import { useWindowSize } from "../hooks/useWindowSize";
import { LinkButton } from "./common";
import { LoadingIcon } from "./icons";
import { LoadingTimeout } from "./LoadingTimout";
import { useTranslation } from "../hooks/useTranslation";
var Contents = function (_a) {
    var _b, _c, _d;
    var documents = _a.documents, documentLoading = _a.documentLoading, config = _a.config, currentDocument = _a.currentDocument, fileName = _a.fileName, CurrentRenderer = _a.CurrentRenderer, state = _a.state, t = _a.t;
    var textTertiary = useContext(ThemeContext).textTertiary;
    if (!documents.length) {
        return React.createElement("div", { id: "no-documents" });
    }
    else if (documentLoading) {
        if (config && ((_b = config === null || config === void 0 ? void 0 : config.loadingRenderer) === null || _b === void 0 ? void 0 : _b.overrideComponent)) {
            var OverrideComponent = config.loadingRenderer.overrideComponent;
            return (React.createElement(LoadingTimeout, null,
                React.createElement(OverrideComponent, { document: currentDocument, fileName: fileName })));
        }
        return (React.createElement(LoadingTimeout, null,
            React.createElement(LoadingContainer, { id: "loading-renderer", "data-testid": "loading-renderer" },
                React.createElement(LoadingIconContainer, null,
                    React.createElement(LoadingIcon, { color: textTertiary, size: 40 })))));
    }
    else {
        if (CurrentRenderer) {
            return React.createElement(CurrentRenderer, { mainState: state });
        }
        else {
            // we get here if:
            // - there was a problem fetching the file type (access denied, cors errors,..)
            // - there is no rednderer for current file type
            // in *both* cases we want to show the no Renderer component
            if (config && ((_c = config === null || config === void 0 ? void 0 : config.noRenderer) === null || _c === void 0 ? void 0 : _c.overrideComponent)) {
                var OverrideComponent = config.noRenderer.overrideComponent;
                return (React.createElement(OverrideComponent, { document: currentDocument, fileName: fileName }));
            }
            return (React.createElement("div", { id: "no-renderer", "data-testid": "no-renderer" },
                t("noRendererMessage", {
                    fileType: (_d = currentDocument === null || currentDocument === void 0 ? void 0 : currentDocument.fileType) !== null && _d !== void 0 ? _d : "",
                }),
                React.createElement(DownloadButton, { id: "no-renderer-download", href: currentDocument === null || currentDocument === void 0 ? void 0 : currentDocument.uri, download: currentDocument === null || currentDocument === void 0 ? void 0 : currentDocument.uri }, t("downloadButtonLabel"))));
        }
    }
};
export var ProxyRenderer = function () {
    var _a;
    var _b = useDocumentLoader(), state = _b.state, dispatch = _b.dispatch, CurrentRenderer = _b.CurrentRenderer;
    var documents = state.documents, documentLoading = state.documentLoading, currentDocument = state.currentDocument, config = state.config;
    var size = useWindowSize();
    var t = useTranslation().t;
    var containerRef = useCallback(function (node) {
        node && dispatch(setRendererRect(node === null || node === void 0 ? void 0 : node.getBoundingClientRect()));
    }, [size]);
    var fileName = getFileName(currentDocument, ((_a = config === null || config === void 0 ? void 0 : config.header) === null || _a === void 0 ? void 0 : _a.retainURLParams) || false);
    return (React.createElement(Container, { id: "proxy-renderer", "data-testid": "proxy-renderer", ref: containerRef },
        React.createElement(Contents, { state: state, documents: documents, documentLoading: documentLoading, config: config, currentDocument: currentDocument, fileName: fileName, CurrentRenderer: CurrentRenderer, t: t })));
};
var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex: 1;\n  overflow-y: auto;\n  max-width: 100%;\n"], ["\n  display: flex;\n  flex: 1;\n  overflow-y: auto;\n  max-width: 100%;\n"])));
var LoadingContainer = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex: 1;\n  height: 75px;\n  align-items: center;\n  justify-content: center;\n"], ["\n  display: flex;\n  flex: 1;\n  height: 75px;\n  align-items: center;\n  justify-content: center;\n"])));
var spinAnim = keyframes(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var LoadingIconContainer = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  animation-name: ", ";\n  animation-duration: 4s;\n  animation-timing-function: linear;\n  animation-iteration-count: infinite;\n"], ["\n  animation-name: ", ";\n  animation-duration: 4s;\n  animation-timing-function: linear;\n  animation-iteration-count: infinite;\n"])), spinAnim);
var DownloadButton = styled(LinkButton)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  width: 130px;\n  height: 30px;\n  background-color: ", ";\n  @media (max-width: 768px) {\n    width: 125px;\n    height: 25px;\n  }\n"], ["\n  width: 130px;\n  height: 30px;\n  background-color: ", ";\n  @media (max-width: 768px) {\n    width: 125px;\n    height: 25px;\n  }\n"])), function (props) { return props.theme.primary; });
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
