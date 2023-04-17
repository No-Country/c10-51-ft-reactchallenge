"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var useInteractionManager_1 = require("./useInteractionManager");
var react_hooks_1 = require("@testing-library/react-hooks");
var react_native_1 = require("react-native");
jest.mock('react-native', function () { return ({
    InteractionManager: {
        runAfterInteractions: jest.fn(),
    },
}); });
describe('useInteractionManager', function () {
    var runAfterInteractionsMock = react_native_1.InteractionManager.runAfterInteractions;
    it('should return false by default', function () {
        var result = (0, react_hooks_1.renderHook)(function () { return (0, useInteractionManager_1.useInteractionManager)(); }).result;
        expect(result.current).toBe(false);
    });
    it('should return true after all interactions have completed', function () {
        var emitAfterInteractions = function () { };
        runAfterInteractionsMock.mockImplementationOnce(function (cb) {
            emitAfterInteractions = cb;
        });
        var result = (0, react_hooks_1.renderHook)(function () { return (0, useInteractionManager_1.useInteractionManager)(); }).result;
        expect(result.current).toBe(false);
        (0, react_hooks_1.act)(function () {
            emitAfterInteractions();
        });
        expect(result.current).toBe(true);
    });
});
//# sourceMappingURL=useInteractionManager.test.js.map