"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDeviceOrientation = void 0;
var react_native_1 = require("react-native");
function useDeviceOrientation() {
    var _a = (0, react_native_1.useWindowDimensions)(), width = _a.width, height = _a.height;
    if (width >= height) {
        return 'landscape';
    }
    return 'portrait';
}
exports.useDeviceOrientation = useDeviceOrientation;
//# sourceMappingURL=useDeviceOrientation.js.map