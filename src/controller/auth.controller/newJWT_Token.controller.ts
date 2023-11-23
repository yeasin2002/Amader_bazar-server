import { Request, Response } from "express";
import { userJWT } from "../../lib";
import { User } from "../../model";
import { errorResponse, successResponse } from "../../utils";

export const newJWT_Token = async (req: Request, res: Response) => {
    try {
        const { id } = req.body.userInfo;
        const foundedUser = await User.findById(id);
        if (!foundedUser) {
            return errorResponse({ res, message: "User not found" });
        }
        const token = userJWT({
            id: foundedUser._id,
            name: foundedUser.name,
            email: foundedUser.email,
            number: foundedUser.phone,
        });
        return successResponse({
            res,
            data: token,
            message: "New Token Generated",
        });
    } catch (error: any) {
        console.log(error.message);
        errorResponse({ res });
    }
};
