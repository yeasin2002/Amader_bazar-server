import bcrypt from "bcrypt";
import { Request, Response } from "express";
import kleur from "kleur";
import { User } from "../../model";
import {
    deleteImageFromServer,
    errorResponse,
    successResponse,
} from "../../utils";

export const deleteAccount = async (req: Request, res: Response) => {
    try {
        console.log(req.body);
        const { userInfo, password } = req.body;
        const theUser = await User.findById(userInfo.id);
        console.log("🚀 ~ deleteAccount ~ theUser:", theUser);

        if (!theUser) {
            return errorResponse({ res, message: "User not found" });
        }
        const isPasswordCorrect = await bcrypt.compare(
            password,
            theUser.password
        );
        if (!isPasswordCorrect) {
            return errorResponse({ res, message: "Password is incorrect" });
        }

        await User.findByIdAndDelete(userInfo.id);
        await deleteImageFromServer("users", theUser?.avatar);

        return successResponse({ res, message: "User Deleted" });
    } catch (error) {
        console.log(kleur.bgBlue("Delete Account Error"), error.message);
        errorResponse({ res });
    }
};
