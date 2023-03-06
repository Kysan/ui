"use strict";
exports.__esModule = true;
exports.Section = exports.Column = exports.Row = exports.Flex = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
/**
 * I made this because I found the current <div> too ugly
 * it's basicaly an alias
 * that will replace
 * ```js
 * <div style={{ display: 'flex' }}></div>
 * ```
 * by
 * ```jsx
 * <Flex s="x"></Flex>
 * ```
 */
var Flex = function (_a) {
    var className = _a.className, s = _a.s, children = _a.children, props = tslib_1.__rest(_a, ["className", "s", "children"]);
    var newProps = tslib_1.__assign(tslib_1.__assign({}, props), { className: "flex ".concat(s, " ").concat(className) });
    return react_1["default"].createElement("div", tslib_1.__assign({}, newProps), children);
};
exports.Flex = Flex;
var Row = Flex;
exports.Row = Row;
var Column = function (_a) {
    var className = _a.className, s = _a.s, children = _a.children, props = tslib_1.__rest(_a, ["className", "s", "children"]);
    var newProps = tslib_1.__assign(tslib_1.__assign({}, props), { className: "flex flex-col ".concat(s, " ").concat(className) });
    return react_1["default"].createElement("div", tslib_1.__assign({}, newProps), children);
};
exports.Column = Column;
var Section = Column;
exports.Section = Section;
//# sourceMappingURL=FlexBox.js.map