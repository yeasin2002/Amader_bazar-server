import chalk from "chalk";
import { NextFunction, Request, Response } from "express";

export const createPrettyLogger = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    console.log(`
    ${chalk.bgGreen(req.method)}-${chalk.yellow(req.url)}-${chalk.yellow(
        req.statusCode
    )}`);
    next();
};
