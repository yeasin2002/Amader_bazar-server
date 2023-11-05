import { Response } from "express";

const successResponse = (
    res: Response,
    {
        data,
        statusCode,
        message,
    }: {
        data: any;
        statusCode: number;
        message: string;
    }
) => {
    return res.status(statusCode || 200).json({
        success: true,
        message: message || `Success`,
        data: data || null,
    });
};

const errorResponse = (
    res: Response,
    {
        message,
        statusCode,
    }: {
        message?: string;
        statusCode?: number;
    } = {}
) => {
    return res.status(statusCode || 500).json({
        success: false,
        message: message || `Internal Server Error`,
    });
};

module.exports = { errorResponse, successResponse };
