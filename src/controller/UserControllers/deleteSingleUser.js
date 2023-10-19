const { createHttpError } = require("../../npmModules")
const { UserModel } = require("../../model")
const {
    successResponse,
    errorResponse,
} = require("../../utils/ResponseHandler")

const deleteSingleUser = async (req, res) => {
    try {
        const deletedUser = await UserModel.findByIdAndDelete({
            _id: req.params.id,
            isAdmin: false,
        })

        if (!deletedUser) {
            createHttpError(404, "User does not exist")
        }
        /*
    ! Future Task:
    * Delete user Photo from public/photo/user folder
    */
        await successResponse(res, {
            message: "User Deleted",
            data: deletedUser,
        })
    } catch (error) {
        console.log(error.message)
        errorResponse(res, { message: "Failed to delete user" })
    }
}
module.exports = deleteSingleUser
