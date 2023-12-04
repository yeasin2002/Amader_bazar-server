"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductRatingsController = void 0;
const model_1 = require("../../model");
const utils_1 = require("../../utils");
const getProductRatingsController = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        const findProduct = await model_1.ProductReview.find({
            Product: id,
        })
            .populate("reviewers")
            .select("-__v -updatedAt -createdAt -Product");
        if (!findProduct)
            return (0, utils_1.errorResponse)({ res, message: "Product not found" });
        const totalRating = findProduct.reduce((acc, cur) => {
            return acc + cur.rating;
        }, 0);
        const oneStarRating = findProduct.filter((item) => item.rating === 1).length;
        const twoStarRating = findProduct.filter((item) => item.rating === 2).length;
        const threeStarRating = findProduct.filter((item) => item.rating === 3).length;
        const fourStarRating = findProduct.filter((item) => item.rating === 4).length;
        const fiveStarRating = findProduct.filter((item) => item.rating === 5).length;
        (0, utils_1.successResponse)({
            res,
            data: {
                ratings: findProduct,
                totalReviewer: findProduct.length,
                averageRating: totalRating / findProduct.length,
                ratingStars: {
                    oneStarRating,
                    twoStarRating,
                    threeStarRating,
                    fourStarRating,
                    fiveStarRating,
                },
            },
            message: "successfully got all rating information",
        });
    }
    catch (error) {
        console.log(error?.message);
        (0, utils_1.errorResponse)({ res });
    }
};
exports.getProductRatingsController = getProductRatingsController;
//# sourceMappingURL=getProductRatings.controller.js.map