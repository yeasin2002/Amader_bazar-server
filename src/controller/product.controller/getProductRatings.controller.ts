import { Request, Response } from "express";
import { ProductReview } from "../../model";
import { errorResponse, successResponse } from "../../utils";

export const getProductRatingsController = async (
    req: Request,
    res: Response
) => {
    try {
        const { id } = req.params;
        console.log(id);
        const findProduct = await ProductReview.find({
            Product: id,
        })
            .populate("reviewers")
            .select("-__v -updatedAt -createdAt -Product");

        if (!findProduct)
            return errorResponse({ res, message: "Product not found" });

        const totalRating = findProduct.reduce((acc, cur) => {
            return acc + cur.rating;
        }, 0);
        const oneStarRating = findProduct.filter(
            (item) => item.rating === 1
        ).length;
        const twoStarRating = findProduct.filter(
            (item) => item.rating === 2
        ).length;
        const threeStarRating = findProduct.filter(
            (item) => item.rating === 3
        ).length;
        const fourStarRating = findProduct.filter(
            (item) => item.rating === 4
        ).length;
        const fiveStarRating = findProduct.filter(
            (item) => item.rating === 5
        ).length;

        successResponse({
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
    } catch (error: any) {
        console.log(error?.message);
        errorResponse({ res });
    }
};
