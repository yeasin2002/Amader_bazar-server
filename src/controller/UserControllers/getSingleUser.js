const { UserModel } = require("../../model");
const { findSingleItemViaId } = require("../../service");
const {
  ResponseHandler: { successResponse, errorResponse },
} = require("../../utils");

const getSingleUser = async (req, res) => {
  try {
    const foundedUserData = await findSingleItemViaId(
      UserModel,
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
