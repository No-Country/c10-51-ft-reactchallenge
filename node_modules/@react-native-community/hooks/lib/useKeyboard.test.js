"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var useKeyboard_1 = require("./useKeyboard");
var react_hooks_1 = require("@testing-library/react-hooks");
var react_native_1 = require("react-native");
describe('useKeyboard', function () {
    var mockCoords = { screenX: 0, screenY: 0, width: 0, height: 0 };
    var emitKeyboardEvent = function (_a) {
        var _b = _a.show, show = _b === void 0 ? true : _b, _c = _a.startCoordinates, startCoordinates = _c === void 0 ? mockCoords : _c, _d = _a.endCoordinates, endCoordinates = _d === void 0 ? mockCoords : _d;
        var mockEvent = { startCoordinates: startCoordinates, endCoordinates: endCoordinates };
        react_native_1.Keyboard.emit(show ? 'keyboardDidShow' : 'keyboardDidHide', show ? mockEvent : null);
    };
    describe('setKeyboardHeight: number', function () {
        it('keyboard height is zero by default', function () {
            var result = (0, react_hooks_1.renderHook)(function () { return (0, useKeyboard_1.useKeyboard)(); }).result;
            expect(result.current.keyboardHeight).toBe(0);
        });
        it('should update keyboard height when keyboard will open', function () {
            var height = 123;
            var result = (0, react_hooks_1.renderHook)(function () { return (0, useKeyboard_1.useKeyboard)(); }).result;
            (0, react_hooks_1.act)(function () {
                emitKeyboardEvent({ show: true, endCoordinates: __assign(__assign({}, mockCoords), { height: height }) });
            });
            expect(result.current.keyboardHeight).toBe(height);
        });
        it('should reset keyboard height when keyboard will close', function () {
            var height = 123;
            var result = (0, react_hooks_1.renderHook)(function () { return (0, useKeyboard_1.useKeyboard)(); }).result;
            (0, react_hooks_1.act)(function () {
                emitKeyboardEvent({ show: true, endCoordinates: __assign(__assign({}, mockCoords), { height: height }) });
            });
            expect(result.current.keyboardHeight).toBe(height);
            (0, react_hooks_1.act)(function () {
                emitKeyboardEvent({ show: false });
            });
            expect(result.current.keyboardHeight).toBe(0);
        });
    });
    describe('keyboardShown: boolean', function () {
        it('keyboard closed by default', function () {
            var result = (0, react_hooks_1.renderHook)(function () { return (0, useKeyboard_1.useKeyboard)(); }).result;
            expect(result.current.keyboardShown).toBe(false);
        });
        it('should set keyboardShown when keyboard will open', function () {
            var result = (0, react_hooks_1.renderHook)(function () { return (0, useKeyboard_1.useKeyboard)(); }).result;
            var initial = result.current.keyboardShown;
            (0, react_hooks_1.act)(function () {
                emitKeyboardEvent({ show: true });
            });
            var afterOpen = result.current.keyboardShown;
            expect({ initial: initial, afterOpen: afterOpen }).toEqual({ initial: false, afterOpen: true });
        });
        it('should reset keyboardShown when keyboard will close', function () {
            var result = (0, react_hooks_1.renderHook)(function () { return (0, useKeyboard_1.useKeyboard)(); }).result;
            var initial = result.current.keyboardShown;
            (0, react_hooks_1.act)(function () {
                emitKeyboardEvent({ show: true });
            });
            var afterOpen = result.current.keyboardShown;
            (0, react_hooks_1.act)(function () {
                emitKeyboardEvent({ show: false });
            });
            var afterClose = result.current.keyboardShown;
            expect({ initial: initial, afterOpen: afterOpen, afterClose: afterClose }).toEqual({
                initial: false,
                afterOpen: true,
                afterClose: false,
            });
        });
    });
});
//# sourceMappingURL=useKeyboard.test.js.map