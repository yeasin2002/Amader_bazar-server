import { Request, Response } from "express";
import { Category } from ".././../model";

import { errorResponse, successResponse } from "../../utils";

export const createCategory = async (req: Request, res: Response) => {
    try {
        const { name, icon, subtitle } = req.body;
        const newCategory = await Category.create({ name, icon, subtitle });

        successResponse({
            res,
            message: "Category created successfully",
            data: newCategory,
        });
    } catch (error: any) {
        console.log(error.message);
        errorResponse({ res });
    }
};
