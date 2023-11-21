import { Request, Response } from "express";
import { Category, Product } from "../../model";
import { createPrettyError, errorResponse, successResponse } from "../../utils";

export const createProduct = async (req: Request, res: Response) => {
    try {
        const { name, category, discount, price, desc, size, color } = req.body;
        const checkCategory = await Category.findOne({ name: category });

        if (!checkCategory) {
            return createPrettyError(
                404,
                `could't  find any  category called "${category.toUpperCase()} " please create one `
            );
        }

        const filePath = req?.file?.filename || "default.jpg";
        const data = await Product.create({
            name,
            category,
            discount,
            price,
            desc,
            size,
            color,
            img: filePath,
        });

        return successResponse({
            res,
            data,
            message: "successfully created product",
        });
    } catch (error: any) {
        errorResponse({ res, message: error?.message });
    }
};

