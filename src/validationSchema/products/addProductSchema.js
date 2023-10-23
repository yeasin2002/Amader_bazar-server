const { body, header } = require("express-validator");

const addProductSchema = [
    header("Authorization")
        .trim()
        .notEmpty()
        .withMessage("Authorization is required"),

    body("name").notEmpty().withMessage("Name is required"),
    body("category").notEmpty().withMessage("Price is required"),
    body("description"),
    body("brand").notEmpty().withMessage("brand name is required"),
    body("discount")
        .isNumeric()
        .withMessage("discount must be a number")
        .notEmpty()
        .withMessage("discount is required")
        .isLength({ min: 1, max: 100 })
        .withMessage("discount must be between 1 to 100"),

    body("deliveryType")
        .notEmpty()
        .withMessage("deliveryType is required")
        .isIn(["cash", "card"])
        .withMessage("deliveryType must be cash or card"),
    body("warranty").notEmpty().withMessage("warranty is required"),
    body("ReturnDays").notEmpty().withMessage("ReturnDays is required"),
    body("sizes")
        .notEmpty()
        .withMessage("sizes is required")
        .isIn(["S", "M", "L", "XL", "XXL"])
        .withMessage("sizes must be S, M, L, XL or XXL"),
    body("colors").notEmpty().withMessage("colors is required"),
    body("ProductFor").notEmpty().withMessage("colors is required"),
];

module.exports = addProductSchema;
