const { UserModel } = require("../../model");

const { createPrettyError } = require("../../utils/index");
const {
    successResponse,
    errorResponse,
} = require("../../utils/ResponseHandler");

const banUserControl = async (req, res) => {
    try {
        // req.params.id = user that will be banned
        //  req.userInfo.id = admin ho can ban user

        const banUser = await UserModel.findByIdAndUpdate(
            req.params.id,
            {
                isBanned: req.body.isBanned ? false : true,
            },
            {
                new: true,
                runValidators: true,
            },
        ).select("-password");

        if (banUser) {
            await successResponse(res, {
                message: "User Banned",
                data: banUser,
            });
        } else {
            createPrettyError(404, "User not found");
        }
    } catch (error) {
        errorResponse(res, {
            message: "Internal Server Error -  Failed to update",
        });
    }
};

module.exports = banUserControl;
