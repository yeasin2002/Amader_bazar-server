import chalk from "chalk";
import { Errback, NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import createHttpError from "http-errors";

export const validationRunner = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const errorMsg = errors.array().map((err) => err.msg);
            console.log(
                chalk.bgRed.white.bold(`Validation Error: ${errorMsg}`)
            );

            return res.status(400).json({
                status: `failed`,
                message: ` validated request failed  `,
                error: errorMsg,
            });
        }
        next();
    } catch (error: any) {
        console.log(chalk.bgRed.white.bold(error.message));
        return createHttpError(
            500,
            `Internal Server Error -  Validation Failed`
        );
    }
};
