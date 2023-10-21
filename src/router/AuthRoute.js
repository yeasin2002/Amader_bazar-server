const express = require(`express`);
const authRoute = express.Router();
const { logInSchema } = require(`../validationSchema`);
const { validationRunner, decryptToken } = require(`../middleware`);

const {
    userVerify,
    login,
    registerProcess,
    updatePassword,
    ResetPassword,
    ForgotPassword,
} = require(`../controller/authControllers`);

// middleware
const { UploadImages } = require(`../middleware`);

authRoute.post(
    `/register-process`,
    UploadImages.single(`avatar`),
    registerProcess,
);
authRoute.post(`/user-verify`, userVerify);
authRoute.post(`/login`, logInSchema, validationRunner, login);

authRoute.put(`/update-password`, decryptToken, updatePassword);
authRoute.put(`/forgot-password`, decryptToken, ForgotPassword);
authRoute.put(`/reset-password`, decryptToken, ResetPassword);

module.exports = authRoute;

/*


*/
