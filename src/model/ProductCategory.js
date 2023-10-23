const { Schema, model } = require("mongoose");

const ProductCategorySchema = new Schema({
    name: {
        type: String,
        required: [true, "name is required"],
        trim: true,
        minlength: [3, "name can not be less than 3 characters"],
        maxlength: [25, "name can not be more than 25 characters"],
    },
    slug: {
        type: String,
        required: [true, "slug is required"],
        trim: true,
        minlength: [3, "slug can not be less than 3 characters"],
        maxlength: [25, "slug can not be more than 25 characters"],
    },
    icon: {
        type: String,
        required: true,
    },
});

const ProductCategoryModel = model("ProductCategory", ProductCategorySchema);
module.exports = ProductCategoryModel;
