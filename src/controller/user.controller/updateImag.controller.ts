import { Request, Response } from "express";
import { unlink } from "fs/promises";
import kleur from "kleur";
import { UserInfo } from "../../lib";
import { User } from "../../model";
import { errorResponse, successResponse } from "../../utils";

export const updateUserAvatar = async (req: Request, res: Response) => {
    try {
        console.log(kleur.bgGreen("Body"), "🚀", req.body.userInfo);
        
        const { id } = req.body.userInfo as UserInfo;
        console.log(kleur.bgYellow("ID"), "🚀", id);

        const theUser = await User.findById(id);
        console.log(kleur.bgGreen("theUser"), "🚀", theUser);

        if (!theUser) {
            return errorResponse({
                res,
                message: "User not found with this id ",
                statusCode: 404,
            });
        }
        theUser?.avatar && (await unlink(theUser?.avatar));

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
