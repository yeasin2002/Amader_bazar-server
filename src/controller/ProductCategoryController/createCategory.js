const { ProductCategory } = require("../../model");
const {
    successResponse,
    errorResponse,
} = require("../../utils/ResponseHandler");

const createCategory = async (req, res) => {
    try {
        const { name, slug } = req.body;
        const prettierSlug = slug.split(" ").join("-").toLowerCase();

        const data = await ProductCategory.create({ name, slug: prettierSlug });
        await data.save();
        await successResponse(res, {
            data,
            message: "Successfully created category",
        });
    } catch (error) {
        console.log(error.message);
        errorResponse(res, { message: error.message });
    }
};
module.exports = createCategory;
