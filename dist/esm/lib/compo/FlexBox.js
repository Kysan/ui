import { __assign, __rest } from "tslib";
import React from "react";
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
    var className = _a.className, s = _a.s, children = _a.children, props = __rest(_a, ["className", "s", "children"]);
    var newProps = __assign(__assign({}, props), { className: "flex ".concat(s, " ").concat(className) });
    return React.createElement("div", __assign({}, newProps), children);
};
var Row = Flex;
var Column = function (_a) {
    var className = _a.className, s = _a.s, children = _a.children, props = __rest(_a, ["className", "s", "children"]);
    var newProps = __assign(__assign({}, props), { className: "flex flex-col ".concat(s, " ").concat(className) });
    return React.createElement("div", __assign({}, newProps), children);
};
var Section = Column;
export { Flex, Row, Column, Section };
//# sourceMappingURL=FlexBox.js.map