import { model, Schema } from "mongoose";

const ProductSchema = new Schema(
    {
        category: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            require: true,
        },
        img: {
            type: String,
            required: [true, "Image is required"],
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
        },
        desc: {
            type: String,
            required: [true, "Description is required"],
            trim: true,
            minlength: [10, "ReviewsNotes can not be less than 10 characters"],
            maxlength: [50, "ReviewsNotes can not be more than 50 characters"],
        },
        size: {
            type: String,
            required: [true, "size is required"],
            enum: ["S", "M", "L", "XL", "XXL"],
        },
        color: {
            type: String,
            match: [
                /^#(?:[0-9a-fA-F]{3}){1,2}$/,
                "Invalid color format. Must be a hex color.",
            ],
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
