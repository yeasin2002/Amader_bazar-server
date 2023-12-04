"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const utils_1 = require("../utils");
const ProductSchema = new mongoose_1.Schema({
    name: {
        type: String,
        require: true,
    },
    category: {
        type: String,
    },
    img: {
        type: String,
        default: utils_1.defaultProductImage,
    },
    discount: {
        type: Number,
        default: 0,
        min: 0,
        max: 100,
    },
    price: {
        type: Number,
        required: [true, "price is required"],
        min: [0, "price can not be less than 0"],
    },
    desc: {
        type: String,
        trim: true,
        // minlength: [10, "desc can not be less than 10 characters"],
        maxlength: [100, "desc can not be more than 100 characters"],
        default: "",
    },
    size: {
        type: String,
        default: "NA",
        enum: [
            "S",
            "M",
            "L",
            "XL",
            "XXL",
            "2XL",
            "3XL",
            "4XL",
            "5XL",
            "NA",
        ],
    },
    color: {
        type: String,
        match: [
            /^#(?:[0-9a-fA-F]{3}){1,2}$/,
            "Invalid color format. Must be a hex color.",
        ],
        default: "",
    },
    isFeature: {
        type: Boolean,
        default: false,
    },
    quantity: {
        type: Number,
        default: 0,
    },
    totalSold: {
        type: Number,
        default: 0,
    },
    rating: [
        {
            userId: {
                type: mongoose_1.Schema.Types.ObjectId,
                ref: "User",
            },
            rating: {
                type: Number,
                min: 1,
                max: 5,
            },
        },
    ],
}, {
    timestamps: true,
});
exports.Product = (0, mongoose_1.model)("Product", ProductSchema);
//# sourceMappingURL=Product.model.js.map