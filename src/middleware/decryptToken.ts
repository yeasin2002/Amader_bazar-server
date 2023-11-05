import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

import { createPrettyError, jwtSecretKey } from "../utils";
import { errorResponse } from "../utils/ResponseHandler";

export const decryptToken = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        if (!req.headers.authorization) {
            return createPrettyError(403, `Authorization Required`);
        }

        const token = req.headers.authorization.split(` `)[1] || ``;
        if (!token) createPrettyError(403, `Token Required`);

        const tokenInfo = jwt.verify(token, jwtSecretKey);
        req.body.tokenInfo = tokenInfo;
        // req.tokenInfo = tokenInfo;
        next();
    } catch (error: any) {
        errorResponse(res, {
            statusCode: error.statusCode,
            message: error.message,
        });
    }
};
