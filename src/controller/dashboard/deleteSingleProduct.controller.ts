import { Request, Response } from "express";
import { Product } from "../../model";
import { errorResponse, successResponse } from "../../utils";

export const deleteSingleProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const product = await Product.findOneAndDelete({ id });

        if (!product) {
            return errorResponse({
                res,
                statusCode: 404,
                message: "unable to delete ",
            });
        }

        return successResponse({ res, data: product });
    } catch (error: any) {
        console.log(error.message);
        errorResponse({ res });
    }
};
