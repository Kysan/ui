import { __assign, __rest } from "tslib";
import React from "react";
var Button = function (_a) {
    var className = _a.className, s = _a.s, children = _a.children, disabled = _a.disabled, props = __rest(_a, ["className", "s", "children", "disabled"]);
    var newProps = __assign(__assign({}, props), { disabled: disabled, className: " ".concat(disabled ? "bg-stone-600" : "bg-green-600", " p-1 text-white  rounded-md select-none  ").concat(s || "", " ").concat(className || "") });
    return React.createElement("button", __assign({}, newProps), children);
};
export { Button };
//# sourceMappingURL=Button.js.map