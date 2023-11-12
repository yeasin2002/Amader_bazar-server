import { Request, Response } from "express";
import { demoUser } from "../../data/demo/user";
import { User } from "../../model";
import { errorResponse, successResponse } from "../../utils/responseHandler";

export const seedNewUser = async (req: Request, res: Response) => {
    try {
        const newUsers = await User.insertMany(demoUser);
        await successResponse({
            res,
            message: "Created Demo Data",
            data: newUsers,
        });
    } catch (error: any) {
        console.log(error.message);
        errorResponse({ res });
    }
};
