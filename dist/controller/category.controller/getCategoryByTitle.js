"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCategoryByTitle = void 0;
const utils_1 = require("../../utils");
const model_1 = require(".././../model");
const getCategoryByTitle = async (req, res) => {
    try {
        const newCategory = await model_1.Category.find({
            name: req.params.title,
        });
        if (!newCategory)
            (0, utils_1.createPrettyError)(404, "Category Not Found");
        (0, utils_1.successResponse)({
            res,
            message: "successfully Got All Category",
            data: newCategory,
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
exports.getCategoryByTitle = getCategoryByTitle;
//# sourceMappingURL=getCategoryByTitle.js.map