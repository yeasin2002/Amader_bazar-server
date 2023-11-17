import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { createPrettyError, errorResponse, jwtSecretKey } from "../utils";

export const isTokenVerify = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const token = req.headers.authorization?.trim().split(" ").at(-1);
        if (!token) {
            return createPrettyError("Token not found", 401);
        }
        const decoded = jwt.verify(token, jwtSecretKey!);
        if (!decoded) {
            return createPrettyError("invalid token", 401);
        }

        req.body.userInfo = decoded;
        next();
    } catch (error: any) {
        console.log(error.message);
        errorResponse({ res });
    }
};
