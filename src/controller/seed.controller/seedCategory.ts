import { Request, Response } from "express";
import { demoCategory } from "../../data/demo/demoCategory";
import { Category } from "../../model";
import { errorResponse, successResponse } from "../../utils/responseHandler";

export const seedCategory = async (req: Request, res: Response) => {
    try {
        const newUsers = await Category.insertMany(demoCategory);
        successResponse({
            res,
            message: "Created Demo Category",
            data: newUsers,
        });
    } catch (error: any) {
        console.log(error.message);
        errorResponse({ res, message: error?.message });
    }
};
