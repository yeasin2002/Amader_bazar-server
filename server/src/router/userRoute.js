const express = require("express");
const userRouter = express.Router();
const getAllUserInfo = require("../controller/User/getAllUserInfo");

userRouter.get("/", getAllUserInfo);

module.exports = userRouter;
