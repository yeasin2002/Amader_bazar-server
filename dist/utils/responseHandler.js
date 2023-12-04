"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.successResponse = exports.errorResponse = void 0;
const successResponse = ({ res, message, data, statusCode, }) => {
    return res.status(statusCode || 200).json({
        success: true,
        statusCode: statusCode || 200,
        message: message || `Success`,
        data: data || null,
    });
};
exports.successResponse = successResponse;
const errorResponse = ({ res, message, statusCode, }) => {
    return res.status(statusCode || 500).json({
        success: false,
        message: message || `Internal Server Error`,
        statusCode: statusCode || 500,
    });
};
exports.errorResponse = errorResponse;
//# sourceMappingURL=responseHandler.js.map