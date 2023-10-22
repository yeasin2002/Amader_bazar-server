const { Schema, model } = require("mongoose");

const ProductSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "name is required"],
            trim: true,
            minlength: [3, "name can not be less than 3 characters"],
            maxlength: [25, "name can not be more than 25 characters"],
        },
        category: {
            type: String,
            required: [true, "category is required"],
            minlength: [3, "category can not be less than 3 characters"],
            maxlength: [25, "category can not be more than 25 characters"],
            // lowercase: [true, "category must be lowercase"],
        },
        description: {
            type: String,
        },
        brand: {
            type: String,
            required: [true, "brand is required"],
            minlength: [2, "brand can not be less than 3 characters"],
            maxlength: [25, "brand can not be more than 25 characters"],
        },
        discount: {
            type: Number,
            default: 0,
            min: [0, "discount can not be less than 0"],
            max: [100, "discount can not be more than 100 (%)"],
        },
        deliveryType: {
            type: String,
            enum: ["cash ", "card"],
            default: "cash",
        },
        warranty: {
            type: Boolean,
            default: false,
        },
        ReturnDays: {
            type: Number,
            default: 0,
        },
        sizes: {
            type: String,
            enum: ["S", "M", "L", "XL", "XXL"],
        },
        colors: {
            type: String,
        },
        ProductFor: {
            type: String,
            enum: ["man", "women"],
        },
    },
    {
        timestamps: true,
    },
);

const ProductModel = model("Product", ProductSchema);
module.exports = ProductModel;
