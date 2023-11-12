import { model, Schema } from "mongoose";

const ProductSchema = new Schema(
    {
        Product: {
            type: Schema.Types.ObjectId,
            ref: "Product",
        },
        User: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        rating: {
            type: Number,
            required: [true, "rating is required"],
        },
        desc: {
            type: String,
            required: [true, "Notes is required"],
            trim: true,
            minlength: [10, "ReviewsNotes can not be less than 10 characters"],
            maxlength: [50, "ReviewsNotes can not be more than 50 characters"],
        },
    },
    {
        timestamps: true,
        autoIndex: true,
    }
);

export const ProductReviewModel = model("ProductReview", ProductSchema);

