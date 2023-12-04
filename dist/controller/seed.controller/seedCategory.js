"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAllCategories = exports.seedCategory = void 0;
const categories_1 = require("../../data/categories");
const model_1 = require("../../model");
const responseHandler_1 = require("../../utils/responseHandler");
const seedCategory = async (req, res) => {
    try {
        const newUsers = await model_1.Category.insertMany(categories_1.DemoCategories);
        (0, responseHandler_1.successResponse)({
            res,
            message: "Created Demo Category",
            data: newUsers,
        });
    }
    catch (error) {
        console.log(error.message);
        (0, responseHandler_1.errorResponse)({ res, message: error?.message });
    }
};
exports.seedCategory = seedCategory;
const DeleteAllCategories = async (req, res) => {
    try {
        await model_1.Category.deleteMany({});
        (0, responseHandler_1.successResponse)({ res, message: "Deleted All Categories" });
    }
    catch (error) {
        console.log(error.message);
        (0, responseHandler_1.errorResponse)({ res });
    }
};
exports.DeleteAllCategories = DeleteAllCategories;
//# sourceMappingURL=seedCategory.js.map