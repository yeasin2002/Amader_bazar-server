import { Request, Response } from "express";
import fs from "fs/promises";
import jsonwebtoken from "jsonwebtoken";
import { UserInfo } from "../../lib";
import { PendingUser, User } from "../../model";
import {
    createPrettyError,
    errorResponse,
    generateJWT,
    jwtSecretKey,
    successResponse,
} from "../../utils";

export const confirmRegistration = async (req: Request, res: Response) => {
    try {
        const { token, OTP } = req.body;
        const decoded = jsonwebtoken.verify(token, jwtSecretKey!) as UserInfo;

        if (!decoded) {
            return errorResponse({
                res,
                message: "invalid user",
            });
        }

        const pendingUserNeedToVerify = await PendingUser.findOne({
            email: decoded.email,
        });
        if (!pendingUserNeedToVerify) {
            return errorResponse({
                res,
                message: "Invalid User",
            });
        }
        const checkOTPmatch = pendingUserNeedToVerify.token == OTP;
        if (!checkOTPmatch) {
            return errorResponse({
                res,
                message: "Invalid OTP",
            });
        }

        const { name, email, phone, password, address, avatar } =
            pendingUserNeedToVerify;

        if (avatar) {
            const oldPath = process.cwd() + `/uploads/pendingUser/${avatar}`;
            const newPath = process.cwd() + `/uploads/users/${avatar}`;
            await fs.rename(oldPath, newPath);
        }

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

        await PendingUser.findOneAndDelete({ email: decoded.email });
        return successResponse({
            res,
            message: "New Use Created successfully",
            data: {
                token: userToken,
                user: {
                    id: data._id,
                    name: data.name,
                    email: data.email,
                    isAdmin: data.isAdmin,
                    avatar: data?.avatar || "",
                },
            },
        });
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.log(error.message);
            errorResponse({ res });
        }
    }
};
