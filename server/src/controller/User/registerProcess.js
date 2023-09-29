const createHttpError = require("http-errors");
const UserModel = require("../../model/UserModel");
const {
  successResponse,
  errorResponse,
} = require("../../utils/ResponseHandler");

const registerProcess = async (req, res) => {
  try {
    //! Next Video:  https://youtu.be/uNl3_hubaeE?si=e-nj5yCwMa4ObijZ

    // eslint-disable-next-line no-unused-vars
    const { name, email, password, phone, address } = req.body;
    const isExist = await UserModel.exists({ email });
    if (isExist) createHttpError(400, "Email already exist");

    successResponse(res, { message: "User Registered" });
  } catch (error) {
    errorResponse(res, { message: "Failed to register user" });
  }
};
module.exports = registerProcess;
