import { Request, Response } from "express";
import { createPrettyError, errorResponse, successResponse } from "../../utils";
import { Category } from ".././../model";

export const getCategoryByTitle = async (req: Request, res: Response) => {
    try {
        const newCategory = await Category.find({
            name: req.params.title,
        });
        if (!newCategory) createPrettyError(404, "Category Not Found");

        successResponse({
            res,
            message: "successfully Got All Category",
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
