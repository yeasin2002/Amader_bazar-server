const express = require("express");
const seedUsers = require("../controller/User/seedUsers");
const seedRouter = express.Router();
const seedUsersValidation = require("../requestValidator/Seed");
const validationRunner = require("../requestValidator/index");

seedRouter.post("/", seedUsers);
seedRouter.post(
  "/validate",
  seedUsersValidation,
  validationRunner,
  (req, res) => {
    res.json({ status: "success", message: "seeded" });
  }
);

module.exports = seedRouter;
