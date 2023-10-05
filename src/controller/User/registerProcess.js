const createHttpError = require("http-errors");
const UserModel = require("../../model/UserModel");
const {
  successResponse,
  errorResponse,
} = require("../../utils/ResponseHandler");
const generateJWT = require("../../utils/GenerateJWT");
const { jwtSecretKey, ClientUrl } = require("../../utils/exportEnv");
const sendEmailToRegisterUser = require("../../helper/email");

const registerProcess = async (req, res) => {
  try {
    // eslint-disable-next-line no-unused-vars
    const { name, email, password, phone, address } = req.body;
    const isExist = await UserModel.exists({ email });
    if (isExist) throw createHttpError(409, "Email already exist");

    const token = await generateJWT({ email, name }, jwtSecretKey, {
      expiresIn: "30d",
    });
    try {
      // email data
      const emailData = {
        email: "",
        subject: "Account Activation Link",
        html: `
          <h1>Please use the following to  activate your account</h1>
          <a href=${ClientUrl}/user/activate/${token}>
          Click To log in
          </a>
        `,
      };
      sendEmailToRegisterUser(emailData);
    } catch (error) {
      console.log(error);
    }

    await successResponse(res, {
      message: "User Registered",
      data: token,
    });
  } catch (error) {
    errorResponse(res, { message: error.message, statusCode: error.status });
  }
};
module.exports = registerProcess;
