const nodemailer = require("nodemailer");
const { smtpUsername, smtpPassword } = require("../utils/exportEnv");
const kleur = require("kleur");

const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: true,
  auth: {
    user: smtpUsername,
    pass: smtpPassword,
  },
});

const SendMail = async ({
  revivers,
  bcc = [],
  Subject,
  text = "",
  html = "",
  attachments = [],
}) => {
  const info = await transporter.sendMail({
    from: "Amader-Bazar", // ⁡⁢⁢⁢sender address⁡ - ⁡⁢⁣⁢Must⁡
    to: [...revivers], // ⁡⁢⁢⁢list of receivers⁡ - ⁡⁢⁣⁢Must⁡
    bcc: [...bcc], // list of receivers
    subject: Subject, // Subject line
    text: text, // plain text body
    html: html, // ⁡⁢⁢⁢html body⁡ - ⁡⁢⁣⁢Must⁡
    attachments: attachments,
  });
  console.log(kleur.bgGreen().black(`Message sent:${info.messageId}`));
};

module.exports = SendMail;
