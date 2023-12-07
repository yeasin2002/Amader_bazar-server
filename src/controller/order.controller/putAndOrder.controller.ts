import { Request, Response } from "express";
import { UserInfo } from "../../lib";
import { Order, Product } from "../../model";
import { errorResponse, successResponse } from "../../utils";

interface OrderRequestBody {
    ip?: string;
    paymentMethod?: "cash" | "card";
    address: string;
    phone: string;
    TotalAmount: number;
    orderStatus?: "Pending" | "Processing" | "Completed" | "Cancelled";
    product: [
        {
            Product: import("mongoose").Types.ObjectId;
            Quantity: number;
        },
    ];
    userInfo: UserInfo;
}

export const putAnOrder = async (req: Request, res: Response) => {
    try {
        const body: OrderRequestBody = req.body;
        const createOrder = await Order.create({
            OrderAddress: body.address,
            OrderPaymentMethod: body.paymentMethod,
            OrderStatus: body.orderStatus,
            Products: body.product,
            TotalAmount: body.TotalAmount,
            User: body.userInfo.id,
        });
        if (!createOrder) {
            return errorResponse({ res, message: "Order is not created" });
        }

        body.product.map(async (item) => {
            const product = await Product.findById(item.Product);
            if (!product) return;
            product.quantity = product.quantity - item.Quantity;
            await product.save();
        });

        successResponse({
            res,
            message: "Your Order has been placed successfully",
        });
    } catch (error: any) {
        console.log("Error", error.message);
        errorResponse({ res });
    }
};
