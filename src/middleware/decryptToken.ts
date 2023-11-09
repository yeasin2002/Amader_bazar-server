import { NextFunction, Request, Response } from "express";
import jsonwebtoken from "jsonwebtoken";
import { createPrettyError } from "../utils/createPrettyError.js";
import { jwtSecretKey } from "../utils/exportEnv.js";
import { errorResponse } from "../utils/responseHandler.js";

export const decryptToken = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        if (!req.headers.authorization) {
            return createPrettyError(`Authorization Required`, 403);
        }

        const token = req.headers.authorization.split(` `)[1] || ``;
        if (!token) createPrettyError(`Token Required`, 403);

        const tokenInfo = jsonwebtoken.verify(token, jwtSecretKey);
        req.body.tokenInfo = tokenInfo;
        next();
    } catch (error: any) {
        errorResponse({ res });
    }
};
