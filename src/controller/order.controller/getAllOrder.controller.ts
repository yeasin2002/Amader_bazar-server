import { Request, Response } from "express";
import { UserInfo } from "../../lib";
import { Order } from "../../model";
import { errorResponse, successResponse } from "../../utils";

export const getAllOrderThatPlacedByUser = async (
    req: Request,
    res: Response
) => {
    try {
        const userInfo: UserInfo = req.body.userInfo;
        const orders = await Order.find({ User: userInfo.id }).populate(
            "Products.Product"
        );
        // .populate("User");

        successResponse({ res, message: "Got all order", data: orders });
    } catch (error: any) {
        console.log(error.message);
        errorResponse({ res });
    }
};
