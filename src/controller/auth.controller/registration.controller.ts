import { Request, Response } from "express";
import { random } from "../../helpers";
import { PendingUser } from "../../model";
import {
    errorResponse,
    sendMailWithNodemailer,
    successResponse,
} from "../../utils";

export const registration = async (req: Request, res: Response) => {
    try {
        const { email, phone, password, image, name, address } = req.body;
        const id = random().slice(0, 6);

        await sendMailWithNodemailer({
            receivers: email,
            subject: "Confirm Registration",
            html: `
            <h1>Registration Confirmation</h1>
            <p>Thank you for registering!</p>
            <p>Here Is your OTP</p>
            <h1 style="background-color: rgb(225, 224, 224); padding: 10px; color: rgb(29, 29, 29);" >${id}</h1>`,
        });

        //! save image to uploads folder
        const user = await PendingUser.create({
            name,
            email,
            phone,
            password,
            image,
            address,
            token: id,
        });

        await successResponse({
            res,
            message: `Registration successful, please check your email for verification link`,
            data: {
                token: id,
                user,
            },
        });
    } catch (error: any) {
        console.log(error.message);
        errorResponse({ res, message: error.message });
    }
};
