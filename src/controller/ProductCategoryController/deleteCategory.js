const { ProductCategory } = require("../../model");

const {
    successResponse,
    errorResponse,
} = require("../../utils/ResponseHandler");

const deleteCategory = async (req, res) => {
    try {
        // console.log(kleur.bgYellow().white().bold(req.body.name));
        await ProductCategory.findByIdAndDelete(req.params.id);

        await successResponse(res, {
            message: "Successfully deleted category",
        });
    } catch (error) {
        console.log(error.message);
        errorResponse(res, { message: error.message });
    }
};
module.exports = deleteCategory;
