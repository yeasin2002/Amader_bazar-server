const { Product } = require("../../model");

const {
    errorResponse,
    successResponse,
} = require("../../utils/ResponseHandler");

const deleteProduct = async (req, res) => {
    try {
        const AllProduct = await Product.findByIdAndDelete(req.params.id);
        await successResponse(res, {
            message: "Successfully Deleted a  product",
            data: AllProduct,
        });
    } catch (error) {
        console.log(error.message);
        errorResponse(res, {
            message: "Internal Server Error",
        });
    }
};
module.exports = deleteProduct;
