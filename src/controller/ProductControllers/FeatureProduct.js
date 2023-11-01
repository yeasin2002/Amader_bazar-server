const { Product } = require("$model");
const { successResponse, errorResponse } = require("$utils/ResponseHandler");

const featureProduct = async (req, res) => {
    try {
        const feature = await Product.find({ feature: true });

        successResponse(res, {
            data: feature,
            message: "Got Feature Product  Successfully",
        });
    } catch (error) {
        console.log(error.message);
        errorResponse(res, { message: error.message });
    }
};
module.exports = featureProduct;
