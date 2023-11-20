import { randomUUID } from "crypto";
import { Request, Response } from "express";
import { createPrettyError, errorResponse, successResponse } from "../../utils";

export const experiment = async (req: Request, res: Response) => {
    try {
        const id = randomUUID();
        const count = 0;
        if (count === 0) createPrettyError(401, "This is a test error");

        return successResponse({ res, data: id });
    } catch (error: any) {
        console.log(error?.message);
        errorResponse({ res, message: error?.message });
    }
};
