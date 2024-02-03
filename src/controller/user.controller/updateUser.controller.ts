import { Request, Response } from "express";

import { UserInfo } from "../../lib";
import { User } from "../../model";
import { createPrettyError, errorResponse, successResponse } from "../../utils";

export const updateUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.body.userInfo as UserInfo;

        const user = await User.findById(id);
        console.log("🚀 ~ updateUser ~ user:", user);

        if (!user) {
            return createPrettyError(401, "User not found");
        }

        const updatedUser = await User.findOneAndUpdate(
            { id: user.id },
            {
                $set: {
                    name: req.body.name,
                    email: req.body.email,
                    address: req.body.address,
                    phone: req.body.phone,
                },
            },
            { new: true }
        );

        if (!updatedUser) {
            return createPrettyError(
                401,
                "Unable to update the user with this ID"
            );
        }

        return successResponse({
            res,
            data: updatedUser,
            message: `User  Data updated `,
        });
    } catch (error: any) {
        console.log(error.message);
        errorResponse({ res });
    }
};
