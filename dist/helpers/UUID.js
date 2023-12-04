"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.random = exports.authentication = void 0;
const crypto_1 = __importDefault(require("crypto"));
const SECRET = "ANTONIO-REST-API";
const authentication = (salt, password) => {
    return crypto_1.default
        .createHmac("sha256", [salt, password].join("/"))
        .update(SECRET)
        .digest("hex");
};
exports.authentication = authentication;
const random = () => crypto_1.default.randomBytes(128).toString("base64");
exports.random = random;
//# sourceMappingURL=UUID.js.map