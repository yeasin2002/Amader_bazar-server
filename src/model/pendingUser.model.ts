import bcrypt from "bcryptjs";
import { model, Schema } from "mongoose";

const userSchema = new Schema(
    {
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
        phone: {
            type: String,
            required: [true, `phone number is required`],
        },
        password: {
            type: String,
            required: [true, `Password is required`],
            minlength: [6, `password can not be less than 6 characters`],
            set: (value: any) => bcrypt.hashSync(value, bcrypt.genSaltSync(10)),
        },
    },
    {
        timestamps: true,
        autoIndex: true,
    }
);

export const PendingUser = model(`PendingUser`, userSchema);
