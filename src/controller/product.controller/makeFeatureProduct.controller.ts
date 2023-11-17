import { Request, Response } from "express";
import { Product } from "../../model";
import { createPrettyError, errorResponse, successResponse } from "../../utils";

export const makeFeatureProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const data = await Product.findOneAndUpdate(
            { id },
            { $set: { isFeatured: true } },
            { new: true }
        );
        if (!data) createPrettyError("Unable to get featured product", 404);
        successResponse({
            res,
            data,
            message: "successfully got Featured product",
        });
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.log(error.message);
            errorResponse({ res, message: error.message });
        }
        errorResponse({ res });
    }
};
