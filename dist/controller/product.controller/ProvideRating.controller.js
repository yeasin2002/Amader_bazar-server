"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvideRating = void 0;
const model_1 = require("../../model");
const utils_1 = require("../../utils");
const ProvideRating = async (req, res) => {
    try {
        const { productId, rating, desc } = req.body;
        const { id } = req.body.userInfo;
        const alreadyRated = await model_1.ProductReview.findOne({
            Product: productId,
            reviewers: id,
        });
        if (alreadyRated)
            return (0, utils_1.errorResponse)({
                res,
                statusCode: 400,
                message: "You already rated this product",
            });
        const rateProduct = await model_1.ProductReview.create({
            Product: productId,
            reviewers: id,
            rating,
            desc,
        });
        if (!rateProduct)
            return (0, utils_1.errorResponse)({
                res,
                statusCode: 400,
                message: "Rating failed",
            });
        return (0, utils_1.successResponse)({
            res,
            data: rateProduct,
            message: "Rating Success",
        });
    }
    catch (error) {
        console.log(error.message);
        (0, utils_1.errorResponse)({ res });
    }
};
exports.ProvideRating = ProvideRating;
//# sourceMappingURL=ProvideRating.controller.js.map