const createHttpError = require("http-errors")
const { validationResult } = require("express-validator")

const validationRunner = async (req, res, next) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            const ErrorPaths = errors.array().map((err) => err.path)
            const errorMsg = errors.array().map((err) => err.msg)

            return res.status(400).json({
                status: "failed",
                message: `${ErrorPaths} are not validated `,
                error: errorMsg,
            })
        }
        next()
    } catch (error) {
        createHttpError(500, "Internal Server Error -  Validation Failed")
    }
}
module.exports = validationRunner
