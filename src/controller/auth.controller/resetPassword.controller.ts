import bcryptjs from "bcryptjs";
import { Request, Response } from "express";
import { User } from "../../model";
import { createPrettyError, errorResponse, successResponse } from "../../utils";

export const resetPassword = async (req: Request, res: Response) => {
    try {
        const { email, password, newPassword, phone } = req.body;
        const user = await User.findOne({ $or: [{ email }, { phone }] });
        if (!user) createPrettyError(404, "No user found");

        const verifyPassword = await bcryptjs.compare(user.password, password);
        if (!verifyPassword) createPrettyError(401, "Unothenticated");

        const updatedUserPassword = User.findOneAndUpdate(
            { email },
            { password: newPassword },
            { new: true }
        );

        successResponse({
            res,
            message: "password updated successfully",
            data: updatedUserPassword,
        });
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.log(error.message);
            return errorResponse({ res, message: error.message });
        }
        errorResponse({ res });
    }
};
