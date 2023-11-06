const { body, header } = require("express-validator");

export const addProductSchema = [
    header("Authorization")
        .trim()
        .notEmpty()
        .withMessage("Authorization is required"),

    body("name")
        .notEmpty()
        .withMessage("Name is required")
        .isLength({ min: 3, max: 25 })
        .withMessage("Name should be less then 25 and more then 3 characters"),

    body("img").isEmpty().withMessage("image is required"),

    body("category")
        .notEmpty()
        .withMessage("Price is required")
        .isString()
        .withMessage("category should be string")
        .isLength({ min: 3, max: 25 })
        .withMessage(
            "category should be less then 25 and more then 3 characters"
        ),

    body("description").isString().withMessage("description should be string"),
    body("brand").isString().withMessage("brand name is required"),

    body("discount")
        .isNumeric()
        .withMessage("discount must be a number")
        .isLength({ min: 0, max: 100 })
        .withMessage("discount must be between 1 to 100"),

    body("deliveryType")
        .notEmpty()
        .withMessage("deliveryType is required")
        .isIn(["cash", "card"])
        .withMessage("deliveryType must be cash or card"),

    body("warranty")
        .notEmpty()
        .withMessage("warranty is required")
        .isBoolean()
        .withMessage("warranty should be Boolean"),

    body("ReturnDays").isNumeric().withMessage("ReturnDays should be number"),

    body("sizes")
        .isIn(["S", "M", "L", "XL", "XXL"])
        .withMessage("Available sizes are  S, M, L, XL or XXL"),

    body("colors").isString().withMessage("colors is required"),

    body("ProductFor")
        .notEmpty()
        .withMessage("ProductFor is required")
        .isIn(["man", "women", "child", "anyone"]),
];
