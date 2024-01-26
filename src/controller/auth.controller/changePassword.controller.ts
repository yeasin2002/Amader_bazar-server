import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { UserInfo } from "../../lib";
import { User } from "../../model";
import { errorResponse, successResponse } from "../../utils";

export const changePassword = async (req: Request, res: Response) => {
    try {
        const { password, newPassword } = req.body;
        const { id } = req.body.userInfo as UserInfo;
        const theUser = await User.findById(id);

        if (!theUser) {
            return errorResponse({
                res,
                statusCode: 401,
                message: "User not found",
            });
        }
        const isPasswordMatch = await bcrypt.compare(
            password,
            theUser.password
        );
        if (!isPasswordMatch) {
            return errorResponse({
                res,
                statusCode: 401,
                message: "Password not match",
            });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);

        await User.findByIdAndUpdate(id, {
            $set: { password: hashedPassword },
        });
        return successResponse({ res, message: "Password updated" });
    } catch (error) {
        errorResponse({ res });
    }
};
