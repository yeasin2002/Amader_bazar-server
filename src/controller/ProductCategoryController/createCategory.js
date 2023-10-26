const { ProductCategory } = require("$model");
const { successResponse, errorResponse } = require("$utils/ResponseHandler");
const { createPrettySlug, createPrettyError } = require("$utils");

const createCategory = async (req, res) => {
    try {
        const { name, subtitle } = req.body;
        const checkCategoryExist = await ProductCategory.exists({ name });
        if (checkCategoryExist)
            return createPrettyError(res, "Category name already exist");

        const prettierSlug = await createPrettySlug(name);
        const data = await ProductCategory.create({
            name,
            subtitle,
            slug: prettierSlug,
            icon: req.file.filename,
        });

         await data.save();
        await successResponse(res, {
            data,
            message: "Successfully created a new category",
        });
    } catch (error) {
        console.log(error.message);
        errorResponse(res, { message: error.message });
    }
};
module.exports = createCategory;
