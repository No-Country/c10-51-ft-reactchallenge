"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_hooks_1 = require("@testing-library/react-hooks");
var useLayout_1 = require("./useLayout");
describe('useLayout', function () {
    it('should return default state', function () {
        var result = (0, react_hooks_1.renderHook)(function () { return (0, useLayout_1.useLayout)(); }).result;
        expect(result.current.x).toBe(0);
        expect(result.current.y).toBe(0);
        expect(result.current.width).toBe(0);
        expect(result.current.height).toBe(0);
    });
    it('should update state when layout change', function () {
        var result = (0, react_hooks_1.renderHook)(function () { return (0, useLayout_1.useLayout)(); }).result;
        (0, react_hooks_1.act)(function () {
            var layout = { x: 1, y: 2, width: 3, height: 4 };
            result.current.onLayout({
                nativeEvent: { layout: layout },
            });
        });
        expect(result.current.x).toBe(1);
        expect(result.current.y).toBe(2);
        expect(result.current.width).toBe(3);
        expect(result.current.height).toBe(4);
    });
});
//# sourceMappingURL=useLayout.test.js.map