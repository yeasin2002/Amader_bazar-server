import { Request, Response } from "express";
import { errorResponse, successResponse } from "../../utils";

export const forgotPassword = async (req: Request, res: Response) => {
    try {
        successResponse({ res });
    } catch (error: any) {
        console.log(error.message);
        errorResponse({ res });
    }
};
