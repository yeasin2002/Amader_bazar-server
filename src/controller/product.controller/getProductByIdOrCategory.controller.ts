import { Request, Response } from "express";
import { Product } from "../../model";
import { errorResponse, successResponse } from "../../utils";

export const getProductByIdOrCategory = async (req: Request, res: Response) => {
    try {
        const { name, category } = req.query;
        const query: any = {};

        if (name) {
            query.name = name as string;
        }
        if (category) {
            query.category = category as string;
        }

        if (name && category) {
            query.name = name as string;
            query.category = category as string;
        }

        const data = await Product.find(query);
        if (!data) {
            return errorResponse({
                res,
                statusCode: 404,
                message: `Unable to get Product`,
            });
        }
        if (data?.length === 0) {
            return errorResponse({
                res,
                statusCode: 404,
                message: `could't  find any  product with this name or category`,
            });
        }

        return successResponse({
            res,
            data,
            message: "successfully got  product",
        });
    } catch (error: any) {
        console.log(error?.message);
        errorResponse({ res });
    }
};
