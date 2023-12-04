"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.forgotPassword = void 0;
const utils_1 = require("../../utils");
const forgotPassword = async (req, res) => {
    try {
        (0, utils_1.successResponse)({ res });
    }
    catch (error) {
        console.log(error.message);
        (0, utils_1.errorResponse)({ res });
    }
};
exports.forgotPassword = forgotPassword;
//# sourceMappingURL=forgotPassword.controller.js.map