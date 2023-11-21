import { Request, Response } from "express";
// import { OrderProduct } from "../../model";
import { errorResponse, successResponse } from "../../utils";

export const rootRoute = async (req: Request, res: Response) => {
    try {
        successResponse({
            res,
            message: "Your Order has been placed successfully",
        });
    } catch (error: any) {
        console.log(error.message);
        errorResponse({ res });
    }
};
