"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PopularProduct = void 0;
const kleur_1 = __importDefault(require("kleur"));
const model_1 = require("../../model");
const utils_1 = require("../../utils");
const PopularProduct = async (req, res) => {
    try {
        const data = await model_1.Product.find({}).sort({ totalSold: -1 }).limit(20);
        if (!data) {
            return (0, utils_1.createPrettyError)(404, "Unable to get popular products");
        }
        (0, utils_1.successResponse)({
            res,
            data,
            message: "Successfully got popular products",
        });
    }
    catch (error) {
        if (error instanceof Error) {
            console.log(`${kleur_1.default.bgRed().bold(error.name)}, Message: ${kleur_1.default.red(error.message)}}`);
            (0, utils_1.errorResponse)({ res, message: error.message });
        }
        (0, utils_1.errorResponse)({ res });
    }
};
exports.PopularProduct = PopularProduct;
//# sourceMappingURL=PopularProduct.controller.js.map