import bcrypt from "bcryptjs";
import { model, Schema } from "mongoose";
import { defaultImagePath } from "../utils";

const PendingUserSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, `name is required`],
            trim: true,
            minlength: [3, `name can not be less than 3 characters`],
            maxlength: [25, `name can not be more than 25 characters`],
        },
        email: {
            type: String,
            required: [true, `email is required`],
            trim: true,
            unique: true,
            validate: {
                validator: (v: string) => {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    return emailRegex.test(v);
                },
                message: `Please enter a valid email`,
            },
        },
        password: {
            type: String,
            required: [true, `Password is required`],
            minlength: [6, `password can not be less than 6 characters`],
            set: (value: any) => bcrypt.hashSync(value, bcrypt.genSaltSync(10)),
        },
        avatar: {
            type: String,
            default: defaultImagePath,
        },
        address: {
            type: String,
        },
        phone: {
            type: String,
            required: [true, `phone number is required`],
        },
        token: {
            type: String,
            required: [true, `token is required`],
        },
        createdAt: { type: Date, expires: 3600, default: Date.now },
    },
    {
        timestamps: true,
        autoIndex: true,
    }
);

export const PendingUser = model(`PendingUser`, PendingUserSchema);
