import { NextFunction, Request, Response } from "express";

export const reqLogger = (req: Request, res: Response, next: NextFunction) => {
    const start = Date.now();
    console.log(req.ip);

    res.on("finish", () => {
        const duration = Date.now() - start;
        console.log(
            `${req.method} ${req.originalUrl} ${res.statusCode} - ${duration} ms`
        );
    });

    next();
};
