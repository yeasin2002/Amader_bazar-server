const {
    successResponse,
    errorResponse,
} = require("../../utils/ResponseHandler");

const ForgotPassword = async (req, res) => {
    try {
        successResponse(
            res,
            "This feature is not yet implemented. skipped for now",
        );
    } catch (error) {
        console.log(error.message);
        errorResponse(res, error.message);
    }
};
module.exports = ForgotPassword;
