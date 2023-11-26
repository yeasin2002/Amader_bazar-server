import { model, Schema } from "mongoose";

const ContactSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, `name is required`],
            trim: true,
            minlength: [3, `name can not be less than 3 characters`],
            maxlength: [25, `name can not be more than 25 characters`],
        },
        subject: {
            type: String,
            required: [true, `name is required`],
            trim: true,
            minlength: [3, `name can not be less than 3 characters`],
            maxlength: [25, `name can not be more than 25 characters`],
        },
        message: {
            type: String,
            required: [true, `name is required`],
            trim: true,
            minlength: [5, `name can not be less than 3 characters`],
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
    },
    {
        timestamps: true,
        autoIndex: true,
    }
);

export const Contact = model(`Contact`, ContactSchema);
