import { Request, Response } from "express";
import { errorResponse, successResponse } from "../../utils";
import { Product } from "../../model";


export const discountedProduct = async (req: Request, res: Response) => {
    try {
        successResponse({ res });
    } catch (error: any) {
        console.log(error.message);
        errorResponse({ res });
    }
};
