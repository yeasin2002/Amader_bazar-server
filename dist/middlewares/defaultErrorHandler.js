"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultErrorHandler = void 0;
const utils_1 = require("../utils");
const defaultErrorHandler = (err, req, res) => {
    console.log(err);
    if (err instanceof Error) {
        return (0, utils_1.errorResponse)({ res, message: err?.message });
    }
};
exports.defaultErrorHandler = defaultErrorHandler;
//# sourceMappingURL=defaultErrorHandler.js.map