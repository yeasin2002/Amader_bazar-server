"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newJWT_Token = void 0;
const lib_1 = require("../../lib");
const model_1 = require("../../model");
const utils_1 = require("../../utils");
const newJWT_Token = async (req, res) => {
    try {
        const { id } = req.body.userInfo;
        const foundedUser = await model_1.User.findById(id);
        if (!foundedUser) {
            return (0, utils_1.errorResponse)({ res, message: "User not found" });
        }
        const token = (0, lib_1.userJWT)({
            id: foundedUser._id,
            name: foundedUser.name,
            email: foundedUser.email,
            number: foundedUser.phone,
        });
        return (0, utils_1.successResponse)({
            res,
            data: token,
            message: "New Token Generated",
        });
    }
    catch (error) {
        console.log(error.message);
        (0, utils_1.errorResponse)({ res });
    }
};
exports.newJWT_Token = newJWT_Token;
//# sourceMappingURL=newJWT_Token.controller.js.map