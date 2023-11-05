import { jsonwebtoken as jwt } from "$npmModules/index.js";
import { NextFunction, Request, Response } from "express";

const { jwtSecretKey } = require(`../utils/exportEnv`);
const { createPrettyError } = require(`../utils`);
const { errorResponse } = require(`../utils/ResponseHandler`);

const decryptToken = async (
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

module.exports = decryptToken;
