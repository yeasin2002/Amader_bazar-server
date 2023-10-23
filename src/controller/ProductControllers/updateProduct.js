const { Product } = require("../../model");

const {
    errorResponse,
    successResponse,
} = require("../../utils/ResponseHandler");

const updateProduct = async (req, res) => {
    try {
        const AllProduct = await Product.find();
        //! need to add pagination
        await successResponse(res, {
            message: "Successfully get all product",
            data: AllProduct,
        });
    } catch (error) {
        console.log(error.message);

        errorResponse(res, {
            message: "Internal Server Error",
        });
    }
};
module.exports = updateProduct;
