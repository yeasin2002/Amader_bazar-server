import { Request, Response } from "express";
import { errorResponse, successResponse } from "../../utils";

export const rootRoute = async (req: Request, res: Response) => {
    try {

        successResponse({
            res,
            message: "Welcome to the Amader Bazar API",
            data: {
                routes: {
                    user: "/user",
                    category: "/category",
                    auth: "/auth",
                },
            },
        });
    } catch (error: any) {
        console.log(error.message);
        errorResponse({ res });
    }
};
