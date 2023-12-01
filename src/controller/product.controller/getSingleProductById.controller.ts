import { Request, Response } from "express";
import { Product } from "../../model";
import { createPrettyError, errorResponse, successResponse } from "../../utils";

export const getSingleProductById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const data = await Product.findById(id).select("-__v");

        if (!data) {
            console.log("Next function called");
            return createPrettyError(404, "Product not found");
        }

        successResponse({ res, data, message: "successfully got  product" });
    } catch (error) {
        console.log("error", error?.message);
        errorResponse({ res, message: error.message });
    }
};
