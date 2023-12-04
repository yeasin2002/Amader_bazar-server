"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logIn = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const lib_1 = require("../../lib");
const model_1 = require("../../model");
const utils_1 = require("../../utils");
const logIn = async (req, res) => {
    try {
        const { email, password, phone } = req.body;
        const theUser = await model_1.User.findOne({
            $or: [{ email }, { phone: phone }],
        });
        if (!theUser) {
            return (0, utils_1.errorResponse)({
                res,
                statusCode: 404,
                message: "User not found",
            });
        }
        const checkPass = await bcrypt_1.default.compare(password, theUser.password);
        if (!checkPass)
            (0, utils_1.createPrettyError)(404, "Wrong password");
        const token = (0, lib_1.userJWT)({
            id: theUser._id,
            name: theUser.name,
            email: theUser.email,
            number: theUser.phone,
        });
        (0, utils_1.successResponse)({ res, data: token, message: "User logged in" });
    }
    catch (error) {
        if (error instanceof Error) {
            console.log(error.name + "::" + error.message);
            (0, utils_1.errorResponse)({ res, message: error.message });
        }
        else {
            (0, utils_1.errorResponse)({ res, message: "Something went wrong" });
        }
    }
};
exports.logIn = logIn;
//# sourceMappingURL=logIn.controller.js.map