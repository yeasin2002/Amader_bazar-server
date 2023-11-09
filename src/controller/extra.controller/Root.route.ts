import { Request, Response } from "express";
import { errorResponse, successResponse } from "../../utils/responseHandler.js";

export const RootRoute = async (req: Request, res: Response) => {
    try {
        successResponse({ res });
    } catch (error: any) {
        console.log(error.message);
        errorResponse({ res });
    }
};
