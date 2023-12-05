import { Request, Response } from "express";
import { Product } from "../../model";
import { errorResponse, successResponse } from "../../utils";

export const updateSingleProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { name, price, description } = req.body;
        const product = await Product.findByIdAndUpdate(id, req.body, {
            new: true,
        });

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
