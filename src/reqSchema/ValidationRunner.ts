import { NextFunction, Request, Response } from "express";

import { validationResult } from "express-validator";
import kleur from "kleur";
import { errorResponse } from "../utils";

export const validationRunner = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        console.log(req.body);
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const errorMsg = errors.array().map((err) => err.msg);

            return res.status(400).json({
                status: `failed`,
                message: `Some field are not validated `,
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
