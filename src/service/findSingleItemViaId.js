const mongoose = require("mongoose")
const createHttpError = require("http-errors")

const findSingleItemViaId = async (ModelName, id, options = {}) => {
    try {
        const allItems = await ModelName.findById({ _id: id }, options)

        if (!allItems) {
            throw createHttpError(
                404,
                `${ModelName.modelName}  does not exist  with  this id`
            )
        }

        return allItems
    } catch (error) {
        if (error instanceof mongoose.Error) {
            console.log("mongoose instance Error")
            throw createHttpError(400, "Invalid user id ")
        }
        throw error
    }
}

module.exports = findSingleItemViaId
