import { Request, Response } from "express";
import { Product } from "../../model";
import { createPrettyError, errorResponse, successResponse } from "../../utils";

export const deleteProduct = async (req: Request, res: Response) => {
    try {
        const data = await Product.findByIdAndDelete(req.params.id);

        if (!data) {
            return createPrettyError(404, "Unable to delete product");
        }

        successResponse({ res, data, message: "successfully deleted product" });
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.log(error.message);
            errorResponse({ res, message: error.message });
        }
        errorResponse({ res });
    }
};
