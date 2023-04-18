"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_hooks_1 = require("@testing-library/react-hooks");
var useRefresh_1 = require("./useRefresh");
var DELAY_IN_MS = 300;
jest.useFakeTimers();
describe('useRefresh', function () {
    it('should invoke refresh and return correct refreshing state', function () {
        var wait = function () {
            return new Promise(function (resolve) { return setTimeout(resolve, DELAY_IN_MS); });
        };
        var result = (0, react_hooks_1.renderHook)(function () { return (0, useRefresh_1.useRefresh)(wait); }).result;
        var spy = jest.spyOn(result.current, 'onRefresh');
        (0, react_hooks_1.act)(function () {
            result.current.onRefresh();
        });
        expect(result.current.isRefreshing).toBe(true);
        expect(spy).toHaveBeenCalledTimes(1);
        (0, react_hooks_1.act)(function () {
            jest.advanceTimersByTime(DELAY_IN_MS);
        });
        expect(result.current.isRefreshing).toBe(false);
    });
});
//# sourceMappingURL=useRefresh.test.js.map