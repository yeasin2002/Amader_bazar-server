import { Response } from "express";

export const successResponse = (
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

export const errorResponse = (
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


