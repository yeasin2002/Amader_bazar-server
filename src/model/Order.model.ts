import { model, Schema } from "mongoose";

const OrderProductSchema = new Schema(
    {
        Products: [
            {
                Product: {
                    type: Schema.Types.ObjectId,
                    ref: "Product",
                    required: true,
                },
                Quantity: {
                    type: Number,
                    required: true,
                },
            },
        ],
        User: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        OrderStatus: {
            type: String,
            enum: ["Pending", "Processing", "Completed", "Cancelled"],
            default: "Pending",
        },

        TotalAmount: {
            type: Number,
            required: true,
        },
        OrderAddress: {
            type: String,
            required: true,
        },

        OrderPaymentMethod: {
            type: String,
            enum: ["cash", "card"],
            default: "cash",
        },
        OrderDateAndTime: {
            type: Date,
            default: Date.now,
        },
    },
    {
        timestamps: true,
    }
);

export const Order = model("Order", OrderProductSchema);
