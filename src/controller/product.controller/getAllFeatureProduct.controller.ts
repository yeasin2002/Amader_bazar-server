import { Request, Response } from "express";
import { Product } from "../../model";
import { createPrettyError, errorResponse, successResponse } from "../../utils";

export const getAllFeatureProduct = async (req: Request, res: Response) => {
    try {
        const FeaturedProduct =
            (await Product.find({ isFeature: true }).limit(4)) || [];
        const MostPopular =
            (await Product.find().sort({ sold: -1 }).limit(4)) || [];
        const DiscountedProduct =
            (await Product.find({
                discount: { $gt: 0 },
            }).limit(4)) || [];

        return successResponse({
            res,
            message: "successfully got Featured product",
            data: {
                FeaturedProduct,
                MostPopular,
                DiscountedProduct,
            },
        });
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.log(error.message);
            errorResponse({ res, message: error.message });
        }
        errorResponse({ res });
    }
};
