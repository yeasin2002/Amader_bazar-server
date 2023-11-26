import { Request, Response } from "express";
import { Contact } from "../../model";
import { errorResponse, successResponse } from "../../utils";

export const CollectContactInfo = async (req: Request, res: Response) => {
    try {
        const { name, email, subject, message } = req.body;
        const contact = await Contact.create({ name, email, subject, message });
        if (!contact) {
            return errorResponse({
                res,
                statusCode: 400,
                message: `Unable to save contact info`,
            });
        }
        successResponse({ res, message: `Contact info saved successfully` });
    } catch (error: any) {
        console.log(error.message);
        errorResponse({ res });
    }
};
