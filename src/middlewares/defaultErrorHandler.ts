import { ErrorRequestHandler, Request, Response } from "express";
import { errorResponse } from "../utils";

export const defaultErrorHandler = (
    err: ErrorRequestHandler,
    req: Request,
    res: Response
) => {
    console.log(err);
    if (err instanceof Error) {
        return errorResponse({ res, message: err?.message });
    }
};
