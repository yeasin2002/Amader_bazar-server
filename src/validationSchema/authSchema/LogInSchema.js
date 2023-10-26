const { body } = require(`express-validator`);

const logInSchema = [
    body(`email`).isEmail().withMessage(`Email is not valid`),
    body(`password`)
        .isLength({ min: 8 })
        .withMessage(`Password must be at least 8 characters`),
];

module.exports = logInSchema;
