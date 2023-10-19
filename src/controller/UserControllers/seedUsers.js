const { UserModel } = require("../../model")
const { DemyUsers } = require("../../data")

const seedUsers = async (req, res) => {
    try {
        await UserModel.deleteMany({})

        //   creating new users
        const user = await UserModel.insertMany(DemyUsers)
        await res.status(201).json({
            status: "success",
            message: "Users created successfully",
            data: user,
        })
    } catch (error) {
        res.status(500).json({
            status: "failed",
            message: error.message,
        })
    }
}

module.exports = seedUsers
