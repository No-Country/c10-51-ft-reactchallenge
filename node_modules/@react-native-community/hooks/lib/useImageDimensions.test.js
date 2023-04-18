"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var useImageDimensions_1 = require("./useImageDimensions");
var react_hooks_1 = require("@testing-library/react-hooks");
var react_native_1 = require("react-native");
jest.mock('react-native', function () { return ({
    Image: {
        resolveAssetSource: jest.fn().mockReturnValue({ width: 0, height: 0 }),
        getSize: jest.fn(),
    },
}); });
describe('useImageDimensions', function () {
    describe('external images', function () {
        var mockSource = { uri: 'test' };
        var getSizeMock = react_native_1.Image.getSize;
        it('should invoke getSize with with passed uri', function () {
            (0, react_hooks_1.renderHook)(function () { return (0, useImageDimensions_1.useImageDimensions)(mockSource); });
            expect(getSizeMock).toBeCalledWith(mockSource.uri, expect.any(Function), expect.any(Function));
        });
        it('should return error when cannot get image size', function () {
            var error = new Error('Ops...');
            getSizeMock.mockImplementationOnce(function (_, onSuccess, onError) {
                onError(error);
            });
            var result = (0, react_hooks_1.renderHook)(function () { return (0, useImageDimensions_1.useImageDimensions)(mockSource); }).result;
            expect(result.current).toEqual({
                loading: false,
                error: error,
            });
        });
        it('should return dimensions when successfully get image size', function () {
            var width = 111;
            var height = 222;
            var emitOnSuccess = (function () { });
            getSizeMock.mockImplementationOnce(function (_, onSuccess) {
                emitOnSuccess = onSuccess;
            });
            var result = (0, react_hooks_1.renderHook)(function () { return (0, useImageDimensions_1.useImageDimensions)(mockSource); }).result;
            expect(result.current).toEqual({ loading: true });
            (0, react_hooks_1.act)(function () {
                emitOnSuccess(width, height);
            });
            expect(result.current).toEqual({
                loading: false,
                dimensions: { width: width, height: height, aspectRatio: 0.5 },
            });
        });
        it('should update image size when source change', function () {
            var emitOnSuccess = (function () { });
            getSizeMock.mockImplementation(function (_, onSuccess) {
                emitOnSuccess = onSuccess;
            });
            var _a = (0, react_hooks_1.renderHook)(function (props) { return (0, useImageDimensions_1.useImageDimensions)(props.source); }, { initialProps: { source: mockSource } }), result = _a.result, rerender = _a.rerender;
            expect(result.current).toEqual({ loading: true });
            (0, react_hooks_1.act)(function () { return emitOnSuccess(1, 2); });
            expect(result.current).toEqual({
                loading: false,
                dimensions: { width: 1, height: 2, aspectRatio: 0.5 },
            });
            rerender({ source: { uri: 'new-uri' } });
            expect(result.current).toEqual({ loading: true });
            (0, react_hooks_1.act)(function () { return emitOnSuccess(3, 4); });
            expect(result.current).toEqual({
                loading: false,
                dimensions: { width: 3, height: 4, aspectRatio: 0.75 },
            });
        });
    });
    describe('bundled up images', function () {
        var mockImage = 0; // typeof require('img.png') === 'number'
        var getResolveAssetSource = react_native_1.Image.resolveAssetSource;
        it('should invoke resolveAssetSource with passed image', function () {
            (0, react_hooks_1.renderHook)(function () { return (0, useImageDimensions_1.useImageDimensions)(mockImage); });
            expect(getResolveAssetSource).toBeCalledWith(mockImage);
        });
        it('should return image dimensions', function () {
            var width = 111;
            var height = 222;
            getResolveAssetSource.mockReturnValueOnce({ width: width, height: height });
            var result = (0, react_hooks_1.renderHook)(function () { return (0, useImageDimensions_1.useImageDimensions)(mockImage); }).result;
            expect(result.current).toEqual({
                loading: false,
                dimensions: {
                    width: width,
                    height: height,
                    aspectRatio: 0.5,
                },
            });
        });
        it('should return an error when unexpected error happened', function () {
            var error = new Error('Cannot find image');
            getResolveAssetSource.mockImplementationOnce(function () {
                throw error;
            });
            var result = (0, react_hooks_1.renderHook)(function () { return (0, useImageDimensions_1.useImageDimensions)(mockImage); }).result;
            expect(result.current).toEqual({
                loading: false,
                error: error,
            });
        });
    });
    it('should return an error when pass non image', function () {
        var nonImage = 'Ops )))';
        var result = (0, react_hooks_1.renderHook)(function () {
            return (0, useImageDimensions_1.useImageDimensions)(
            // @ts-expect-error - non image
            nonImage);
        }).result;
        expect(result.current).toEqual({
            loading: false,
            error: expect.any(Error),
        });
    });
});
//# sourceMappingURL=useImageDimensions.test.js.map