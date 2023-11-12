import { ErrorRequestHandler, Request, Response } from "express";
import { errorResponse, successResponse } from "../utils";

export const defaultErrorHandler = async (
    err: ErrorRequestHandler,
    req: Request,
    res: Response
) => {
    try {
        successResponse({ res, message: "Something went wrong" });
    } catch (error: any) {
        console.log(error.message);
        errorResponse({ res });
    }
};
