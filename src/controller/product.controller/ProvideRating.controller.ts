import { Request, Response } from "express";
import { errorResponse, successResponse } from "../../utils";
import { Product } from "../../model";

export const ProvideRating = async (req: Request, res: Response) => {
    //  rate a product
    try {
        const { productId, rating } = req.body;
        const { id } = req.body.userInfo;
        const product = await Product.findById(productId);
        if (!product) {
            return errorResponse({
                res,
                statusCode: 404,
                message: "Product not found",
            });
        }
        const user = product.rating.find((r) => r.userId === id);
        if (user) {
            return errorResponse({
                res,
                statusCode: 400,
                message: "You already rated this product",
            });
        }
        product.rating.push({ userId: id, rating });
        successResponse({ res });
    } catch (error: any) {
        console.log(error.message);
        errorResponse({ res });
    }
};
