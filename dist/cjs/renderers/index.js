"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoRenderer = exports.CSVRenderer = exports.TXTRenderer = exports.ImagesRenderer = exports.PDFRenderer = exports.HTMLRenderer = exports.DocViewerRenderers = void 0;
var html_1 = __importDefault(require("./html"));
exports.HTMLRenderer = html_1.default;
var pdf_1 = __importDefault(require("./pdf"));
exports.PDFRenderer = pdf_1.default;
var images_1 = __importDefault(require("./images"));
exports.ImagesRenderer = images_1.default;
var txt_1 = __importDefault(require("./txt"));
exports.TXTRenderer = txt_1.default;
var csv_1 = __importDefault(require("./csv"));
exports.CSVRenderer = csv_1.default;
var video_1 = __importDefault(require("./video"));
exports.VideoRenderer = video_1.default;
exports.DocViewerRenderers = [
    html_1.default,
    pdf_1.default,
    images_1.default,
    txt_1.default,
    csv_1.default,
    video_1.default,
];
