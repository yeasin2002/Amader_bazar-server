/* eslint-disable no-undef */

const dotEnv = require("dotenv");
dotEnv.config();

module.exports = {
  mongoConnectionString: process.env.MONGO_CONNECTION_STRING,
  defaultImagePath: process.env.DEFAULT_USER_IMAGES,
};
