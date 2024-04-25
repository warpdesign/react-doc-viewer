"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWindowSize = void 0;
var react_1 = require("react");
function debounce(func, wait) {
    var timeout;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            func.apply(void 0, args);
        }, wait);
    };
}
var useWindowSize = function () {
    var _a = (0, react_1.useState)(function () { return ({
        width: window.innerWidth,
        height: window.innerHeight,
    }); }), windowSize = _a[0], setWindowSize = _a[1];
    (0, react_1.useEffect)(function () {
        var handler = debounce(function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }, 200);
        window.addEventListener("resize", handler);
        return function () { return window.removeEventListener("resize", handler); };
    }, []);
    return windowSize;
};
exports.useWindowSize = useWindowSize;
