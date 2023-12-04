"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.regSchema = void 0;
const express_validator_1 = require("express-validator");
exports.regSchema = [
    (0, express_validator_1.body)("token").isString(),
    (0, express_validator_1.body)("email")
        .trim()
        .isEmail()
        .withMessage("Please enter a valid email")
        .normalizeEmail(),
    (0, express_validator_1.body)("phone")
        .trim()
        .isEmpty()
        .withMessage("Phone number is required")
        .isMobilePhone("bn-BD")
        .withMessage("Please enter a valid phone number")
        .isLength({ min: 11, max: 11 })
        .withMessage("Phone number must be 11 characters long"),
    (0, express_validator_1.body)("password").trim().isEmpty().withMessage("Password is mandatory"),
    (0, express_validator_1.body)("name")
        .trim()
        .isString()
        .withMessage("Name have to be string")
        .isLength({
        min: 3,
        max: 25,
    })
        .withMessage("Name have to be less then 25 characters and more then 3 characters"),
];
//# sourceMappingURL=registrations.schema.js.map