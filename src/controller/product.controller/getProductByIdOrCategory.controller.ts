import { Request, Response } from "express";
import { Product } from "../../model";
import { errorResponse, successResponse } from "../../utils";

interface QueryParams {
    search?: string;
    sort?: string;
    category?: string[];
    minPrice?: number;
    maxPrice?: number;
}

export const searchProduct = async (req: Request, res: Response) => {
    try {
        const {
            search = "",
            sort,
            category = [],
            minPrice = 0,
            maxPrice = 100000,
        }: QueryParams = req.body;

        // Create filter object
        const filter: any = {
            price: { $gte: minPrice, $lte: maxPrice },
            ...(search && { name: new RegExp(search, "i") }),
            ...(category.length > 0 && { category: { $in: category } }),
        };

        // Create sort object
        const sortObj: any = {};
        if (sort) {
            const sortParams = sort.split(",");
            sortParams.forEach((param: string) => {
                const [key, order] = param.split(":");
                sortObj[key] = order === "desc" ? -1 : 1;
            });
        }

        const products = await Product.find(filter).sort(sortObj);

        return successResponse({
            res,
            data: products,
            message: `Found ${products.length}  Products`,
        });
    } catch (error) {
        return errorResponse({ res });
    }
};
