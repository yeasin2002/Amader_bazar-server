"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderProduct = void 0;
const mongoose_1 = require("mongoose");
const OrderProductSchema = new mongoose_1.Schema({
    Products: {
        type: [
            {
                type: mongoose_1.Schema.Types.ObjectId,
                ref: "Product",
            },
        ],
    },
    User: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    desc: {
        type: String,
        required: [true, "Notes is required"],
        trim: true,
        minlength: [5, "Order  Notes can not be less than 5 characters"],
        maxlength: [50, "Order Notes can not be more than 50 characters"],
    },
    OrderStatus: {
        type: String,
        enum: ["Pending", "Processing", "Completed", "Cancelled"],
        default: "Pending",
    },
    OrderDateAndTime: {
        type: Date,
        required: true,
    },
    DeliveryDateAndTime: {
        type: Date,
        required: true,
    },
    OrderType: {
        type: String,
        enum: ["Delivery", "Pickup"],
        default: "Delivery",
    },
    OrderAmount: {
        type: Number,
        required: true,
    },
    OrderAddress: {
        type: String,
        required: true,
    },
    OrderPhone: {
        type: String,
        required: true,
    },
    OrderEmail: {
        type: String,
        required: true,
    },
    OrderPaymentMethod: {
        type: String,
        enum: ["cash", "card"],
        default: "card",
    },
    isPaid: {
        type: Boolean,
        default: false,
    },
    isRefunded: {
        type: Boolean,
        default: false,
    },
    isReviewed: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
});
exports.OrderProduct = (0, mongoose_1.model)("OrderProduct", OrderProductSchema);
//# sourceMappingURL=Order.model.js.map