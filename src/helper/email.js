"use strict";
const { smtpUsername, smtpPassword } = require("../utils/exportEnv");
const nodemailer = require("nodemailer");
const kleur = require("kleur");
const createHttpError = require("http-errors");

const transporter = nodemailer.createTransport({
  // host: "smtp.gmail.com",
  host: "gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: smtpUsername,
    pass: smtpPassword,
  },
});

const sendEmailToRegisterUser = async (options) => {
  try {
    const data = await transporter.sendMail({
      from: smtpUsername,
      to: options.email,
      subject: options.subject,
      html: options.html,
    });
    console.log(
      kleur
        .blue()
        .bgWhite()
        .bold(`Email sent: ${data.messageId} ${data.response}}`)
    );
  } catch (error) {
    console.log(kleur.red(error.message));
    createHttpError(500, error.message);
  }
};

module.exports = sendEmailToRegisterUser;
