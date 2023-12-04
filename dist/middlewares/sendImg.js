"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendImg = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const utils_1 = require("../utils");
const sendImg = (folderPath) => {
    return (req, res) => {
        try {
            const { src } = req.params;
            const local = path_1.default.join(`${process.cwd()}/uploads/${folderPath}/${src}`);
            if (!fs_1.default.existsSync(local)) {
                console.log("Image not found");
                const defaultImg = path_1.default.join(`${process.cwd()}/uploads/${folderPath}/default.png`);
                return res.sendFile(defaultImg);
            }
            res.sendFile(local);
        }
        catch (error) {
            console.log(error.message);
            (0, utils_1.errorResponse)({ res });
        }
    };
};
exports.sendImg = sendImg;
//# sourceMappingURL=sendImg.js.map