import { Request, Response } from "express";
import { Category } from ".././../model";

import { createPrettyError, errorResponse, successResponse } from "../../utils";

export const createCategory = async (req: Request, res: Response) => {
    try {
        const { name, icon, subtitle } = req.body;
        const newCategory = await Category.create({ name, icon, subtitle });
        if (!newCategory) createPrettyError(404, "Category Not Found");

        successResponse({
            res,
            message: "Category created successfully",
            data: newCategory,
        });
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.log(error.message);
            errorResponse({ res, message: error.message });
        }
        errorResponse({ res });
    }
};
