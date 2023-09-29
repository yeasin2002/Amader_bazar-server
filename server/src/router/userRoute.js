const express = require("express");
const userRouter = express.Router();

//*  controller
const getAllUserInfo = require("../controller/User/getAllUserInfo");
const getSingleUser = require("../controller/User/getSingleUser");

userRouter.get("/", getAllUserInfo);
userRouter.get("/:id", getSingleUser);

module.exports = userRouter;
