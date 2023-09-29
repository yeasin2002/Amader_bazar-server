const findSingleUserByIdService = require("../../service/findSingleUserByIdService");
const {
  successResponse,
  errorResponse,
} = require("../../utils/ResponseHandler");

const getSingleUser = async (req, res) => {
  try {
    const foundedUserData = await findSingleUserByIdService(req.params.id);

    await successResponse(res, {
      message: "user found",
      data: foundedUserData,
    });
  } catch (error) {
    errorResponse(res, { message: "unable to find user " });
  }
};
module.exports = getSingleUser;
