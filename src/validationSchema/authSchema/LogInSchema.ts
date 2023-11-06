const { body } = require(`express-validator`);

export const logInSchema = [
    body(`email`).isEmail().withMessage(`Email is not valid`),
    body(`password`)
        .isLength({ min: 8 })
        .withMessage(`Password must be at least 8 characters`),
];
