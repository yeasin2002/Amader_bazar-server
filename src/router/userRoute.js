const express = require("express");
const userRouter = express.Router();

const {
  getAllUserInfo,
  getSingleUser,
  deleteSingleUser,
} = require("../controller/UserControllers");

//* routes
userRouter.get("/", getAllUserInfo);
userRouter.get("/:id", getSingleUser);
userRouter.delete("/:id", deleteSingleUser);

module.exports = userRouter;
