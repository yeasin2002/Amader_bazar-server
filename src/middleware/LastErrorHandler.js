//
// eslint-disable-next-line no-unused-vars
const lastErrorHandler = (err, req, res, next) => {
    res.status(500).json({
        status: "failed",
        message: "Something went wrong",
        error: err.message,
    })
}

module.exports = lastErrorHandler
