import { Request, Response } from "express";
import { Product } from "../../model";
import { createPrettyError, errorResponse, successResponse } from "../../utils";

export const getSingleProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const data = await Product.findById(id);
        if (!data) {
            return createPrettyError(
                404,
                `could't  find any  product with id :${id}`
            );
        }
        successResponse({ res, data, message: "successfully got  product" });
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.log(error.message);
            errorResponse({ res, message: error.message });
        }
        errorResponse({ res });
    }
};
