"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeFeatureProduct = void 0;
const model_1 = require("../../model");
const utils_1 = require("../../utils");
const makeFeatureProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await model_1.Product.findOneAndUpdate({ id }, { $set: { isFeatured: true } }, { new: true });
        if (!data)
            (0, utils_1.createPrettyError)(404, "Unable to get featured product");
        (0, utils_1.successResponse)({
            res,
            data,
            message: "successfully got Featured product",
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
exports.makeFeatureProduct = makeFeatureProduct;
//# sourceMappingURL=makeFeatureProduct.controller.js.map