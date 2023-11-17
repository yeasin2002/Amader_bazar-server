import { Request, Response } from "express";
import { Product } from "../../model";
import { createPrettyError, errorResponse, successResponse } from "../../utils";

export const PopularProduct = async (req: Request, res: Response) => {
    try {
        const data = await Product.find({}).sort({ totalSold: -1 }).limit(20);
        if (!data) {
            return createPrettyError("Unable to get popular products", 404);
        }
        successResponse({
            res,
            data,
            message: "Successfully got popular products",
        });
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.table({
                Name: error.name,
                Cause: error.cause,
                Message: error.message,
            });
            errorResponse({ res, message: error.message });
        }
        errorResponse({ res });
    }
};
