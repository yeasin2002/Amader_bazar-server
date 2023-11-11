import { Request, Response } from "express";

import { errorResponse, successResponse } from "../../utils/responseHandler";

export const Insert = async (req: Request, res: Response) => {
    try {
        console.table(req.body);

        successResponse({ res, message: "Inserted" });
    } catch (error: any) {
        console.log(error.message);
        errorResponse({ res });
    }
};
