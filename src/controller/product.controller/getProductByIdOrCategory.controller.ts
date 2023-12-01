import { Request, Response } from "express";
import { Product } from "../../model";
import { errorResponse, successResponse } from "../../utils";

export const searchProduct = async (req: Request, res: Response) => {
    try {
        const {
            page = 0,
            limit = 10,
            search = "",
            sort,
            category = [],
            minPrice = 0,
            maxPrice = 100000,
        } = req.query;

        // Start with a base query
        let query = Product.find();

        // If a search term is provided, filter by name or category
        if (search) {
            query = query.where({
                $or: [
                    { name: { $regex: search, $options: "i" } },
                    { category: { $regex: search, $options: "i" } },
                ],
            });
        }

        // If categories are provided, filter by categories
        if (category.length) {
            query = query.where({ category: { $in: category } });
        }

        // Filter by price range
        query = query
            .where("price")
            .gte(Number(minPrice))
            .lte(Number(maxPrice));

        // If a sort order is provided, sort the products
        if (sort && typeof sort === "string") {
            const [field, order] = sort.split(":");
            query = query.sort({ [field]: order === "desc" ? -1 : 1 });
        }

        // Add pagination
        query = query
            .skip(Number(page.toString()) * Number(limit.toString()))
            .limit(Number(limit.toString()));

        // Execute the query
        const products = await query.exec();
        successResponse({
            res,
            message: `Found  ${products.length} product`,
            data: products,
        });
    } catch (error) {
        errorResponse({ res });
    }
};
