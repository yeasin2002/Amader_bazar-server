import { Request, Response } from "express";
import { User } from "../../model";
import { createPrettyError, errorResponse, successResponse } from "../../utils";

export const updateUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updatedUser = await User.findOneAndUpdate(
            { id },
            { $set: req.body },
            { new: true }
        );
        if (!updatedUser)
            createPrettyError(401, "Unable to find the user with this ID");

        successResponse({
            res,
            data: updatedUser,
            message: `Unable to update user `,
        });
    } catch (error: any) {
        console.log(error.message);
        errorResponse({ res });
    }
};
