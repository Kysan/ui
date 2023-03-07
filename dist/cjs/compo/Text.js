"use strict";
exports.__esModule = true;
exports.Span = exports.Heading = exports.Text = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var Text = function (_a) {
    var className = _a.className, s = _a.s, children = _a.children, props = tslib_1.__rest(_a, ["className", "s", "children"]);
    var newProps = tslib_1.__assign(tslib_1.__assign({}, props), { className: "Text ".concat(s || "", " ").concat(className || "") });
    return react_1["default"].createElement("p", tslib_1.__assign({}, newProps), children);
};
exports.Text = Text;
var Heading = function (_a) {
    var className = _a.className, s = _a.s, children = _a.children, props = tslib_1.__rest(_a, ["className", "s", "children"]);
    var newProps = tslib_1.__assign(tslib_1.__assign({}, props), { className: "Heading ".concat(s || "", " ").concat(className || "") });
    return react_1["default"].createElement("h2", tslib_1.__assign({}, newProps), children);
};
exports.Heading = Heading;
var Span = function (_a) {
    var className = _a.className, s = _a.s, children = _a.children, props = tslib_1.__rest(_a, ["className", "s", "children"]);
    var newProps = tslib_1.__assign(tslib_1.__assign({}, props), { className: "Span ".concat(s || "", " ").concat(className || "") });
    return react_1["default"].createElement("h2", tslib_1.__assign({}, newProps), children);
};
exports.Span = Span;
//# sourceMappingURL=Text.js.map