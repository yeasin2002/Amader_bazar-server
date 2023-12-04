"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPrettyError = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
class HttpError extends Error {
    statusCode;
    message;
    name;
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
        this.name = `HttpError`;
    }
}
//! Bug - Not Throwing Error
const createPrettyError = (statusCode = 500, message = "Internal Server Error") => {
    // new HttpError(statusCode, message);
    throw new Error(message);
};
exports.createPrettyError = createPrettyError;
//# sourceMappingURL=createPrettyError.js.map