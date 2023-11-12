import { Request, Response } from "express";
import { errorResponse } from "../utils";

export const notFound = async (req: Request, res: Response) => {
    try {
        errorResponse({ res, message: "404 Not Found", statusCode: 404 });
    } catch (error: any) {
        console.log(error.message);
        errorResponse({ res });
    }
};
