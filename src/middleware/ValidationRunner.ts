import chalk from "chalk";
import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

export const validationRunner = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        console.log(req.body);
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const ErrorPaths = errors.array().map((err) => err.type);
            const errorMsg = errors.array().map((err) => err.msg);
            console.log(chalk.bgRed.white.bold(ErrorPaths));

            return res.status(400).json({
                status: `failed`,
                message: `${ErrorPaths} are not validated `,
                error: errorMsg,
            });
        }
        next();
        // eslint-disable-next-line
    } catch (error: any) {
        console.log(chalk.bgRed.bold.white(error.message));
        throw new Error(error.message);
        // createHttpError(500, `Internal Server Error -  Validation Failed`);
    }
};
