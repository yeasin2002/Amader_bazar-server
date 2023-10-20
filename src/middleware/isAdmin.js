const { UserModel } = require("../model/index");
const { createPrettyError } = require("../utils");
const { errorResponse } = require("../utils/ResponseHandler");

const isAdmin = async (req, res, next) => {
    try {
        const Person = await UserModel.findById(req.tokenInfo.id);
        if (!Person.isAdmin)
            createPrettyError(
                403,
                "You are not authorized to access this route",
            );
        next();
    } catch (error) {
        errorResponse(res);
    }
};
module.exports = isAdmin;
