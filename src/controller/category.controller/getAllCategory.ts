import { Request, Response } from "express";
import { Category } from ".././../model";

import { errorResponse, successResponse } from "../../utils";

export const getAllCategory = async (req: Request, res: Response) => {
    try {
        const newCategory = await Category.find({});

        successResponse({
            res,
            message: "successfully Got All Category",
            data: newCategory,
        });
    } catch (error: any) {
        console.log(error.message);
        errorResponse({ res });
    }
};
