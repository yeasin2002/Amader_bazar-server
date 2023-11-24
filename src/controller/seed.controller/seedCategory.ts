import { Request, Response } from "express";
import { DemoCategories } from "../../data/categories";
import { Category } from "../../model";
import { errorResponse, successResponse } from "../../utils/responseHandler";

export const seedCategory = async (req: Request, res: Response) => {
    try {
        const newUsers = await Category.insertMany(DemoCategories);
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

export const DeleteAllCategories = async (req: Request, res: Response) => {
    try {
        await Category.deleteMany({});
        successResponse({ res, message: "Deleted All Categories" });
    } catch (error: any) {
        console.log(error.message);
        errorResponse({ res });
    }
};
