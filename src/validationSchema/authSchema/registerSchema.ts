const { body } = require("express-validator");

export const registerSchema = [
    body("name")
        .isEmpty()
        .withMessage("Name is required")
        .isString()
        .withMessage("Name should be String")
        .isLength({ min: 3, max: 20 })
        .withMessage("Name should be more then 3 and  less then 20 character"),
    body("email")
        .isEmpty()
        .withMessage("email is required")
        .isString()
        .withMessage("email should be String")
        .isEmail(),
    body("password")
        .isEmpty()
        .withMessage("password is required")
        .isLength({ min: 3, max: 20 })
        .withMessage(
            "password should be more then 8 and  less then 30 character"
        ),
    body("phone")
        .isEmpty()
        .withMessage("phone is required")
        .isNumeric()
        .withMessage("phone should be number "),
    body("address")
        .isEmpty()
        .withMessage("address is required")
        .isString()
        .withMessage("address should be String"),
];
