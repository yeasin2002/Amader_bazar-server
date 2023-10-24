const { errorResponse } = require("$utils/ResponseHandler");
const { ProductCategory } = require("$model");
const path = require("path");

const getCategoryImage = async (req, res) => {
    try {
        const img = ProductCategory.findById(req.params.id);
        const local = path.join(process.cwd(), "uploads/category", img.icon);
        return res.sendFile(local);
    } catch (error) {
        console.log(error.message);
        errorResponse(res, error.message);
    }
};
module.exports = getCategoryImage;
