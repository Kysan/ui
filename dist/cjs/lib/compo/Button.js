"use strict";
exports.__esModule = true;
exports.Button = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var Button = function (_a) {
    var className = _a.className, s = _a.s, children = _a.children, disabled = _a.disabled, props = tslib_1.__rest(_a, ["className", "s", "children", "disabled"]);
    var newProps = tslib_1.__assign(tslib_1.__assign({}, props), { disabled: disabled, className: " ".concat(disabled ? "bg-stone-600" : "bg-green-600", " p-1 text-white  rounded-md select-none  ").concat(s || "", " ").concat(className || "") });
    return react_1["default"].createElement("button", tslib_1.__assign({}, newProps), children);
};
exports.Button = Button;
//# sourceMappingURL=Button.js.map