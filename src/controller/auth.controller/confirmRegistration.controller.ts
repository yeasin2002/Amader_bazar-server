import fs from "fs/promises";
import { Request, Response } from "express";
import { PendingUser, User } from "../../model";
import {
    createPrettyError,
    errorResponse,
    generateJWT,
    successResponse,
} from "../../utils";

export const confirmRegistration = async (req: Request, res: Response) => {
    try {
        const { token } = req.body;
        const userInfo = req.body.userInfo;
        const pendingUserNeedToVerify = await PendingUser.findOne({
            name: userInfo.name,
        });
        if (!pendingUserNeedToVerify) createPrettyError(400, `Invalid OTP`);

        const { name, email, phone, password, address, avatar } =
            pendingUserNeedToVerify;

        const oldPath = process.cwd() + `/uploads/pendingUser/${avatar}`;
        const newPath = process.cwd() + `/uploads/users/${avatar}`;
        await fs.rename(oldPath, newPath);
        await fs.unlink(oldPath);

        const data = await User.create({
            name,
            email,
            phone,
            password,
            address,
            avatar,
        });
        if (!data) createPrettyError(500, `Something went wrong`);
        const userToken = generateJWT({
            data: {
                id: data._id,
                name: data.name,
                email: data.email,
                phone: data.phone,
            },
        });
        return successResponse({
            res,
            message: "New Use Created successfully",
            data: {
                token: userToken,
                userInfo: data,
            },
        });
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.log(error.message);
            errorResponse({ res });
        }
    }
};
