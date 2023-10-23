const { ProductCategory } = require("$model");
const { successResponse, errorResponse } = require("$utils/ResponseHandler");
const { createPrettySlug } = require("$utils");

const createCategory = async (req, res) => {
    try {
        const { name, subtitle } = req.body;
        const prettierSlug = createPrettySlug(name);
        const data = await ProductCategory.create({
            name,
            subtitle,
            slug: prettierSlug,
            icon: req.file.filename,
        });

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
