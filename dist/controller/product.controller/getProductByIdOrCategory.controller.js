"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchProduct = void 0;
const model_1 = require("../../model");
const utils_1 = require("../../utils");
const searchProduct = async (req, res) => {
    try {
        const { search = "", sort, category = [], minPrice = 0, maxPrice = 100000, } = req.body;
        // Create filter object
        const filter = {
            price: { $gte: minPrice, $lte: maxPrice },
            ...(search && { name: new RegExp(search, "i") }),
            ...(category.length > 0 && { category: { $in: category } }),
        };
        // Create sort object
        const sortObj = {};
        if (sort) {
            const sortParams = sort.split(",");
            sortParams.forEach((param) => {
                const [key, order] = param.split(":");
                sortObj[key] = order === "desc" ? -1 : 1;
            });
        }
        const products = await model_1.Product.find(filter).sort(sortObj);
        return (0, utils_1.successResponse)({
            res,
            data: products,
            message: `Found ${products.length}  Products`,
        });
    }
    catch (error) {
        return (0, utils_1.errorResponse)({ res });
    }
};
exports.searchProduct = searchProduct;
//# sourceMappingURL=getProductByIdOrCategory.controller.js.map