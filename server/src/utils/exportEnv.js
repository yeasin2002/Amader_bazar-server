const dotEnv = require("dotenv");
dotEnv.config();

module.exports = {
  mongoUrl: process.env.MONGO_URL,
};
