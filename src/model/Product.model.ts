import { model, Schema } from "mongoose";
import { defaultProductImage } from "../utils";

const ProductSchema = new Schema(
    {
        name: {
            type: String,
            require: true,
        },
        category: {
            type: String,
        },

        img: {
            type: String,
            default: defaultProductImage,
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

        ratedProduct: {
            type: Schema.Types.ObjectId,
            ref: "Product",
        },
        ratedUser: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    },
    {
        timestamps: true,
    }
);

export const Product = model("Product", ProductSchema);
