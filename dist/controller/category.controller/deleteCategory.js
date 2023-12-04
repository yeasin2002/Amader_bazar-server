"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategory = void 0;
const utils_1 = require("../../utils");
const model_1 = require(".././../model");
const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedCategory = await model_1.Category.findByIdAndDelete(id);
        if (!deletedCategory)
            (0, utils_1.createPrettyError)(404, "Category Not Found");
        (0, utils_1.successResponse)({
            res,
            message: "successfully Got All Category",
            data: deletedCategory,
        });
    }
    catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
            (0, utils_1.errorResponse)({ res, message: error.message });
        }
        (0, utils_1.errorResponse)({ res });
    }
};
exports.deleteCategory = deleteCategory;
//# sourceMappingURL=deleteCategory.js.map