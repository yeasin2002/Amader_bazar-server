const successResponse = (res, { data, statusCode, message }) => {
    return res.status(statusCode || 200).json({
        success: true,
        message: message || "Success",
        data: data || null,
    });
};

const errorResponse = (res, { message, statusCode = 500 }) => {
    return res.status(statusCode).json({
        success: false,
        message: message || "Something went wrong",
    });
};

module.exports = { errorResponse, successResponse };
