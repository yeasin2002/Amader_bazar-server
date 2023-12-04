"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTokenVerify = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const utils_1 = require("../utils");
const isTokenVerify = (req, res, next) => {
    try {
        const token = req.headers.authorization?.trim().split(" ").at(-1);
        if (!token) {
            return (0, utils_1.createPrettyError)(401, "Token not found");
        }
        const decoded = jsonwebtoken_1.default.verify(token, utils_1.jwtSecretKey);
        if (!decoded) {
            return (0, utils_1.createPrettyError)(401, "invalid token");
        }
        console.log("🚀 ~ file: isTokenVerify.ts:18 ~ decoded:", decoded);
        req.body.userInfo = decoded;
        next();
    }
    catch (error) {
        console.log("🚀 ~ file: isTokenVerify.ts:26 ~ error:", error.message);
        (0, utils_1.errorResponse)({ res });
    }
};
exports.isTokenVerify = isTokenVerify;
//# sourceMappingURL=isTokenVerify.js.map