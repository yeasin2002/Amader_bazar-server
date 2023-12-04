"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.confirmRegistration = void 0;
const promises_1 = __importDefault(require("fs/promises"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const model_1 = require("../../model");
const utils_1 = require("../../utils");
const confirmRegistration = async (req, res) => {
    try {
        const { token, OTP } = req.body;
        const decoded = jsonwebtoken_1.default.verify(token, utils_1.jwtSecretKey);
        if (!decoded) {
            return (0, utils_1.errorResponse)({
                res,
                message: "invalid user",
            });
        }
        const pendingUserNeedToVerify = await model_1.PendingUser.findOne({
            email: decoded.email,
        });
        if (!pendingUserNeedToVerify) {
            return (0, utils_1.errorResponse)({
                res,
                message: "Invalid User",
            });
        }
        const checkOTPmatch = pendingUserNeedToVerify.token == OTP;
        if (!checkOTPmatch) {
            return (0, utils_1.errorResponse)({
                res,
                message: "Invalid OTP",
            });
        }
        const { name, email, phone, password, address, avatar } = pendingUserNeedToVerify;
        if (avatar) {
            const oldPath = process.cwd() + `/uploads/pendingUser/${avatar}`;
            const newPath = process.cwd() + `/uploads/users/${avatar}`;
            await promises_1.default.rename(oldPath, newPath);
        }
        const data = await model_1.User.create({
            name,
            email,
            phone,
            password,
            address,
            avatar,
        });
        if (!data)
            (0, utils_1.createPrettyError)(500, `Something went wrong`);
        const userToken = (0, utils_1.generateJWT)({
            data: {
                id: data._id,
                name: data.name,
                email: data.email,
                phone: data.phone,
            },
        });
        await model_1.PendingUser.findOneAndDelete({ email: decoded.email });
        return (0, utils_1.successResponse)({
            res,
            message: "New Use Created successfully",
            data: {
                token: userToken,
                userInfo: data,
            },
        });
    }
    catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
            (0, utils_1.errorResponse)({ res });
        }
    }
};
exports.confirmRegistration = confirmRegistration;
//# sourceMappingURL=confirmRegistration.controller.js.map