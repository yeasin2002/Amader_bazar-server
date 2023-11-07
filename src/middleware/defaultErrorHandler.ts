import { NextFunction, Request, Response } from "express";

export const defaultErrorHandler = (
    error: any,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (res.headersSent) {
        next(error);
    } else {
        res.status(500);
        res.json({
            status: "Failed",
            message: error.message,
        });
    }
};
