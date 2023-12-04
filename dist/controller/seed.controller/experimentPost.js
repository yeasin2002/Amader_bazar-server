"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.experimentPost = void 0;
const promises_1 = __importDefault(require("fs/promises"));
const utils_1 = require("../../utils");
const experimentPost = async (req, res) => {
    try {
        const oldPath = process.cwd() + "/uploads/pendingUser/yeasin.jpeg";
        const newPath = process.cwd() + "/uploads/users/yeasin.jpeg";
        await promises_1.default.rename(oldPath, newPath);
        return (0, utils_1.successResponse)({ res, message: "file moved" });
    }
    catch (error) {
        console.log(error?.message);
        (0, utils_1.errorResponse)({ res, message: error?.message });
    }
};
exports.experimentPost = experimentPost;
//# sourceMappingURL=experimentPost.js.map