const { createPrettyError } = require("../../utils/");
const { UserModel } = require(`../../model`);
const { successResponse, errorResponse } = require(
    `../../utils/ResponseHandler`,
);

const deleteSingleUser = async (req, res) => {
    try {
        const deletedUser = await UserModel.findByIdAndDelete({
            _id: req.params.id,
            isAdmin: false,
        });

        if (!deletedUser) {
            createPrettyError(404, `User does not exist`);
        }
        /*
    ! Future Task:
    * Delete user Photo from public/photo/user folder
    */
        await successResponse(res, {
            message: `User Deleted`,
            data: deletedUser,
        });
    } catch (error) {
        errorResponse(res, { message: `Failed to delete user` });
    }
};
module.exports = deleteSingleUser;
