const express = require("express");
const seedUsers = require("../controller/User/seedUsers");
const seedRouter = express.Router();

seedRouter.post("/", seedUsers);

module.exports = seedRouter;
