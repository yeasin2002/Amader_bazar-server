const express = require("express");
const seedRouter = express.Router();

const { seedUsers } = require("../controller/UserControllers");
const { seedUsersValidationSchema } = require("../validationSchema");
const { validationRunner } = require("../middleware");

seedRouter.post("/", seedUsers);
seedRouter.post(
  "/validate",
  seedUsersValidationSchema,
  validationRunner,
  (req, res) => {
    res.json({ status: "success", message: "seeded" });
  }
);

module.exports = seedRouter;
