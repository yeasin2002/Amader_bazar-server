import { randomUUID } from "crypto";
import { Request, Response } from "express";
import { errorResponse, successResponse } from "../../utils";

export const experiment = async (req: Request, res: Response) => {
    try {
        const id = randomUUID();
        successResponse({ res, data: id });
    } catch (error: any) {
        console.log(error.message);
        errorResponse({ res });
    }
};
