import { Request, Response } from "express";
import { User } from "../../model";
import { createPrettyError, errorResponse, successResponse } from "../../utils";

export const getAllUser = async (req: Request, res: Response) => {
    try {
        const { limit = 100, page = 0 } = req.body;
        const data = await User.find({}).limit(limit).skip(page);
        if (!data) createPrettyError("could't find any user");
        successResponse({ res, data, message: "Unable to get any user" });
    } catch (error: any) {
        console.log(error.message);
        errorResponse({ res });
    }
};
