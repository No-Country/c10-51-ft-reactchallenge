"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_hooks_1 = require("@testing-library/react-hooks");
var react_native_1 = require("react-native");
var useAppState_1 = require("./useAppState");
jest.mock('react-native', function () { return ({
    AppState: {
        currentState: 'mock-currentState',
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
    },
}); });
describe('useAppState', function () {
    var addEventListenerMock = react_native_1.AppState.addEventListener;
    var createEmitAppStateChange = function () {
        var listener;
        addEventListenerMock.mockImplementationOnce(function (_, fn) {
            listener = fn;
        });
        return function (newStatus) { return listener(newStatus); };
    };
    it('should return current state by default', function () {
        var result = (0, react_hooks_1.renderHook)(function () { return (0, useAppState_1.useAppState)(); }).result;
        expect(result.current).toBe(react_native_1.AppState.currentState);
    });
    it('should update state when it change', function () {
        var newStatus = 'background';
        var emit = createEmitAppStateChange();
        var result = (0, react_hooks_1.renderHook)(function () { return (0, useAppState_1.useAppState)(); }).result;
        var initialStatus = result.current;
        (0, react_hooks_1.act)(function () {
            emit(newStatus);
        });
        var statusAfterUpdate = result.current;
        expect({ initialStatus: initialStatus, statusAfterUpdate: statusAfterUpdate }).toEqual({
            initialStatus: react_native_1.AppState.currentState,
            statusAfterUpdate: newStatus,
        });
    });
});
//# sourceMappingURL=useAppState.test.js.map