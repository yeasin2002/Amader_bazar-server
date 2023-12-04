"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsrInfo = void 0;
const geoip_lite_1 = __importDefault(require("geoip-lite"));
const model_1 = require("../../model");
const utils_1 = require("../../utils");
const UsrInfo = async (req, res) => {
    try {
        const geo = geoip_lite_1.default.lookup(req.ip);
        const user = await model_1.User.findById(req.body.userInfo.id);
        if (!user) {
            return (0, utils_1.errorResponse)({
                res,
                statusCode: 404,
                message: "User not found",
            });
        }
        console.log("🚀 ~ file: UserInfo.controller.ts:10 ~ UsrInfo ~ user:", user);
        (0, utils_1.successResponse)({
            res,
            data: {
                name: user.name,
                avatar: user.avatar,
                city: geo?.city,
                country: geo?.country,
            },
            message: "Got  User info successfully",
        });
    }
    catch (error) {
        console.log(error.message);
        (0, utils_1.errorResponse)({ res });
    }
};
exports.UsrInfo = UsrInfo;
//# sourceMappingURL=UserInfo.controller.js.map