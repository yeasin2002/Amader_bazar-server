const { Product } = require("$model");
const { errorResponse, successResponse } = require("$utils/ResponseHandler");

const getSingleProduct = async (req, res) => {
    try {
        const data = await  Product.findById(req.params.id);
       await  successResponse(res, {
            message: "Successfully fetched a  product",
            data: data,
        });
    } catch (error) {
        console.log(error.message);
        errorResponse(res, {
            message: "Internal Server Error",
        });
    }
};
module.exports = getSingleProduct;
