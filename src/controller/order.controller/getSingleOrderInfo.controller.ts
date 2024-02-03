import { Request, Response } from "express";
import { Order } from "../../model";
import { errorResponse, successResponse } from "../../utils";

export const getSingleOrderInfo = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const singleOrder = await Order.findById(id)
            .populate("User")
            .populate("Products.Product");

        return successResponse({
            res,
            message: "Got all order",
            data: singleOrder,
        });
    } catch (error: any) {
        console.log(error.message);
        errorResponse({ res });
    }
};
