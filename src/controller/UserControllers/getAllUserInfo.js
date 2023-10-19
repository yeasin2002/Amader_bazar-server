const createHttpError = require("http-errors")
const { UserModel } = require("../../model")

const {
    ResponseHandler: { errorResponse, successResponse },
} = require("../../utils")

const getAllUserInfo = async (req, res) => {
    try {
        const search = req.query.search || ""
        const page = Number(req.query.page) || 1
        const limit = Number(req.query.limit) || 5
        const searchRegEx = new RegExp(".*" + search + ".*", "i")
        const filter = {
            isAdmin: { $ne: true },
            $or: [
                { name: searchRegEx },
                { email: searchRegEx },
                { phone: searchRegEx },
            ],
        }
        const option = { password: 0 }

        const allUser = await UserModel.find(filter, option)
            .limit(limit)
            .skip((page - 1) * limit)
        const count = await UserModel.find(filter).countDocuments()

        if (allUser.length === 0) throw createHttpError(404, "No user found")
        successResponse(res, {
            statusCode: 200,
            message: `${allUser.length} user found`,
            data: {
                users: allUser,
                pagination: {
                    totalPage: Math.ceil(count / limit),
                    currentPage: page,
                    previousPage: page - 1 ? page - 1 : null,
                    nextPage:
                        page + 1 <= Math.ceil(count / limit) ? page + 1 : null,
                    limit: limit,
                },
            },
        })
    } catch (error) {
        console.log(error.message)
        errorResponse(res, { message: error.message, statusCode: error.status })
    }
}
module.exports = getAllUserInfo
