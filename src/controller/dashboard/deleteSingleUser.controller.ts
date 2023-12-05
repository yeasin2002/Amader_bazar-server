import { Request, Response } from "express";
import { User } from "../../model";
import { errorResponse, successResponse } from "../../utils";

export const deleteSingleUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user = await User.findOneAndDelete({ id });

        if (!user) {
            return errorResponse({
                res,
                statusCode: 404,
                message: "unable to delete User ",
            });
        }

        return successResponse({ res, data: user });
    } catch (error: any) {
        console.log(error.message);
        errorResponse({ res });
    }
};
