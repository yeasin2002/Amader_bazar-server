import { Request, Response } from "express";
import { Category, Product } from "../../model";
import { errorResponse, successResponse } from "../../utils";

export const createProduct = async (req: Request, res: Response) => {
    try {
        // const { name, category, discount, price, desc, size, color } = req.body;
        const checkCategory = await Category.findOne({
            name: req.body.category,
        });

        if (!checkCategory) {
            return errorResponse({
                res,
                message: `could't  find any  category called "${req.body.category.toUpperCase()} " please create one `,
                statusCode: 404,
            });
        }

        const filePath = req?.file?.filename || ``;
        const data = await Product.create({
            ...req.body,
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
