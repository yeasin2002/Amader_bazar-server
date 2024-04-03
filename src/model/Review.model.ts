import { model, Schema } from "mongoose";

const reviewSchema = new Schema(
    {
        Product: {
            type: Schema.Types.ObjectId,
            ref: "Product",
            required: true,
        },
        reviewers: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        rating: {
            type: Number,
            required: [true, "rating is required"],
        },
        desc: {
            type: String,
            required: [true, "Notes is required"],
            trim: true,
        },
    },
    {
        timestamps: true,
        autoIndex: true,
    }
);

export const ProductReview = model("ProductReview", reviewSchema);
