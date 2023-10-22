const { Schema, model } = require("mongoose");

const ProductSchema = new Schema(
    {
        ratedProduct: {
            type: Schema.Types.ObjectId,
            ref: "Product",
        },
        ratedUser: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        rating: {
            type: Number,
            required: [true, "rating is required"],
        },
        ReviewsNotes: {
            type: String,
            required: [true, "Notes is required"],
            trim: true,
            minlength: [3, "ReviewsNotes can not be less than 3 characters"],
            maxlength: [25, "ReviewsNotes can not be more than 25 characters"],
        },
    },
    {
        timestamps: true,
    },
);

const ProductReviewModel = model("ProductReview", ProductSchema);
module.exports = ProductReviewModel;
