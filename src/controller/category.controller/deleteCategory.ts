import { Request, Response } from "express";
import { errorResponse, successResponse } from "../../utils";
import { Category } from ".././../model";

export const deleteCategory = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const deletedCategory = await Category.findByIdAndDelete(id);

        successResponse({
            res,
            message: "successfully Got All Category",
            data: deletedCategory,
        });
    } catch (error: any) {
        console.log(error.message);
        errorResponse({ res });
    }
};
