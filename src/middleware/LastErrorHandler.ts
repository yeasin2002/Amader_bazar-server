import chalk from "chalk";
import { NextFunction, Request, Response } from "express";

export const lastErrorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
): Response => {
    console.log(chalk.red(`msg From LastErrorHandler`, err.message));
    return res.status(500).json({
        status: "failed",
        message: "Something went wrong",
        error: err.message,
    });
};


