import { Request, Response } from "express";
import { User } from "../../model";
import { errorResponse, successResponse } from "../../utils/responseHandler";

export const removeAllUser = async (req: Request, res: Response) => {
    try {
        const deletedUser = await User.deleteMany({});
        await successResponse({
            res,
            message: "Cleared all user",
            data: deletedUser,
        });
    } catch (error: any) {
        console.log(error.message);
        errorResponse({ res, message: error.message });
    }
};
