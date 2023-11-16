import { Request, Response } from "express";
import { userJWT } from "../../lib";
import { errorResponse, successResponse } from "../../utils";

export const newJWT_Token = async (req: Request, res: Response) => {
    try {
        const token = userJWT();
        successResponse({ res, data: token, message: "New Token Generated" });
    } catch (error: any) {
        console.log(error.message);
        errorResponse({ res });
    }
};
