import { Request, Response } from "express";
import { Product } from "../../model";
import { createPrettyError, errorResponse, successResponse } from "../../utils";

export const getAllFeatureProduct = async (req: Request, res: Response) => {
    try {
        console.log("req : Feature ");
        const data = await Product.find({ isFeatured: true });
        if (!data)
            await createPrettyError("Unable to get featured product", 404);
        await successResponse({
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
