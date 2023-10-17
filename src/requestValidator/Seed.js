const { body } = require("express-validator");

const seedUsersValidation = [
  body("name")
    .trim()
    .isLength({ min: 3, max: 20 })
    .withMessage("Name must be at least 3 characters"),

  body("email").isEmail().withMessage("Email is not valid"),
];

module.exports = seedUsersValidation;
