"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useInteractionManager = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
function useInteractionManager() {
    var _a = (0, react_1.useState)(false), complete = _a[0], setComplete = _a[1];
    (0, react_1.useEffect)(function () {
        var interactionPromise = react_native_1.InteractionManager.runAfterInteractions(function () {
            setComplete(true);
        });
        return function () { return interactionPromise.cancel(); };
    }, []);
    return complete;
}
exports.useInteractionManager = useInteractionManager;
//# sourceMappingURL=useInteractionManager.js.map