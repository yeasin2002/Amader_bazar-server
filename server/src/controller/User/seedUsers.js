const userModel = require("../../model/UserModel");
const dumyUserData = require("../../data/DemyUsers");

const seedUsers = async (req, res) => {
  try {
    await userModel.deleteMany({});

    //   creating new users
    const user = await userModel.insertMany(dumyUserData);
    await res.status(201).json({
      status: "success",
      message: "Users created successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: error.message,
    });
  }
};

module.exports = seedUsers;
