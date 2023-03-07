import { __assign, __rest } from "tslib";
import React from "react";
var Input = function (_a) {
    var s = _a.s, className = _a.className, children = _a.children, props = __rest(_a, ["s", "className", "children"]);
    var newProps = __assign(__assign({}, props), { className: " rounded focus:outline-none text-black text-center ".concat(s || "", " ").concat(className || "") });
    return React.createElement("input", __assign({}, newProps), children);
};
var TextArea = function (_a) {
    var s = _a.s, className = _a.className, props = __rest(_a, ["s", "className"]);
    // * faire en sorte qu'elle se resize nativement à la taille
    // * du texte exactement comme sur discord
    var newProps = __assign(__assign({}, props), { className: " rounded focus:outline-none text-black px-2 py-1 ".concat(s || "", " ").concat(className || "") });
    return React.createElement("textarea", __assign({}, newProps));
};
export { Input, TextArea };
//# sourceMappingURL=Input.js.map