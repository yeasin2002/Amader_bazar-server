"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.confirmResetPassword = void 0;
const utils_1 = require("../../utils");
const confirmResetPassword = async (req, res) => {
    try {
        (0, utils_1.successResponse)({ res });
    }
    catch (error) {
        console.log(error.message);
        (0, utils_1.errorResponse)({ res });
    }
};
exports.confirmResetPassword = confirmResetPassword;
//# sourceMappingURL=confirmResetPassword.controller.js.map