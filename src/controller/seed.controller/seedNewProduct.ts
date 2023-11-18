import { Request, Response } from "express";
import { demoProduct } from "../../data/demo/demoProduct";
import { Product } from "../../model";
import { errorResponse, successResponse } from "../../utils/responseHandler";

export const seedNewProduct = async (req: Request, res: Response) => {
    try {
        const newUsers = await Product.insertMany(demoProduct);
        successResponse({
            res,
            message: "Created Demo Data",
            data: newUsers,
        });
    } catch (error: any) {
        console.log(error.message);
        errorResponse({ res, message: error.message });
    }
};
