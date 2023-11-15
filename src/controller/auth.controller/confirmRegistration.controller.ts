import { Request, Response } from "express";
import { PendingUser, User } from "../../model";
import { createPrettyError, errorResponse, successResponse } from "../../utils";

export const confirmRegistration = async (req: Request, res: Response) => {
    try {
        const { token } = req.body;
        const pendingUserNeedToVerify = await PendingUser.findOne({ token });
        if (!pendingUserNeedToVerify) {
            return createPrettyError(`Invalid OTP`, 400);
        }
        const { name, email, phone, password, image, address } =
            pendingUserNeedToVerify;
        const newUser = await User.create({
            name,
            email,
            phone,
            password,
            image,
            address,
        });

        return await successResponse({
            res,
            message: "New Use Created successfully",
            data: newUser,
        });
    } catch (error: any) {
        console.log(error.message);
        errorResponse({ res });
    }
};
