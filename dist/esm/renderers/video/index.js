var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from "react";
import styled from "styled-components";
var VideoRenderer = function (_a) {
    var currentDocument = _a.mainState.currentDocument;
    if (!currentDocument)
        return null;
    return (React.createElement(Container, { id: "video-renderer" },
        React.createElement(Video, { controls: true, src: currentDocument.uri, autoPlay: true })));
};
export default VideoRenderer;
VideoRenderer.fileTypes = ["video/mp4", "video/quicktime", "video/x-msvideo"];
VideoRenderer.weight = 0;
// Define a fake file loader for videos: the video tag will automatically stream
// the video so we don't need to load the whole (!) file before.
VideoRenderer.fileLoader = function (_a) {
    var fileLoaderComplete = _a.fileLoaderComplete;
    fileLoaderComplete({
        result: null
    });
};
var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n"], ["\n  width: 100%;\n"])));
var Video = styled.video(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  border: 0;\n"], ["\n  width: 100%;\n  height: 100%;\n  border: 0;\n"])));
var templateObject_1, templateObject_2;
