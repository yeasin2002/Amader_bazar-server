"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const mongoose_1 = require("mongoose");
const exportEnv_1 = require("../utils/exportEnv");
const ProductCategorySchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "name is required"],
        trim: true,
        minlength: [2, "name can not be less than 2 characters"],
        maxlength: [25, "name can not be more than 25 characters"],
    },
    icon: {
        type: String,
        default: exportEnv_1.defaultCategoryImage,
    },
    subtitle: {
        type: String,
        trim: true,
        maxlength: [100, "name can not be more than 100 characters"],
    },
    products: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Product",
    },
});
exports.Category = (0, mongoose_1.model)("Category", ProductCategorySchema);
/*

*/
//# sourceMappingURL=Category.model.js.map