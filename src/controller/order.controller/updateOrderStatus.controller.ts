import { Request, Response } from "express";
import kleur from "kleur";
import { Order } from "../../model";
import { errorResponse, successResponse } from "../../utils";

export const updateOrderStatus = async (req: Request, res: Response) => {
    try {
        console.log(kleur.bgBlue("Status : "), req.body);

        const updatedOrders = await Order.findByIdAndUpdate(
            req.params.id,
            { OrderStatus: req.body.OrderStatus },
            { new: true }
        );
        console.log(kleur.bgGreen("🚀 updatedOrders:"), updatedOrders);

        successResponse({
            res,
            data: updatedOrders,
            message: `The order has been updated`,
        });
    } catch (error: any) {
        console.log(error.message);
        errorResponse({ res });
    }
};
