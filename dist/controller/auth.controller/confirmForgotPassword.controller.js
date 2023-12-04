"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.confirmForgotPassword = void 0;
const model_1 = require("../../model");
const utils_1 = require("../../utils");
//! Paused
const confirmForgotPassword = async (req, res) => {
    try {
        const { email } = req.body;
        const findUser = await model_1.User.findOne({ email });
        if (!findUser)
            (0, utils_1.createPrettyError)(404, "User not found");
        (0, utils_1.successResponse)({
            res,
            message: "password reset",
        });
    }
    catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
            return (0, utils_1.errorResponse)({ res, message: error.message });
        }
        (0, utils_1.errorResponse)({ res });
    }
};
exports.confirmForgotPassword = confirmForgotPassword;
//# sourceMappingURL=confirmForgotPassword.controller.js.map