import { Request, Response } from "express";
import { Category } from ".././../model";

import { createPrettyError, errorResponse, successResponse } from "../../utils";

export const getAllCategory = async (req: Request, res: Response) => {
    try {
        const { limit } = req.body;
        const newCategory = await Category.find({})
            .limit(limit)
            .sort({ createdAt: -1 });
        if (!newCategory) createPrettyError(404, "Category Not Found");

        successResponse({
            res,
            message: "successfully Got All Category",
            data: newCategory,
        });
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.log(error.message);
            errorResponse({ res });
        }
        errorResponse({ res });
    }
};
