import chalk from "chalk";
import { NextFunction, Request, Response } from "express";

export const reqLogger = (req: Request, res: Response, next: NextFunction) => {
    console.log(
        `${chalk.bgGreen(req.method)}-${chalk.yellow(req.originalUrl)}`
    );
    next();
};
