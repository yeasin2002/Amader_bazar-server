"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMailWithNodemailer = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const createPrettyError_1 = require("./createPrettyError");
const exportEnv_1 = require("./exportEnv");
async function sendMailWithNodemailer(args) {
    const transporter = nodemailer_1.default.createTransport({
        service: "gmail",
        auth: {
            user: exportEnv_1.smtpUsername,
            pass: exportEnv_1.smtpPassword,
        },
    });
    const mailOptions = {
        from: "amaderbazar.netlity.com",
        to: args.receivers,
        subject: args.subject,
        text: args.text,
        html: args.html, // html body
    };
    try {
        const info = await transporter.sendMail(mailOptions);
        console.log("Email  sent via nodemailer to : %s", info.messageId);
    }
    catch (error) {
        console.error("Error occurred while sending email", error);
        (0, createPrettyError_1.createPrettyError)(500, "Error occurred while sending email");
    }
}
exports.sendMailWithNodemailer = sendMailWithNodemailer;
//# sourceMappingURL=sendMailWithNodemailer.js.map