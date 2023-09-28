const express = require("express");
const seedUsers = require("../controller/seedUsers");
const seedRouter = express.Router();

seedRouter.get("/", seedUsers);

module.exports = seedRouter;
