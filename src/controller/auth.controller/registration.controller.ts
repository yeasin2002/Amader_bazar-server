import { Request, Response } from "express";
import { PendingUser } from "../../model";

import { random } from "../../helpers";
import {
    SendMailWithNodemailer,
    errorResponse,
    successResponse,
} from "../../utils";

export const registration = async (req: Request, res: Response) => {
    try {
        const { email, phone, password } = req.body;

        const id = random().slice;
        await SendMailWithNodemailer({
            revivers: [email],
            Subject: `Registration Confirmation`,
            html: `
        <h1>Registration Confirmation</h1>
        <p>Thank you for registering!</p>
        <p>Here Is your OTP</p>
        <p>
        <b>${id}</b>
        </p>`,
        });

        const user = await PendingUser.create({
            email,
            phone,
            password,
            token: id,
        });
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
