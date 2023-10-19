const express = require("express")
const authRoute = express.Router()

const { userVerify, registerProcess } = require("../controller/UserControllers")

// middleware
const { UploadImages } = require("../middleware")

authRoute.post(
    "/register-process",
    UploadImages.single("avatar"),
    registerProcess
)
authRoute.post("/user-verify", userVerify)

module.exports = authRoute
