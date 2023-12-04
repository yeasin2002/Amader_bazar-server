"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAdmin = void 0;
const lib_1 = require("../lib");
const model_1 = require("../model");
const utils_1 = require("../utils");
const isAdmin = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.trim().split(" ").at(-1);
        const decodedToken = (0, lib_1.getUserJWT)(token);
        const SearchUser = await model_1.User.findById(decodedToken);
        if (!SearchUser) {
            return (0, utils_1.errorResponse)({
                res,
                statusCode: 404,
                message: "User not found",
            });
        }
        req.body.userInfo = SearchUser.isAdmin;
        return next();
    }
    catch (error) {
        console.log(error.message);
        (0, utils_1.errorResponse)({ res });
    }
};
exports.isAdmin = isAdmin;
//# sourceMappingURL=isAdmin.js.map