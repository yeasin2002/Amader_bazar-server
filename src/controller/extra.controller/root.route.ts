import { Request, Response } from "express";
import { errorResponse, successResponse } from "../../utils";

export const rootRoute = async (req: Request, res: Response) => {
    try {
        successResponse({
            res,
            message: "Welcome to the Amader Bazar API",
            data: {
                routes: {
                    "api-docs": "/api-docs",
                    user: "/api/v1/user",
                    auth: "/api/v1/auth",
                    seed: "/api/v1/seed",
                    category: "/api/v1/category",
                    product: "/api/v1/product",
                    order: "/api/v1/order",
                    dashboard: "/api/v1/dashboard",
                    extra: "/api/v1/extra",
                },
            },
        });
    } catch (error: any) {
        console.log(error.message);
        errorResponse({ res });
    }
};
