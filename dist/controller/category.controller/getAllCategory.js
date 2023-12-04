"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllCategory = void 0;
const model_1 = require(".././../model");
const utils_1 = require("../../utils");
const getAllCategory = async (req, res) => {
    try {
        const { limit } = req.body;
        const newCategory = await model_1.Category.find({})
            .limit(limit)
            .sort({ createdAt: -1 });
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
            (0, utils_1.errorResponse)({ res });
        }
        (0, utils_1.errorResponse)({ res });
    }
};
exports.getAllCategory = getAllCategory;
//# sourceMappingURL=getAllCategory.js.map