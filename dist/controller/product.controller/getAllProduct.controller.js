"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllProduct = void 0;
const model_1 = require("../../model");
const utils_1 = require("../../utils");
const getAllProduct = async (req, res) => {
    try {
        const { limit = 20 } = req.body;
        const products = await model_1.Product.find({}).limit(limit);
        if (!products)
            (0, utils_1.createPrettyError)(404, "No Product Found");
        (0, utils_1.successResponse)({
            res,
            data: products,
            message: `successfully got ${products.length} products `,
        });
    }
    catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
            (0, utils_1.errorResponse)({ res, message: error.message });
        }
        (0, utils_1.errorResponse)({ res });
    }
};
exports.getAllProduct = getAllProduct;
//# sourceMappingURL=getAllProduct.controller.js.map