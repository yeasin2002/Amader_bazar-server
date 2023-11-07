import { NextFunction, Request, Response } from "express";
import jsonwebtoken from "jsonwebtoken";

const { jwtSecretKey } = require(`../utils/exportEnv`);
const { createPrettyError } = require(`../utils`);
const { errorResponse } = require(`../utils/ResponseHandler`);

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

        const tokenInfo = jsonwebtoken.verify(token, jwtSecretKey);
        req.body.tokenInfo = tokenInfo;
        next();
    } catch (error: any) {
        errorResponse(res, {
            statusCode: error.statusCode,
            message: error.message,
        });
    }
};
