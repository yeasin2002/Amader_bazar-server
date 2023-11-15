import nodemailer from "nodemailer";
import { createPrettyError } from "./createPrettyError";
import { smtpPassword, smtpUsername } from "./exportEnv";

// interface nodemailerArg {
//     revivers: string;
//     bcc?: string[];
//     Subject: string;
//     text?: string;
//     html: string;
// }

// const transporter = nodemailer.createTransport({
//     service: `gmail`,
//     auth: {
//         user: smtpUsername,
//         pass: smtpPassword,
//     },
// });

// export const SendMailWithNodemailer = async ({
//     revivers = "",
//     bcc,
//     Subject = "",
//     text = "",
//     html = "",
// }: nodemailerArg) => {
//     try {
//         const info = await transporter.sendMail({
//             from: `amaderbazar.netlify.com`, // ⁡⁢⁢⁢sender address⁡ - ⁡⁢⁣⁢Must⁡
//             to: revivers, // ⁡⁢⁢⁢list of receivers⁡ - ⁡⁢⁣⁢Must⁡
//             bcc: [...bcc], // list of receivers
//             subject: Subject, // Subject line
//             text: text, // plain text body
//             html: html, // ⁡⁢⁢⁢html body⁡ - ⁡⁢⁣⁢Must⁡
//         });
//         console.log(`✉️ Message sent :${info?.response}`);
//     } catch (error: any) {
//         console.log("📪 Send Mail", error?.message);
//         errorResponse({
//             res: null,
//             statusCode: 500,
//             message: "Unable to sent mail",
//         });
//     }
// };

interface NodemailerArg {
    receivers: string;
    subject: string;
    text?: string;
    html: string;
}

export async function sendMailWithNodemailer(args: NodemailerArg) {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: smtpUsername,
            pass: smtpPassword,
        },
    });

    const mailOptions = {
        from: "amaderbazar.netlity.com", // sender address
        to: args.receivers, // list of receivers
        subject: args.subject, // Subject line
        text: args.text, // plain text body
        html: args.html, // html body
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log("Message sent: %s", info.messageId);
    } catch (error) {
        console.error("Error occurred while sending email", error);
        createPrettyError("Error occurred while sending email");
    }
}
