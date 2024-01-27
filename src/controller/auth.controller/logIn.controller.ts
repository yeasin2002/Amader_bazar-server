import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { userJWT } from "../../lib";
import { User } from "../../model";
import { createPrettyError, errorResponse, successResponse } from "../../utils";

export const logIn = async (req: Request, res: Response) => {
    try {
        const { email, password, phone } = req.body;
        const theUser = await User.findOne({
            $or: [{ email }, { phone: phone }],
        });
        if (!theUser) {
            return errorResponse({
                res,
                statusCode: 404,
                message: "User not found",
            });
        }

        const checkPass = await bcrypt.compare(password, theUser.password);
        console.log(
            "🚀 ~ file: logIn.controller.ts:22 ~ logIn ~ checkPass:",
            checkPass
        );
        if (!checkPass) createPrettyError(404, "Wrong password");
        const token = userJWT({
            id: theUser._id,
            name: theUser.name,
            email: theUser.email,
        });

        successResponse({
            res,
            data: {
                token,
                user: {
                    id: theUser._id,
                    name: theUser.name,
                    email: theUser.email,
                    isAdmin: theUser.isAdmin,
                    avatar: theUser.avatar,
                    address: theUser.address,
                    phone: theUser.phone,
                },
            },
            message: "User logged in",
        });
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.log(error.name + "::" + error.message);
            errorResponse({ res, message: error.message });
        } else {
            errorResponse({ res, message: "Something went wrong" });
        }
    }
};
