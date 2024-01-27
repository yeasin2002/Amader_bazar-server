import { Response } from "express";
import kleur from "kleur";

const successResponse = ({
    res,
    message,
    data,
    statusCode,
}: {
    res: Response;
    message?: string;
    data?: any;
    statusCode?: number;
}) => {
    return res.status(statusCode || 200).json({
        success: true,
        statusCode: statusCode || 200,
        message: message || `Success`,
        data: data || null,
    });
};

const errorResponse = ({
    res,
    message,
    statusCode,
    errMsg,
}: {
    res: Response;
    message?: string;
    statusCode?: number;
    errMsg?: string;
}) => {
    errMsg && console.log(kleur.bgRed("Error"), errMsg);
    return res.status(statusCode || 500).json({
        success: false,
        message: message || `Internal Server Error`,
        statusCode: statusCode || 500,
    });
};

export { errorResponse, successResponse };
