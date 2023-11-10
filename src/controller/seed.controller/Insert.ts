import { Request, Response } from "express";

import { DemoUser } from "../../model/DemoUser";
import { errorResponse, successResponse } from "../../utils/responseHandler";

export const Insert = async (req: Request, res: Response) => {
    try {
        console.table(req.body);
        const newUser = await DemoUser.create({
            firstName: req.body.firstName || "Not provided",
            lastName: req.body.lastName || "Not provided",
        });
        successResponse({ res, message: "Inserted", data: newUser });
    } catch (error: any) {
        console.log(error.message);
        errorResponse({ res });
    }
};
