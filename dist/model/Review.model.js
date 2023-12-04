"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductReview = void 0;
const mongoose_1 = require("mongoose");
const reviewSchema = new mongoose_1.Schema({
    Product: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
    },
    reviewers: {
        type: mongoose_1.Schema.Types.ObjectId,
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
        minlength: [10, "ReviewsNotes can not be less than 10 characters"],
        maxlength: [50, "ReviewsNotes can not be more than 50 characters"],
    },
}, {
    timestamps: true,
    autoIndex: true,
});
exports.ProductReview = (0, mongoose_1.model)("ProductReview", reviewSchema);
//# sourceMappingURL=Review.model.js.map