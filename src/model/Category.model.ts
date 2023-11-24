import { Schema, model } from "mongoose";
import { defaultCategoryImage } from "../utils/exportEnv";

const ProductCategorySchema = new Schema({
    name: {
        type: String,
        required: [true, "name is required"],
        trim: true,
        minlength: [2, "name can not be less than 2 characters"],
        maxlength: [25, "name can not be more than 25 characters"],
    },
    icon: {
        type: String,
        default: defaultCategoryImage,
    },
    subtitle: {
        type: String,
        trim: true,
        maxlength: [100, "name can not be more than 100 characters"],
    },
    products: {
        type: Schema.Types.ObjectId,
        ref: "Product",
    },
});

export const Category = model("Category", ProductCategorySchema);
/*

*/
