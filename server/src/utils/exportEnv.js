/* eslint-disable no-undef */
const dotEnv = require("dotenv");
dotEnv.config();

module.exports = {
  mongoConnectionString: process.env.MONGO_CONNECTION_STRING || "",
  defaultImagePath: process.env.DEFAULT_USER_IMAGES || "",
  jwtSecretKey: process.env.JWT_SECRET_KEY || "",
  smtpUsername: process.env.USERNAME || "",
  smtpPassword: process.env.SMTP_PASSWORD || "",
  ClientUrl: process.env.CLIENT_URL || "",
};
