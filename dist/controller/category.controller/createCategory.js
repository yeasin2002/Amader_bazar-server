"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCategory = void 0;
const model_1 = require(".././../model");
const utils_1 = require("../../utils");
const createCategory = async (req, res) => {
    try {
        const { name, subtitle } = req.body;
        const icon = req?.file?.filename || "";
        const newCategory = await model_1.Category.create({ name, icon, subtitle });
        if (!newCategory)
            (0, utils_1.createPrettyError)(404, "Category Not Found");
        (0, utils_1.successResponse)({
            res,
            message: "Category created successfully",
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
exports.createCategory = createCategory;
//# sourceMappingURL=createCategory.js.map