import { Request, Response } from "express";
import { Category, Product } from "../../model";
import { createPrettyError, errorResponse, successResponse } from "../../utils";

export const createProduct = async (req: Request, res: Response) => {
    try {
        const { category, name, discount, price, desc, size, color } = req.body;
        const checkCategory = await Category.exists({ name: category });
        if (!checkCategory) {
            return createPrettyError(
                `could't  find any  category called ${category} please create one `
            );
        }

        //! Need to add image upload
        const product = await Product.create({
            category,
            name,
            discount,
            price,
            desc,
            size,
            color,
        });

        successResponse({
            res,
            data: product,
            message: "successfully created product",
        });
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.log(error.message);
            errorResponse({ res, message: error.message });
        }
        errorResponse({ res });
    }
};
