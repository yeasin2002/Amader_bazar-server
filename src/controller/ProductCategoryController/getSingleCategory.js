const { ProductCategory } = require("$model");

const { successResponse, errorResponse } = require("$utils/ResponseHandler");

const getSingleCategory = async (req, res) => {
    try {
        const data = await ProductCategory.findById(req.params.id);

        successResponse(res, {
            data,
            message: "Successfully fetched category",
        });
    } catch (error) {
        console.log(error.message);
        errorResponse(res, error.message);
    }
};
module.exports = getSingleCategory;
