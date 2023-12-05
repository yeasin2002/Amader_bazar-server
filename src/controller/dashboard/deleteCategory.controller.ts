import { Request, Response } from "express";
import { Category } from "../../model";
import { errorResponse, successResponse } from "../../utils";

export const deleteSingleCategory = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const category = await Category.findOneAndDelete({ id });

        if (!category) {
            return errorResponse({
                res,
                statusCode: 404,
                message: "unable to delete category ",
            });
        }

        return successResponse({ res, data: category });
    } catch (error: any) {
        console.log(error.message);
        errorResponse({ res });
    }
};
