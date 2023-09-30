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
  const nodeMailerOption = {
    from: smtpUsername,
    to: options.email,
    subject: options.subject,
    html: options.html,
  };
  const data = await transporter.sendMail(nodeMailerOption);
  console.log(
    kleur.blue().bgWhite(`Email sent: ${data.messageId} ${data.response}}`)
  );
};

module.exports = sendEmailToRegisterUser;
