import { Request, Response } from "express";
import { createPrettyError, errorResponse, successResponse } from "../../utils";
import { Category } from ".././../model";

export const deleteCategory = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const deletedCategory = await Category.findByIdAndDelete(id);
        if (!deletedCategory) createPrettyError("Category Not Found", 404);

        successResponse({
            res,
            message: "successfully Got All Category",
            data: deletedCategory,
        });
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.log(error.message);
            errorResponse({ res, message: error.message });
        }
        errorResponse({ res });
    }
};
