"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserJWT = exports.userJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const utils_1 = require("../utils");
const userJWT = ({ id, name, email, number }) => {
    return jsonwebtoken_1.default.sign({ id, name, email, number }, utils_1.jwtSecretKey, {
        expiresIn: "30d",
    });
};
exports.userJWT = userJWT;
const getUserJWT = (headerToken) => {
    const token = headerToken?.trim().split(" ").at(-1);
    if (!token) {
        return (0, utils_1.createPrettyError)(401, "invalid token");
    }
    const decoded = jsonwebtoken_1.default.verify(token, utils_1.jwtSecretKey);
    if (!decoded) {
        return (0, utils_1.createPrettyError)(401, "invalid token");
    }
    return decoded;
};
exports.getUserJWT = getUserJWT;
//# sourceMappingURL=UserJWT.js.map