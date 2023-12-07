import { Request, Response } from "express";
import { errorResponse, successResponse } from "../../utils";

export const getAllOrder = async (req: Request, res: Response) => {
    try {
        successResponse({ res, message: "Get all order" });
    } catch (error: any) {
        console.log(error.message);
        errorResponse({ res });
    }
};
