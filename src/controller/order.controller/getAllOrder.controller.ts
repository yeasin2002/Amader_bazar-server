import { Request, Response } from "express";
import { Order } from "../../model";
import { errorResponse, successResponse } from "../../utils";

export const getAllOrder = async (req: Request, res: Response) => {
    try {
        const pendingOrders = await Order.find({
            OrderStatus: "Pending",
        })
            .populate("User")
            .populate("Products.Product");

        const orders = await Order.find()
            .populate("User")
            .populate("Products.Product");

        successResponse({
            res,
            message: "Got all order",
            data: {
                pending: pendingOrders,
                all: orders,
            },
        });
    } catch (error: any) {
        console.log(error.message);
        errorResponse({ res });
    }
};
