import { NextFunction, Request, Response } from "express";

import { validationResult } from "express-validator";
import kleur from "kleur";
import { errorResponse } from "../utils";

const validationRunner = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        console.log(req.body);
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const ErrorPaths = errors.array().map((err) => err.type);
            const errorMsg = errors.array().map((err) => err.msg);
            console.log("ErrorPaths : ", ErrorPaths);

            return res.status(400).json({
                status: `failed`,
                message: `${ErrorPaths} are not validated `,
                error: errorMsg,
            });
        }
        next();
    } catch (error: any) {
        console.log(
            kleur.bgRed().white().bold(`"ValidationRunner", ${error.message}`)
        );
        errorResponse({ res, message: " Unable to validate Request" });
    }
};
module.exports = validationRunner;
