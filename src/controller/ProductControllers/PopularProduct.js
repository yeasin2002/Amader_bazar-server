const { Product } = require("$model");
const { successResponse, errorResponse } = require("$utils/ResponseHandler");

const PopularProduct = async (req, res) => {
    try {
        const Popular = await Product.find().sort({ totalSell: -1 }).limit(20);
        successResponse(res, {
            data: Popular,
            message: "Got Top  Product  Successfully",
        });
    } catch (error) {
        console.log(error.message);
        errorResponse(res, { message: error.message });
    }
};
module.exports = PopularProduct;
