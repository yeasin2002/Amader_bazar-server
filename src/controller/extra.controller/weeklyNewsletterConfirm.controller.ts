import { Request, Response } from "express";
import {
    errorResponse,
    sendMailWithNodemailer,
    successResponse,
} from "../../utils";

export const weeklyNewsletterConfirm = async (req: Request, res: Response) => {
    try {
        const { email } = req.body;
        await sendMailWithNodemailer({
            receivers: email,
            subject: "Weekly Newsletter Subscription",
            html: `<h1>Thanks for subscribing to our weekly newsletter</h1>`,
        });
        successResponse({ res, message: "Thanks,Check your email" });
    } catch (error: any) {
        console.log(error.message);
        errorResponse({ res });
    }
};
