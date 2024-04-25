var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import papaparse from "papaparse";
import { textFileLoader } from "../../utils/fileLoaders";
var CSVRenderer = function (_a) {
    var _b = _a.mainState, currentDocument = _b.currentDocument, config = _b.config;
    var _c = useState([]), rows = _c[0], setRows = _c[1];
    useEffect(function () {
        var _a, _b;
        if (currentDocument === null || currentDocument === void 0 ? void 0 : currentDocument.fileData) {
            var text = currentDocument.fileData;
            var parseResult = papaparse.parse(text.trim(), {
                delimiter: (_a = config === null || config === void 0 ? void 0 : config.csvDelimiter) !== null && _a !== void 0 ? _a : ",",
            });
            if (!((_b = parseResult.errors) === null || _b === void 0 ? void 0 : _b.length) && parseResult.data) {
                setRows(parseResult.data);
            }
        }
    }, [currentDocument, config === null || config === void 0 ? void 0 : config.csvDelimiter]);
    if (!rows.length) {
        return null;
    }
    return (React.createElement(Container, null,
        React.createElement(Table, null,
            React.createElement("thead", null,
                React.createElement("tr", null, rows[0].map(function (column, i) { return (React.createElement("th", { key: "head_".concat(i) }, column)); }))),
            React.createElement("tbody", null, rows.map(function (row, i) { return (i ? React.createElement("tr", { key: "row_".concat(i) }, row.map(function (column, j) { return (React.createElement("td", { key: "col_".concat(i, "_").concat(j) }, column)); }))
                : null); })))));
};
export default CSVRenderer;
CSVRenderer.fileTypes = ["csv", "text/csv"];
CSVRenderer.weight = 0;
CSVRenderer.fileLoader = textFileLoader;
var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n"], ["\n  width: 100%;\n"])));
var Table = styled.table(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  text-align: left;\n  border-collapse: collapse;\n  border: 1px solid ", ";\n  background-color: ", ";\n\n  td {\n    white-space: nowrap;\n  }\n\n  th,\n  td {\n    padding: 5px 10px;\n    border: 1px solid ", ";\n  }\n\n  tr {\n    vertical-align: top;\n  }\n"], ["\n  width: 100%;\n  text-align: left;\n  border-collapse: collapse;\n  border: 1px solid ", ";\n  background-color: ", ";\n\n  td {\n    white-space: nowrap;\n  }\n\n  th,\n  td {\n    padding: 5px 10px;\n    border: 1px solid ", ";\n  }\n\n  tr {\n    vertical-align: top;\n  }\n"])), function (props) { return props.theme.textTertiary; }, function (props) { return props.theme.tertiary; }, function (props) { return props.theme.textTertiary; });
var templateObject_1, templateObject_2;
