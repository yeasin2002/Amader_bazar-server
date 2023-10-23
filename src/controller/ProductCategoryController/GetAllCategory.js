const { ProductCategory } = require("$model");
const { successResponse } = require("$utils/ResponseHandler");

const getAllCategory = async (req, res) => {
    try {
        const data = await ProductCategory.find();
        successResponse(res, {
            message: "Deleted",
            data,
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            status: "failed",
            message: "Got all the category list",
        });
    }
};
module.exports = getAllCategory;
