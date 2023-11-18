import { Request, Response } from "express";
import { Product } from "../../model";
import { createPrettyError, errorResponse, successResponse } from "../../utils";

export const getProductByIdOrCategory = async (req: Request, res: Response) => {
    try {
        const { title, category } = req.query;
        const data = await Product.findById({
            $or: [{ title: title }, { category: category }],
        });
        if (!data) {
            return createPrettyError(
                404,
                `could't  find any  product with this name or category`
            );
        }
        successResponse({
            res,
            data,
            message: "successfully got  product",
        });
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.log(error.message);
            errorResponse({ res, message: error.message });
        }
        errorResponse({ res });
    }
};
