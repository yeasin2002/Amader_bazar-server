"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProduct = void 0;
const model_1 = require("../../model");
const utils_1 = require("../../utils");
const createProduct = async (req, res) => {
    try {
        // const { name, category, discount, price, desc, size, color } = req.body;
        const checkCategory = await model_1.Category.findOne({
            name: req.body.category,
        });
        if (!checkCategory) {
            return (0, utils_1.errorResponse)({
                res,
                message: `could't  find any  category called "${req.body.category.toUpperCase()} " please create one `,
                statusCode: 404,
            });
        }
        const filePath = req?.file?.filename || ``;
        const data = await model_1.Product.create({
            ...req.body,
            img: filePath,
        });
        return (0, utils_1.successResponse)({
            res,
            data,
            message: "successfully created product",
        });
    }
    catch (error) {
        (0, utils_1.errorResponse)({ res, message: error?.message });
    }
};
exports.createProduct = createProduct;
//# sourceMappingURL=createProduct.controller.js.map