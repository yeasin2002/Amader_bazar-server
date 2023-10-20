const bcrypt = require(`bcrypt`);
const { createPrettyError } = require(`../../utils`);
const { UserModel } = require(`../../model`);
const { successResponse, errorResponse } = require(
    `../../utils/ResponseHandler`,
);

const updatePassword = async (req, res) => {
    try {
        /*
        search throw req.body.email  and update password
        set new password
        https://youtu.be/oMhZxSfyWfI?si=4VppBLs7c4A8ZEwd
        */
        const user = await UserModel.findById(req.tokenInfo.id);

        const checkPassword = await bcrypt.compare(
            req.body.password,
            user.password,
        );
        console.log(checkPassword);
        if (!checkPassword) {
            return createPrettyError(404, `Password not match`);
        }
        const updatePassword = await UserModel.findOneAndUpdate(
            { _id: req.tokenInfo.id },
            { password: req.body.newPassword },
            { new: true },
        );
        console.log(updatePassword);

        await successResponse(res, {
            data: user,
            message: `Password updated successfully`,
        });
    } catch (error) {
        console.log(error.message);
        errorResponse(res, { message: error.message });
    }
};
module.exports = updatePassword;

//
