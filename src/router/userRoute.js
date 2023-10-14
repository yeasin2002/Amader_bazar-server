const express = require("express");
const userRouter = express.Router();

//*  controller
const getAllUserInfo = require("../controller/User/getAllUserInfo");
const getSingleUser = require("../controller/User/getSingleUser");
const deleteSingleUser = require("../controller/User/deleteSingleUser");
const registerProcess = require("../controller/User/registerProcess");
const userVerify = require("../controller/User/userVerify");

// middleware
const upload = require("../middleware/UploadImages");

//* routes
userRouter.get("/", getAllUserInfo);
userRouter.post("/register-process", upload.single("avatar"), registerProcess);
userRouter.post("/user-verify", userVerify);

userRouter.get("/:id", getSingleUser);
userRouter.delete("/:id", deleteSingleUser);

module.exports = userRouter;
// {
//     "name": "Dev Yeasin ",
//     "email": "md.yeasin.islam20022@gmail.com",
//     "phone": "01632227965",
//     "password": "01632227965",
//     "address": "Dhaka, Bangladesh",
//     "isAdmin": true
// }
