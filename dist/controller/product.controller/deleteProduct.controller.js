"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = void 0;
const model_1 = require("../../model");
const utils_1 = require("../../utils");
const deleteProduct = async (req, res) => {
    try {
        const data = await model_1.Product.findByIdAndDelete(req.params.id);
        if (!data) {
            return (0, utils_1.createPrettyError)(404, "Unable to delete product");
        }
        (0, utils_1.successResponse)({ res, data, message: "successfully deleted product" });
    }
    catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
            (0, utils_1.errorResponse)({ res, message: error.message });
        }
        (0, utils_1.errorResponse)({ res });
    }
};
exports.deleteProduct = deleteProduct;
//# sourceMappingURL=deleteProduct.controller.js.map