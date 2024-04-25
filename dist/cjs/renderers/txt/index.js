"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var fileLoaders_1 = require("../../utils/fileLoaders");
var react_syntax_highlighter_1 = __importDefault(require("react-syntax-highlighter"));
var hljs_1 = require("react-syntax-highlighter/dist/esm/styles/hljs");
var mimeToLanguage = {
    'text/x-python-script': 'python',
    'text/x-perl-script': 'perl',
    'text/php': 'php',
    'text/javascript': 'javascript',
    'text/css': 'css',
    'text/x-sh': 'shell',
    'text/xml': 'xml',
    'cpp': 'cpp',
    'cs': 'cs',
    'go': 'go',
    'h': 'cpp',
    'handlebars': 'handlebars',
    'hsp': 'hsp',
    'java': 'java',
    'ini': 'ini',
    'rs': 'rust',
    'sass': 'sas',
    'sc': 'scala',
    'sql': 'sql',
    'swift': 'swift',
    'ts': 'typescript',
    'tsx': 'typescript',
    'jsx': 'javascript',
};
var TXTRenderer = function (_a) {
    var _b = _a.mainState, currentDocument = _b.currentDocument, config = _b.config;
    // Lots of code files have the mimeType 'text/plain' so here we first attempt to sniff the type
    // using the fileType (if different than 'text/plain') or we fallback to the file extension.
    // This allows to properly detect languages like java.
    var code = currentDocument === null || currentDocument === void 0 ? void 0 : currentDocument.fileData;
    var fileType = (currentDocument === null || currentDocument === void 0 ? void 0 : currentDocument.fileType) || '';
    var matches = currentDocument === null || currentDocument === void 0 ? void 0 : currentDocument.uri.match(/[^\\]*\.(\w+)$/);
    var extension = matches && matches[1] || '';
    var language = mimeToLanguage[fileType] || mimeToLanguage[extension] || 'text';
    var style = (config === null || config === void 0 ? void 0 : config.txtCodeTheme) === 'nord' ? hljs_1.nord : hljs_1.xcode;
    return (react_1.default.createElement(Container, { id: "code-renderer" }, code.length ? (react_1.default.createElement(react_syntax_highlighter_1.default, { wrapLongLines: true, language: language, style: style }, code)) : null));
};
exports.default = TXTRenderer;
TXTRenderer.fileTypes = Object.keys(mimeToLanguage);
TXTRenderer.fileTypes.push('text/plain');
TXTRenderer.weight = 0;
TXTRenderer.fileLoader = fileLoaders_1.textFileLoader;
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  padding: 30px;\n"], ["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  padding: 30px;\n"])));
var templateObject_1;
