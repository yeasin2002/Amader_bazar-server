import { Request, Response } from "express";
import { PendingUser, User } from "../../model";
import { createPrettyError, errorResponse, successResponse } from "../../utils";

export const confirmRegistration = async (req: Request, res: Response) => {
    try {
        const { token } = req.body;
        const pendingUserNeedToVerify = await PendingUser.findOne({ token });
        if (!pendingUserNeedToVerify) createPrettyError(`Invalid OTP`, 400);

        const {
            name,
            email,
            phone,
            password,
            image = "",
            address,
        } = pendingUserNeedToVerify;
        const data = await User.create({
            name,
            email,
            phone,
            password,
            image,
            address,
        });

        return successResponse({
            res,
            message: "New Use Created successfully",
            data,
        });
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.log(error.message);
            errorResponse({ res });
        }
    }
};
