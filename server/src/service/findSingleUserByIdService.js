const mongoose = require("mongoose");
const createHttpError = require("http-errors");
const userModel = require("../model/UserModel");

const findSingleUserByIdService = async (id, options = { password: 0 }) => {
  try {
    const allUser = await userModel.findById({ _id: id }, options);
    if (!allUser) {
      throw createHttpError(404, "user does not exist  with  this id ");
    }

    return allUser;
  } catch (error) {
    if (error instanceof mongoose.Error) {
      createHttpError(400, "Invalid user id ");
    }
    throw error;
  }
};

module.exports = findSingleUserByIdService;
