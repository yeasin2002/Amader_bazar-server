import { Request, Response } from "express";
import { createPrettyError, errorResponse, successResponse } from "../../utils";

export const experimentPost = async (req: Request, res: Response) => {
    try {
        console.log(req.file.filename);
        console.log("Req Body", req.body);
        const body = req.file.filename;
        return successResponse({ res, data: body });
    } catch (error: any) {
        console.log(error?.message);
        errorResponse({ res, message: error?.message });
    }
};
