"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDocumentLoader = void 0;
var react_1 = require("react");
var DocViewerProvider_1 = require("../store/DocViewerProvider");
var actions_1 = require("../store/actions");
var fileLoaders_1 = require("../utils/fileLoaders");
var useRendererSelector_1 = require("./useRendererSelector");
/**
 * Custom Hook for loading the current document into context
 */
var useDocumentLoader = function () {
    var _a = (0, react_1.useContext)(DocViewerProvider_1.DocViewerContext), state = _a.state, dispatch = _a.dispatch;
    var currentFileNo = state.currentFileNo, currentDocument = state.currentDocument, prefetchMethod = state.prefetchMethod;
    var CurrentRenderer = (0, useRendererSelector_1.useRendererSelector)().CurrentRenderer;
    var documentURI = (currentDocument === null || currentDocument === void 0 ? void 0 : currentDocument.uri) || "";
    // Sniff contentType using HEAD fetch
    (0, react_1.useEffect)(function () {
        if (!currentDocument)
            return;
        if (currentDocument.fileType !== undefined)
            return;
        var controller = new AbortController();
        var signal = controller.signal;
        // Some fetch requests may hang indefinitely:
        // make sure to abort the call if it takes a too long time.
        // After a long delay we abort the request to prevent
        // getting stuck on the loading screen
        var timeout = setTimeout(function () { return controller.abort(); }, 500);
        fetch(documentURI, {
            method: prefetchMethod || documentURI.startsWith("blob:") ? "GET" : "HEAD",
            signal: signal,
            headers: state === null || state === void 0 ? void 0 : state.requestHeaders,
        })
            .then(function (response) {
            var contentTypeRaw = response.headers.get("content-type");
            var contentTypes = (contentTypeRaw === null || contentTypeRaw === void 0 ? void 0 : contentTypeRaw.split(";")) || [];
            var contentType = contentTypes.length ? contentTypes[0] : undefined;
            clearTimeout(timeout);
            dispatch((0, actions_1.updateCurrentDocument)(__assign(__assign({}, currentDocument), { fileType: contentType || undefined })));
        })
            .catch(function (error) {
            // Don't get stuck with the loading component
            // if we can't fetch the filetype: we'll show
            // the no renderer component instead
            dispatch((0, actions_1.setDocumentLoading)(false));
            throw error;
        });
        return function () {
            controller.abort();
            clearTimeout(timeout);
        };
    }, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentFileNo, documentURI, currentDocument]);
    // File changed and/or renderer changed:
    // fetch entire file and update current document
    (0, react_1.useEffect)(function () {
        var _a;
        if (!currentDocument || CurrentRenderer === undefined)
            return;
        var controller = new AbortController();
        var signal = controller.signal;
        var fileLoaderComplete = function (fileReader) {
            if (!currentDocument || !fileReader) {
                dispatch((0, actions_1.setDocumentLoading)(false));
                return;
            }
            var updatedDocument = __assign({}, currentDocument);
            if (fileReader.result !== null) {
                updatedDocument.fileData = fileReader.result;
            }
            dispatch((0, actions_1.updateCurrentDocument)(updatedDocument));
            dispatch((0, actions_1.setDocumentLoading)(false));
        };
        var loaderFunctionProps = {
            documentURI: documentURI,
            signal: signal,
            fileLoaderComplete: fileLoaderComplete,
            headers: state === null || state === void 0 ? void 0 : state.requestHeaders,
        };
        if (CurrentRenderer === null) {
            dispatch((0, actions_1.setDocumentLoading)(false));
        }
        else if (CurrentRenderer.fileLoader !== undefined) {
            (_a = CurrentRenderer.fileLoader) === null || _a === void 0 ? void 0 : _a.call(CurrentRenderer, loaderFunctionProps);
        }
        else {
            (0, fileLoaders_1.defaultFileLoader)(loaderFunctionProps);
        }
        return function () {
            controller.abort();
        };
        /* eslint-disable react-hooks/exhaustive-deps */
    }, [CurrentRenderer, currentFileNo]);
    return { state: state, dispatch: dispatch, CurrentRenderer: CurrentRenderer };
};
exports.useDocumentLoader = useDocumentLoader;
