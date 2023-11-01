const { Product } = require("../../model");

const {
    errorResponse,
    successResponse,
} = require("../../utils/ResponseHandler");

const updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        await successResponse(res, {
            message: "Successfully updated  a  product",
            data: updatedProduct,
        });
    } catch (error) {
        console.log(error.message);
        errorResponse(res);
    }
};
module.exports = updateProduct;
