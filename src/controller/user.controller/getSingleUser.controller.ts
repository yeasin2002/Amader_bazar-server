import { Request, Response } from "express";
import { User } from "../../model";
import { createPrettyError, errorResponse, successResponse } from "../../utils";

export const getSingleUser = async (req: Request, res: Response) => {
    try {
        const theUser = await User.findById(req.params.id);
        if (!theUser)
            createPrettyError(404, "No user found, Unable to find the user");

        successResponse({ res, data: theUser, message: "Got the user data" });
    } catch (error: any) {
        console.log(error.message);
        errorResponse({ res });
    }
};
