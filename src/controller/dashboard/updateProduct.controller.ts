import { Request, Response } from "express";
import { Product } from "../../model";
import { createPrettyError, errorResponse, successResponse } from "../../utils";

export const updateProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const data = await Product.findByIdAndUpdate(
            id,
            { $set: req.body },
            { new: true }
        );
        if (!data) {
            return createPrettyError(
                404,
                `could't update product with id :${id}`
            );
        }

        successResponse({ res, data, message: "successfully updated product" });
    } catch (error: any) {
        console.log(error.message);
        errorResponse({ res });
    }
};
