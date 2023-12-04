"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllFeatureProduct = void 0;
const model_1 = require("../../model");
const utils_1 = require("../../utils");
const getAllFeatureProduct = async (req, res) => {
    try {
        const FeaturedProduct = (await model_1.Product.find({ isFeature: true }).limit(4)) || [];
        const MostPopular = (await model_1.Product.find().sort({ sold: -1 }).limit(4)) || [];
        const DiscountedProduct = (await model_1.Product.find({
            discount: { $gt: 0 },
        }).limit(4)) || [];
        return (0, utils_1.successResponse)({
            res,
            message: "successfully got Featured product",
            data: {
                FeaturedProduct,
                MostPopular,
                DiscountedProduct,
            },
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
exports.getAllFeatureProduct = getAllFeatureProduct;
//# sourceMappingURL=getAllFeatureProduct.controller.js.map