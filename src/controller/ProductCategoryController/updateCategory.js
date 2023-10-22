const { ProductCategory } = require("../../model");
const { kleur } = require("../../npmModules/index");

const {
    successResponse,
    errorResponse,
} = require("../../utils/ResponseHandler");

const updateCategory = async (req, res) => {
    try {
        console.log(kleur.bgYellow().white().bold(req.body.name));
        const { name } = req.body;
        const prettierSlug = name.split(" ").join("-").toLowerCase();

        const updatedCategory = await ProductCategory.findByIdAndUpdate(
            req.params.id,
            { name: name, slug: prettierSlug },
            { new: true },
        );

        await successResponse(res, {
            message: "Successfully updated category",
            data: updatedCategory,
        });
    } catch (error) {
        console.log(error.message);
        errorResponse(res, { message: error.message });
    }
};
module.exports = updateCategory;
