"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const exportEnv_1 = require("./exportEnv");
const generateJWT = ({ data = {}, key = exportEnv_1.jwtSecretKey, option = { expiresIn: `30d` }, }) => {
    return jsonwebtoken_1.default.sign(data, key, option);
};
exports.generateJWT = generateJWT;
//# sourceMappingURL=generateJWT.js.map