import { Request, Response } from "express";
import { Product } from "../../model";
import { errorResponse, successResponse } from "../../utils";

export const discountedProduct = async (req: Request, res: Response) => {
    try {
        const findDiscountedProduct = await Product.find({
            discount: { $gte: 1 },
        });
        // const discountedProducts = await Product.find({discount: { $gt: 1 } });
        if (!findDiscountedProduct) {
            return errorResponse({
                res,
                message: "No discounted Product Found",
            });
        }
        return successResponse({
            res,
            message:
                "Found " + findDiscountedProduct.length + " discounted product",
            data: findDiscountedProduct,
        });
    } catch (error: any) {
        console.log(error.message);
        errorResponse({ res });
    }
};

/*
*/