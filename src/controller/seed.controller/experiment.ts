import { randomUUID } from "crypto";
import { Request, Response } from "express";
import { createPrettyError, errorResponse, successResponse } from "../../utils";

export const experiment = async (req: Request, res: Response) => {
    try {
        /*
        https://api.aladhan.com/v1/asmaAlHusna/1,2
        */
        const numbers = [];
        for (let i = 1; i <= 99; i++) {
            numbers.push(i);
        }
        const commaSeparatedNumbers = numbers.join(",");
        const url = `https://api.aladhan.com/v1/asmaAlHusna/${commaSeparatedNumbers}`;
        console.log(url);
        return successResponse({ res, data: url });
    } catch (error: any) {
        console.log(error?.message);
        errorResponse({ res, message: error?.message });
    }
};
