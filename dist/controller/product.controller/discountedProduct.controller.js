"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.discountedProduct = void 0;
const model_1 = require("../../model");
const utils_1 = require("../../utils");
const discountedProduct = async (req, res) => {
    try {
        const findDiscountedProduct = await model_1.Product.find({
            discount: { $gte: 1 },
        });
        // const discountedProducts = await Product.find({discount: { $gt: 1 } });
        if (!findDiscountedProduct) {
            return (0, utils_1.errorResponse)({
                res,
                message: "No discounted Product Found",
            });
        }
        return (0, utils_1.successResponse)({
            res,
            message: "Found " + findDiscountedProduct.length + " discounted product",
            data: findDiscountedProduct,
        });
    }
    catch (error) {
        console.log(error.message);
        (0, utils_1.errorResponse)({ res });
    }
};
exports.discountedProduct = discountedProduct;
/*
 */
//# sourceMappingURL=discountedProduct.controller.js.map