import { Response } from "express";

const successResponse = (
    res: Response,
    data?: any,
    statusCode?: number,
    message?: string
) => {
    return res.status(statusCode || 200).json({
        success: true,
        message: message || `Success`,
        data: data || null,
    });
};

const errorResponse = (
    res: Response,
    message?: string,
    statusCode?: number
) => {
    return res.status(statusCode || 500).json({
        success: false,
        message: message || `Internal Server Error`,
    });
};

export { errorResponse, successResponse };
