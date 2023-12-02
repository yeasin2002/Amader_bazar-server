import { Request, Response } from "express";
import { Product } from "../../model";
import { errorResponse, successResponse } from "../../utils";

export const getRelatedProduct = async (req: Request, res: Response) => {
    try {
        const { category, id } = req.body;

        const searchRelatedProduct = await Product.find({
            category: category,
            _id: { $ne: id },
        }).limit(4);

        if (!searchRelatedProduct || searchRelatedProduct.length === 0)
            return errorResponse({
                res,
                message: "No related product found",
            });

        return successResponse({
            res,
            data: searchRelatedProduct,
            message: "successfully got related product",
        });
    } catch (error: any) {
        console.log(error?.message);
        errorResponse({ res });
    }
};
