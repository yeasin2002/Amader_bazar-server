"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registration = void 0;
const lib_1 = require("../../lib");
const model_1 = require("../../model");
const utils_1 = require("../../utils");
const registration = async (req, res) => {
    try {
        const { email, phone, password, name, address } = req.body;
        const checkIfUserExist = await model_1.User.exists({ email, phone });
        if (checkIfUserExist) {
            return (0, utils_1.errorResponse)({
                res,
                statusCode: 400,
                message: `User already exist with this email or phone number`,
            });
        }
        const OTP = (0, utils_1.generateOTP)(6);
        await (0, utils_1.sendMailWithNodemailer)({
            receivers: email,
            subject: "Confirm Registration",
            html: `
            <h1>Registration Confirmation</h1>
            <p>Thank you for registering!</p>
            <p>Here Is your OTP</p>
            <h1 style="background-color: rgb(225, 224, 224); padding: 10px; color: rgb(29, 29, 29);" >${OTP}</h1>`,
        });
        //! save image to uploads folder
        const ConfirmedUser = await model_1.PendingUser.create({
            name,
            email,
            phone,
            password,
            avatar: req?.file?.filename || "",
            address,
            token: OTP,
        });
        const token = (0, lib_1.userJWT)({
            id: ConfirmedUser._id,
            name: ConfirmedUser.name,
            email: ConfirmedUser.email,
            number: ConfirmedUser.phone,
        });
        await (0, utils_1.successResponse)({
            res,
            message: `Registration successful, please check your email for verification link`,
            data: token,
        });
    }
    catch (error) {
        console.log(error.message);
        (0, utils_1.errorResponse)({ res, message: error.message });
    }
};
exports.registration = registration;
//# sourceMappingURL=registration.controller.js.map