"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProduct = void 0;
const model_1 = require("../../model");
const utils_1 = require("../../utils");
const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await model_1.Product.findByIdAndUpdate(id, { $set: req.body }, { new: true });
        if (!data) {
            return (0, utils_1.createPrettyError)(404, `could't update product with id :${id}`);
        }
        (0, utils_1.successResponse)({ res, data, message: "successfully updated product" });
    }
    catch (error) {
        console.log(error.message);
        (0, utils_1.errorResponse)({ res });
    }
};
exports.updateProduct = updateProduct;
//# sourceMappingURL=updateProduct.controller.js.map