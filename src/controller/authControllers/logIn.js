const { UserModel } = require(`../../model`);
const { bcrypt } = require(`../../npmModules`);
const { GenerateJWT, createPrettyError } = require(`../../utils`);

const { successResponse, errorResponse } = require(
    `../../utils/ResponseHandler`,
);

const logIn = async (req, res) => {
    try {
        const checkUser = await UserModel.find({
            $or: [{ email: req.body.email }, { number: req.body.number }],
        });
        if (!checkUser[0])
            createPrettyError(404, `Email not found, Please Register First`);

        const validatePassword = await bcrypt.compare(
            req.body.password,
            checkUser[0].password,
        );
        if (!validatePassword) {
            errorResponse(res, {
                message: `password does't not matched`,
            });
        } else {
            const token = GenerateJWT({
                data: {
                    id: checkUser[0]._id,
                    email: checkUser[0].email,
                    name: checkUser[0].name,
                    phone: checkUser[0].phone,
                },
            });
            await successResponse(res, {
                message: `Login Success`,
                data: token,
            });
        }
    } catch (error) {
        errorResponse(res, {
            message: error.message,
        });
    }
};
module.exports = logIn;
