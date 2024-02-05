import { Request, Response } from "express";
import { Order } from "../../model";
import { errorResponse, successResponse } from "../../utils";

export const deleteSingleOrder = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const singleOrder = await Order.findByIdAndDelete(id);
        return successResponse({
            res,
            message: "Deleted a  order",
            data: singleOrder,
        });
    } catch (error: any) {
        console.log(error.message);
        errorResponse({ res });
    }
};
