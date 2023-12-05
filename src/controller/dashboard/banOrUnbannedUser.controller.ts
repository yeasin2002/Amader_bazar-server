import { Request, Response } from "express";
import { User } from "../../model";
import { errorResponse, successResponse } from "../../utils";

export const banOrUnbannedUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { isBannedPreValue } = req.body;

        const category = await User.findOneAndUpdate(
            { _id: id },
            {
                isBanned: isBannedPreValue ? false : true,
            },
            { new: true }
        );

        if (!category) {
            return errorResponse({
                res,
                statusCode: 404,
                message: "unable to delete category ",
            });
        }

        return successResponse({ res, data: category });
    } catch (error: any) {
        console.log(error.message);
        errorResponse({ res });
    }
};
