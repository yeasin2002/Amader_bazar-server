import chalk from "chalk";
import nodemailer from "nodemailer";
import { smtpPassword, smtpUsername } from "./exportEnv.js";

export const transporter = nodemailer.createTransport({
    service: `gmail`,
    secure: true,
    auth: {
        user: smtpUsername,
        pass: smtpPassword,
    },
});

export const SendMail = async ({
    revivers: [...revivers] = [],
    bcc = [],
    Subject = ``,
    text = ``,
    html = ``,
    attachments = [],
}) => {
    const info = await transporter.sendMail({
        from: `Amader-Bazar`, // ⁡⁢⁢⁢sender address⁡ - ⁡⁢⁣⁢Must⁡
        to: [...revivers], // ⁡⁢⁢⁢list of receivers⁡ - ⁡⁢⁣⁢Must⁡
        bcc: [...bcc], // list of receivers
        subject: Subject, // Subject line
        text: text, // plain text body
        html: html, // ⁡⁢⁢⁢html body⁡ - ⁡⁢⁣⁢Must⁡
        attachments: attachments,
    });
    console.log(chalk.bgRed.bold(`Message sent:${info.response}`));
};
