"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = void 0;
const mongoose_1 = require("mongoose");
const ContactSchema = new mongoose_1.Schema({
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
            validator: (v) => {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(v);
            },
            message: `Please enter a valid email`,
        },
    },
}, {
    timestamps: true,
    autoIndex: true,
});
exports.Contact = (0, mongoose_1.model)(`Contact`, ContactSchema);
//# sourceMappingURL=Contact.model.js.map