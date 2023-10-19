const express = require("express")
const authRoute = express.Router()
const { logInSchema } = require("../validationSchema")
const { validationRunner } = require("../middleware")

const {
    userVerify,
    login,
    registerProcess,
} = require("../controller/authControllers")

// middleware
const { UploadImages } = require("../middleware")

authRoute.post(
    "/register-process",
    UploadImages.single("avatar"),
    registerProcess
)
authRoute.post("/user-verify", userVerify)
authRoute.post("/login", logInSchema, validationRunner, login)

module.exports = authRoute
