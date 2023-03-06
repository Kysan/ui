"use strict";
exports.__esModule = true;
exports.TextArea = exports.Input = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var Input = function (_a) {
    var s = _a.s, className = _a.className, children = _a.children, props = tslib_1.__rest(_a, ["s", "className", "children"]);
    var newProps = tslib_1.__assign(tslib_1.__assign({}, props), { className: " rounded focus:outline-none text-black text-center ".concat(s || "", " ").concat(className || "") });
    return react_1["default"].createElement("input", tslib_1.__assign({}, newProps), children);
};
exports.Input = Input;
var TextArea = function (_a) {
    var s = _a.s, className = _a.className, props = tslib_1.__rest(_a, ["s", "className"]);
    // * faire en sorte qu'elle se resize nativement à la taille
    // * du texte exactement comme sur discord
    var newProps = tslib_1.__assign(tslib_1.__assign({}, props), { className: " rounded focus:outline-none text-black px-2 py-1 ".concat(s || "", " ").concat(className || "") });
    return react_1["default"].createElement("textarea", tslib_1.__assign({}, newProps));
};
exports.TextArea = TextArea;
//# sourceMappingURL=Input.js.map