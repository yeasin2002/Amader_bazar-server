import { Request, Response } from "express";
import { DemoUser } from "../../model/User.model.js";
import { errorResponse, successResponse } from "../../utils/responseHandler.js";

export const seedUser = async (req: Request, res: Response) => {
    try {
        DemoUser.create({
            firstName: "John",
            lastName: "Doe",
        });
        successResponse({ res });
    } catch (error: any) {
        console.log(error.message);
        errorResponse({ res });
    }
};
