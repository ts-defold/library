"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.to = void 0;
function to(promise) {
    return promise.then((data) => [undefined, data])
        .catch((err) => [err, undefined]);
}
exports.to = to;
//# sourceMappingURL=utils.js.map