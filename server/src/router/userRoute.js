const express = require("express");
const userRouter = express.Router();

//*  controller
const getAllUserInfo = require("../controller/User/getAllUserInfo");
const getSingleUser = require("../controller/User/getSingleUser");
const deleteSingleUser = require("../controller/User/deleteSingleUser");
const registerProcess = require("../controller/User/registerProcess");

//* routes
userRouter.get("/", getAllUserInfo);
userRouter.post("/register-process", registerProcess);

userRouter.get("/:id", getSingleUser);
userRouter.delete("/:id", deleteSingleUser);

module.exports = userRouter;
