"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRelatedProduct = void 0;
const model_1 = require("../../model");
const utils_1 = require("../../utils");
const getRelatedProduct = async (req, res) => {
    try {
        const { category, id } = req.body;
        const searchRelatedProduct = await model_1.Product.find({
            category: category,
            _id: { $ne: id },
        }).limit(4);
        if (!searchRelatedProduct || searchRelatedProduct.length === 0)
            return (0, utils_1.errorResponse)({
                res,
                message: "No related product found",
            });
        return (0, utils_1.successResponse)({
            res,
            data: searchRelatedProduct,
            message: "successfully got related product",
        });
    }
    catch (error) {
        console.log(error?.message);
        (0, utils_1.errorResponse)({ res });
    }
};
exports.getRelatedProduct = getRelatedProduct;
//# sourceMappingURL=getRelatedProduct.controller.js.map