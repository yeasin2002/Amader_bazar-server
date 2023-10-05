"use strict";
const nodemailer = require("nodemailer");
const kleur = require("kleur");
const { smtpUsername, smtpPassword } = require("../utils/exportEnv");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: smtpUsername,
    pass: smtpPassword,
  },
});

const sendEmailToRegisterUser = async (options) => {
  const data = await transporter.sendMail({
    from: smtpUsername,
    to: options.email,
    subject: options.subject,
    html: options.html,
  });
  console.log(
    kleur.blue().bgWhite(`Email sent: ${data.messageId} ${data.response}}`)
  );
};

module.exports = sendEmailToRegisterUser;
