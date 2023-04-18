"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var useBackHandler_1 = require("./useBackHandler");
var react_hooks_1 = require("@testing-library/react-hooks");
var react_native_1 = require("react-native");
jest.mock('react-native', function () { return ({
    BackHandler: {
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
    },
}); });
describe('useBackHandler', function () {
    var addEventListenerMock = react_native_1.BackHandler.addEventListener;
    var removeEventListenerMock = react_native_1.BackHandler.removeEventListener;
    beforeEach(function () {
        jest.clearAllMocks();
    });
    it('should add back press listener on mount', function () {
        var handler = jest.fn();
        (0, react_hooks_1.renderHook)(function (props) { return (0, useBackHandler_1.useBackHandler)(props.handler); }, {
            initialProps: { handler: handler },
        });
        expect(addEventListenerMock).toBeCalledTimes(1);
        expect(addEventListenerMock).toBeCalledWith('hardwareBackPress', handler);
    });
    it('should resubscribe when passed handler will change', function () {
        var handler = jest.fn();
        var handler2 = jest.fn();
        var rerender = (0, react_hooks_1.renderHook)(function (props) { return (0, useBackHandler_1.useBackHandler)(props.handler); }, {
            initialProps: { handler: handler },
        }).rerender;
        expect(addEventListenerMock).toBeCalledWith('hardwareBackPress', handler);
        rerender({ handler: handler2 });
        expect(removeEventListenerMock).toBeCalledWith('hardwareBackPress', handler);
        expect(addEventListenerMock).toBeCalledWith('hardwareBackPress', handler2);
    });
    it('should remove back press listener on unmount', function () {
        var handler = jest.fn();
        var unmount = (0, react_hooks_1.renderHook)(function (props) { return (0, useBackHandler_1.useBackHandler)(props.handler); }, {
            initialProps: { handler: handler },
        }).unmount;
        expect(removeEventListenerMock).toBeCalledTimes(0);
        unmount();
        expect(removeEventListenerMock).toBeCalledTimes(1);
        expect(removeEventListenerMock).toBeCalledWith('hardwareBackPress', handler);
    });
});
//# sourceMappingURL=useBackHandler.test.js.map