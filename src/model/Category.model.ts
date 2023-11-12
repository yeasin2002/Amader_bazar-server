import { Schema, model } from "mongoose";

const ProductCategorySchema = new Schema({
    name: {
        type: String,
        required: [true, "name is required"],
        trim: true,
        minlength: [3, "name can not be less than 3 characters"],
        maxlength: [25, "name can not be more than 25 characters"],
    },
    icon: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
        trim: true,
        maxlength: [20, "name can not be more than 25 characters"],
    },
    products: {
        type: Schema.Types.ObjectId,
        ref: "Product",
    },
});

export const Category = model("Category", ProductCategorySchema);

