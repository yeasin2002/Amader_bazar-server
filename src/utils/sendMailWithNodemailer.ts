import kleur from "kleur";
import nodemailer from "nodemailer";
import { smtpPassword, smtpUsername } from "./exportEnv";

interface nodemailerArg {
    revivers: string[];
    bcc?: string[];
    Subject: string;
    text?: string;
    html: string;
    attachments?: any[];
}

const transporter = nodemailer.createTransport({
    service: `gmail`,
    secure: true,
    auth: {
        user: smtpUsername,
        pass: smtpPassword,
    },
});

export const SendMailWithNodemailer = async ({
    revivers = [],
    bcc,
    Subject = ``,
    text = ``,
    html = ``,
    attachments,
}: nodemailerArg) => {
    const info = await transporter.sendMail({
        from: `Amader-Bazar`, // ⁡⁢⁢⁢sender address⁡ - ⁡⁢⁣⁢Must⁡
        to: [...revivers], // ⁡⁢⁢⁢list of receivers⁡ - ⁡⁢⁣⁢Must⁡
        bcc: [...bcc], // list of receivers
        subject: Subject, // Subject line
        text: text, // plain text body
        html: html, // ⁡⁢⁢⁢html body⁡ - ⁡⁢⁣⁢Must⁡
        attachments: attachments,
    });
    console.log(kleur.bgGreen().black(`Message sent:${info.response}`));
};
