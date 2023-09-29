const successResponse = (res, { data, statusCode, message, isSuccess }) => {
  return res.status(statusCode || 200).json({
    success: isSuccess || true,
    message: message || "Success",
    data: data || null,
  });
};

const errorResponse = (res, { isSuccess, message, statusCode = 500 }) => {
  return res.status(statusCode).json({
    success: isSuccess || false,
    message: message || "Something went wrong",
  });
};

module.exports = { errorResponse, successResponse };
