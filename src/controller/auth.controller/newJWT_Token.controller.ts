import { Request, Response } from "express";
import { errorResponse, generateJWT, successResponse } from "../../utils";

export const newJWT_Token = async (req: Request, res: Response) => {
    try {
        const token = generateJWT({
            data: {
                name: "",
            },
        });
        successResponse({ res, data: token, message: "New Token Generated" });
    } catch (error: any) {
        console.log(error.message);
        errorResponse({ res });
    }
};
