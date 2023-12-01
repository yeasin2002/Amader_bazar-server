import { Request, Response } from "express";
import { ProductReview } from "../../model";
import { errorResponse, successResponse } from "../../utils";

export const ProvideRating = async (req: Request, res: Response) => {
    try {
        const { productId, rating, desc } = req.body;
        const { id } = req.body.userInfo;
        const alreadyRated = await ProductReview.findOne({
            Product: productId,
            reviewers: id,
        });
        if (alreadyRated)
            return errorResponse({
                res,
                statusCode: 400,
                message: "You already rated this product",
            });

        const rateProduct = await ProductReview.create({
            Product: productId,
            reviewers: id,
            rating,
            desc,
        });
        if (!rateProduct)
            return errorResponse({
                res,
                statusCode: 400,
                message: "Rating failed",
            });

        return successResponse({
            res,
            data: rateProduct,
            message: "Rating Success",
        });
    } catch (error: any) {
        console.log(error.message);
        errorResponse({ res });
    }
};
