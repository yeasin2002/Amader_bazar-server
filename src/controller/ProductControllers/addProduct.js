/* eslint-disable node/no-unsupported-features/es-syntax */
const { Product } = require("$model");
const {
    errorResponse,
    successResponse,
} = require("../../utils/ResponseHandler");

const addProduct = async (req, res) => {
    try {
        console.log("Files :");
        console.log(req.file.filename);
        const AllProduct = await Product.create({
            ...req.body,
            img: req.file.filename,
        });
        return await successResponse(res, {
            message: "Successfully Added  product item",
            data: AllProduct,
        });
    } catch (error) {
        console.log(error.message);
        errorResponse(res, {
            message: "Internal Server Error",
        });
    }
};
module.exports = addProduct;
