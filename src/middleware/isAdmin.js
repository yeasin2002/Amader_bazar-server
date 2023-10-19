const { createPrettyError } = require("../utils/index");

const isAdmin = async (req, res, next) => {
    try {
        if (req.tokenInfo.role !== "admin") {
            createPrettyError({
                statusCode: 403,
                message: "You are not authorized to access this route",
            });
        }
        next();
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ status: "failed", message: "" });
    }
};
module.exports = isAdmin;
