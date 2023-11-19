import { Request, Response } from "express";
import { User } from "../../model";
import { createPrettyError, errorResponse, successResponse } from "../../utils";

//! Paused
export const confirmForgotPassword = async (req: Request, res: Response) => {
    try {
        const { email } = req.body;
        const findUser = await User.findOne({ email });
        if (!findUser) createPrettyError(404, "User not found");

        successResponse({
            res,
            message: "password reset",
        });
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.log(error.message);
            return errorResponse({ res, message: error.message });
        }
        errorResponse({ res });
    }
};
