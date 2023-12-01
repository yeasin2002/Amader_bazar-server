import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { getUserJWT } from "../lib";
import { User } from "../model";
import { errorResponse } from "../utils";

export const isAdmin = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const token = req.headers.authorization?.trim().split(" ").at(-1);
        const decodedToken = getUserJWT(token);
        const SearchUser = await User.findById(decodedToken);
        if (!SearchUser) {
            return errorResponse({
                res,
                statusCode: 404,
                message: "User not found",
            });
        }
        req.body.userInfo = SearchUser.isAdmin;
        return next();
    } catch (error: any) {
        console.log(error.message);
        errorResponse({ res });
    }
};
