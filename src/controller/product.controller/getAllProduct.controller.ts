import { Request, Response } from "express";
import { Product } from "../../model";
import { createPrettyError, errorResponse, successResponse } from "../../utils";

export const getAllProduct = async (req: Request, res: Response) => {
    try {
        const products = await Product.find({}); //! need to set limit and pagination
        if (!products) createPrettyError(404, "No Product Found");

        successResponse({
            res,
            data: products,
            message: `successfully got ${products.length} products `,
        });
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.log(error.message);
            errorResponse({ res, message: error.message });
        }
        errorResponse({ res });
    }
};
