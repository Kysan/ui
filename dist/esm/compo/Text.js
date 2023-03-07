import { __assign, __rest } from "tslib";
import React from "react";
var Text = function (_a) {
    var className = _a.className, s = _a.s, children = _a.children, props = __rest(_a, ["className", "s", "children"]);
    var newProps = __assign(__assign({}, props), { className: "Text ".concat(s || "", " ").concat(className || "") });
    return React.createElement("p", __assign({}, newProps), children);
};
var Heading = function (_a) {
    var className = _a.className, s = _a.s, children = _a.children, props = __rest(_a, ["className", "s", "children"]);
    var newProps = __assign(__assign({}, props), { className: "Heading ".concat(s || "", " ").concat(className || "") });
    return React.createElement("h2", __assign({}, newProps), children);
};
var Span = function (_a) {
    var className = _a.className, s = _a.s, children = _a.children, props = __rest(_a, ["className", "s", "children"]);
    var newProps = __assign(__assign({}, props), { className: "Span ".concat(s || "", " ").concat(className || "") });
    return React.createElement("h2", __assign({}, newProps), children);
};
export { Text, Heading, Span };
//# sourceMappingURL=Text.js.map