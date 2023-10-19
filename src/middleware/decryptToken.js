const jwt = require("jsonwebtoken");
const { jwtSecretKey } = require("../utils/exportEnv");
const { createPrettyError } = require("../utils");
const { errorResponse } = require("../utils/ResponseHandler");

const decryptToken = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1] || "";
        if (!token) {
            createPrettyError({
                statusCode: 403,
                message: "Token Required`",
            });
        }
        const tokenInfo = jwt.verify(token, jwtSecretKey);
        req.tokenInfo = tokenInfo;
        next();
    } catch (error) {
        errorResponse(res, {
            statusCode: error.statusCode,
            message: error.message,
        });
    }
};

module.exports = decryptToken;
