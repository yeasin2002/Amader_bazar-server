import { Request, Response } from "express";
import { errorResponse, successResponse } from "../../utils";

export const changePassword = (req: Request, res: Response) => {
    try {
        successResponse({ res });
    } catch (error) {
        errorResponse({ res });
    }
};
