import { Request, Response } from "express";
import { PendingUser } from "../../model";

import { random } from "../../helpers";
import { errorResponse, successResponse } from "../../utils";

export const registration = async (req: Request, res: Response) => {
    try {
        const { email, phone, password } = req.body;
        //! Sent email to user
        const id = random().slice;
        const user = await PendingUser.create({ email, phone, password });
        successResponse({
            res,
            message: `Registration successful, please check your email for verification link`,
            data: {
                token: id,
                user,
            },
        });
    } catch (error: any) {
        console.log(error.message);
        errorResponse({ res });
    }
};
