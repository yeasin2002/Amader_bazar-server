"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedNewProduct = void 0;
const data_1 = require("../../data");
const model_1 = require("../../model");
const responseHandler_1 = require("../../utils/responseHandler");
const seedNewProduct = async (req, res) => {
    try {
        const newUsers = await model_1.Product.insertMany(data_1.DemoProduct);
        (0, responseHandler_1.successResponse)({
            res,
            message: "Created Demo Data",
            data: newUsers,
        });
    }
    catch (error) {
        console.log(error.message);
        (0, responseHandler_1.errorResponse)({ res, message: error.message });
    }
};
exports.seedNewProduct = seedNewProduct;
//# sourceMappingURL=seedNewProduct.js.map