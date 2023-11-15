import nodemailer from "nodemailer";
import { smtpPassword, smtpUsername } from "./exportEnv";
import { errorResponse } from "./responseHandler";

interface nodemailerArg {
    revivers: string;
    bcc?: string[];
    Subject: string;
    text?: string;
    html: string;
    attachments?: any[];
}

const transporter = nodemailer.createTransport({
    service: `gmail`,
    auth: {
        user: smtpUsername,
        pass: smtpPassword,
    },
});

export const SendMailWithNodemailer = async ({
    revivers = "",
    bcc,
    Subject = ``,
    text = ``,
    html = ``,
}: nodemailerArg) => {
    try {
        const info = await transporter.sendMail({
            from: `amaderbazar.com`, // ⁡⁢⁢⁢sender address⁡ - ⁡⁢⁣⁢Must⁡
            to: revivers, // ⁡⁢⁢⁢list of receivers⁡ - ⁡⁢⁣⁢Must⁡
            bcc: [...bcc], // list of receivers
            subject: Subject, // Subject line
            text: text, // plain text body
            html: html, // ⁡⁢⁢⁢html body⁡ - ⁡⁢⁣⁢Must⁡
        });
        console.log(`✉️ Message sent :${info?.response}`);
    } catch (error: any) {
        console.log("📪 Send Mail", error?.message);
        errorResponse({
            res: null,
            statusCode: 500,
            message: "Unable to sent mail",
        });
    }
};
