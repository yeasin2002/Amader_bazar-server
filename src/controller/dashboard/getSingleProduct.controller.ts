import { Request, Response } from "express";
import { Product } from "../../model";
import { errorResponse, successResponse } from "../../utils";

export const getSingleProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const product = Product.findOne({ _id: id });
        if (!product) {
            return errorResponse({
                res,
                statusCode: 404,
                message: "Product not found",
            });
        }

        successResponse({ res, data: product });
    } catch (error: any) {
        console.log(error.message);
        errorResponse({ res });
    }
};
