import { NextFunction, Request, Response } from "express";
import jsonwebtoken from "jsonwebtoken";
import { UserInfo } from "../lib/UserJWT";
import { createPrettyError, errorResponse, jwtSecretKey } from "../utils";

export const isTokenVerify = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const token = req.headers.authorization?.trim().split(" ").at(-1);
        console.log("🚀 ~ file: isTokenVerify.ts:13 ~ token:", token);
        if (!token) {
            return createPrettyError(401, "Token not found");
        }
        const decoded = jsonwebtoken.verify(token, jwtSecretKey!);
        if (!decoded) {
            return createPrettyError(401, "invalid token");
        }
        console.log("🚀 ~ file: isTokenVerify.ts:18 ~ decoded:", decoded);

        req.body.userInfo = decoded as UserInfo;
        next();
    } catch (error: any) {
        console.log("🚀 ~ file: isTokenVerify.ts:26 ~ error:", error.message);
        errorResponse({ res });
    }
};
