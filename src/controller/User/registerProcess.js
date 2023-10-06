const createHttpError = require("http-errors");
const UserModel = require("../../model/UserModel");
const {
  successResponse,
  errorResponse,
} = require("../../utils/ResponseHandler");
const generateJWT = require("../../utils/GenerateJWT");
const { jwtSecretKey, ClientUrl } = require("../../utils/exportEnv");
// const sendEmailToRegisterUser = require("../../helper/email");
const SendMail = require("../../helper/SendMailer");

const registerProcess = async (req, res) => {
  try {
    // eslint-disable-next-line no-unused-vars
    const { name, email, password, phone, address } = req.body;
    const isExist = await UserModel.exists({ email });
    if (isExist) throw createHttpError(409, "Email already exist");

    const token = await generateJWT({ email, name }, jwtSecretKey, {
      expiresIn: "30d",
    });

    // email data
    const emailData = {
      revivers: [email],
      Subject: "Account Activation Link",
      html: `
          <h1>Please use the following to  activate your account</h1>
          <a href=${ClientUrl}/user/activate/${token}>
          Click To log in
          </a>
        `,
    };

    // await sendEmailToRegisterUser(emailData);
    await SendMail(emailData);

    await successResponse(res, {
      message: "User Registered",
      data: token,
    });
  } catch (error) {
    console.log(error.message);
    errorResponse(res, { message: error.message, statusCode: error.status });
  }
};
module.exports = registerProcess;
