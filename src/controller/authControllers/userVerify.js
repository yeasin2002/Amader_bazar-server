const jwt = require(`jsonwebtoken`);
const { userModel } = require(`$model`);
const {
    createPrettyError,
    ResponseHandler,
    exportEnv: { jwtSecretKey },
} = require(`$utils`);

const userVerify = async (req, res) => {
    try {
        const token = req.body.token;
        const decoded = jwt.verify(token, jwtSecretKey);

        const checkIsExist = await userModel.exists({ email: decoded.email });
        if (checkIsExist) createPrettyError(401, `User already exist`);

        await userModel.create(decoded);
        return await ResponseHandler.successResponse(res, {
            message: "User was Created successfully",
            data: token,
        });
    } catch (error) {
        ResponseHandler.errorResponse(res, error.message);
    }
};
module.exports = userVerify;
