const { UserModel } = require("../../model/index")

const showProductByTypeController = async (req, res) => {
    try {
        await UserModel.find({
            category: req.body.branName, // for example req.body.branName = apple
        })
        res.status(200).json({ status: "success", data: "" })
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ status: "failed", message: "" })
    }
}
module.exports = showProductByTypeController
