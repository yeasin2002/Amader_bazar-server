import { Request, Response } from "express";
import { Order } from "../../model";
import { errorResponse, successResponse } from "../../utils";

export const clearAllOrder = async (req: Request, res: Response) => {
    try {
        const deletedOrders = await Order.deleteMany();
        successResponse({
            res,
            message: `Deleted ${deletedOrders?.deletedCount}  Orders`,
            data: deletedOrders,
        });
    } catch (error: any) {
        console.log(error.message);
        errorResponse({ res });
    }
};
