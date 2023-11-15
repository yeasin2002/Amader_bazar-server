import { body } from "express-validator";

export const regSchema = [
    body("token").isString(),
    body("email")
        .trim()
        .isEmail()
        .withMessage("Please enter a valid email")
        .normalizeEmail(),
    body("phone")
        .trim()
        .isEmpty()
        .withMessage("Phone number is required")
        .isMobilePhone("bn-BD")
        .withMessage("Please enter a valid phone number")
        .isLength({ min: 11, max: 11 })
        .withMessage("Phone number must be 11 characters long"),

    body("password").trim().isEmpty().withMessage("Password is mandatory"),
    body("name")
        .trim()
        .isString()
        .withMessage("Name have to be string")
        .isLength({
            min: 3,
            max: 25,
        })
        .withMessage(
            "Name have to be less then 25 characters and more then 3 characters"
        ),
];
