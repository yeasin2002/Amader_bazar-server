import { Request, Response } from "express";
import { unlink } from "fs/promises";
import kleur from "kleur";
import { cwd } from "process";
import { UserInfo } from "../../lib";
import { User } from "../../model";
import {
    deleteImageFromServer,
    errorResponse,
    successResponse,
} from "../../utils";

export const updateUserAvatar = async (req: Request, res: Response) => {
    try {
        const { id } = req.body.userInfo as UserInfo;
        const theUser = await User.findById(id);

        console.log(kleur.bgBlue("IMAGE"), req?.file?.filename);

        if (!theUser) {
            return errorResponse({
                res,
                message: "User not found with this id ",
                statusCode: 404,
            });
        }
        await deleteImageFromServer("users", theUser?.avatar);

        const updatedUser = await User.findByIdAndUpdate(
            id,
            { avatar: req?.file?.filename },
            { new: true }
        );

        return successResponse({
            res,
            message: "User avatar updated successfully",
            data: updatedUser,
        });

        // req?.file?.filename
        // req.body.userInfo -> id
    } catch (error) {
        console.log(kleur.bgRed("🚀 Error"), error.message);
        return errorResponse({ res, message: "Unable to update image" });
    }
};
