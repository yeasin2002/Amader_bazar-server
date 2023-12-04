"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSingleProductById = void 0;
const model_1 = require("../../model");
const utils_1 = require("../../utils");
const getSingleProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await model_1.Product.findById(id).select("-__v");
        if (!data) {
            console.log("Next function called");
            return (0, utils_1.createPrettyError)(404, "Product not found");
        }
        (0, utils_1.successResponse)({ res, data, message: "successfully got  product" });
    }
    catch (error) {
        console.log("error", error?.message);
        (0, utils_1.errorResponse)({ res, message: error.message });
    }
};
exports.getSingleProductById = getSingleProductById;
//# sourceMappingURL=getSingleProductById.controller.js.map