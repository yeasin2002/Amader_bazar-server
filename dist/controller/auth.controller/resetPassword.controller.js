"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetPassword = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const model_1 = require("../../model");
const utils_1 = require("../../utils");
const resetPassword = async (req, res) => {
    try {
        const { email, password, newPassword, phone } = req.body;
        const user = await model_1.User.findOne({ $or: [{ email }, { phone }] });
        if (!user)
            (0, utils_1.createPrettyError)(404, "No user found");
        const verifyPassword = await bcrypt_1.default.compare(user.password, password);
        if (!verifyPassword)
            (0, utils_1.createPrettyError)(401, "Unothenticated");
        const OTP = (0, utils_1.generateOTP)();
        (0, utils_1.sendMailWithNodemailer)({
            receivers: email,
            subject: "Reset Password",
            html: `
            <h1>Reset Password</h1>
            <p> Here is your OTP Code   </p> 
            <p> ${OTP}   </p> 
            `,
        });
        const updatedUserPassword = model_1.User.findOneAndUpdate({ email }, { password: newPassword }, { new: true });
        (0, utils_1.successResponse)({
            res,
            message: "password updated successfully",
            data: updatedUserPassword,
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
exports.resetPassword = resetPassword;
//# sourceMappingURL=resetPassword.controller.js.map