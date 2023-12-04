"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationRunner = void 0;
const express_validator_1 = require("express-validator");
const kleur_1 = __importDefault(require("kleur"));
const utils_1 = require("../utils");
const validationRunner = async (req, res, next) => {
    try {
        console.log(req.body);
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            const errorMsg = errors.array().map((err) => err.msg);
            return res.status(400).json({
                status: `failed`,
                message: `Some field are not validated `,
                error: errorMsg,
            });
        }
        next();
    }
    catch (error) {
        console.log(kleur_1.default.bgRed().white().bold(`"ValidationRunner", ${error.message}`));
        (0, utils_1.errorResponse)({ res, message: " Unable to validate Request" });
    }
};
exports.validationRunner = validationRunner;
//# sourceMappingURL=ValidationRunner.js.map