"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateOTP = void 0;
const crypto_1 = require("crypto");
const generateOTP = (charLength = 16) => {
    return (0, crypto_1.randomBytes)(charLength).toString("hex");
};
exports.generateOTP = generateOTP;
//# sourceMappingURL=generateOTP.js.map