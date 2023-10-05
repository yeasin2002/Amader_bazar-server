const userModel = require("../../model/UserModel");
const findSingleItemViaId = require("../../service/findSingleItemViaId");
const {
  successResponse,
  errorResponse,
} = require("../../utils/ResponseHandler");

const getSingleUser = async (req, res) => {
  try {
    const foundedUserData = await findSingleItemViaId(
      userModel,
      req.params.id,
      { password: 0 }
    );
    await successResponse(res, {
      message: "user found",
      data: foundedUserData,
    });
  } catch (error) {
    errorResponse(res, { message: error.message, statusCode: 500 });
  }
};
module.exports = getSingleUser;
