import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { UserInfo } from "../lib/UserJWT";
import { createPrettyError, errorResponse, jwtSecretKey } from "../utils";

export const isTokenVerify = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const token = req.headers.authorization?.trim().split(" ").at(-1);
        if (!token) {
            return createPrettyError(401, "Token not found");
        }
        const decoded = jwt.verify(token, jwtSecretKey!);
        if (!decoded) {
            return createPrettyError(401, "invalid token");
        }

        req.body.userInfo = decoded as UserInfo;
        next();
    } catch (error: any) {
        console.log(error.message);
        errorResponse({ res });
    }
};
