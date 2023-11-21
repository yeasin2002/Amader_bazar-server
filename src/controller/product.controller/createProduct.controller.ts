import { Request, Response } from "express";
import { Category, Product } from "../../model";
import { createPrettyError, errorResponse, successResponse } from "../../utils";

export const createProduct = async (req: Request, res: Response) => {
    try {
        const { category, name, discount, price, desc, size, color } = req.body;
        // const checkCategory = await Category.exists({ category });
        const checkCategory = true;
        console.log("checkCategory", checkCategory);

        if (!checkCategory) {
            return createPrettyError(
                404,
                `could't  find any  category called ${category} please create one `
            );
        }
        console.log(req.file.filename);

        const filePath = req?.file || "";

        // const product = await Product.create({
        //     category,
        //     name,
        //     discount,
        //     price,
        //     desc,
        //     size,
        //     color,
        //     img: filePath,
        // });

        return successResponse({
            res,
            data: "product",
            message: "successfully created product",
        });
    } catch (error: any) {
        errorResponse({ res });
    }
};
