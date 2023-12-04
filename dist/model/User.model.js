"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const mongoose_1 = require("mongoose");
const utils_1 = require("../utils");
const UserSchema = new mongoose_1.Schema({
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
            validator: (v) => {
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
        set: (value) => bcrypt_1.default.hashSync(value, bcrypt_1.default.genSaltSync(10)),
    },
    avatar: {
        type: String,
        default: utils_1.defaultUseImage,
    },
    address: {
        type: String,
    },
    phone: {
        type: String,
        required: [true, `phone number is required`],
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    isBanned: {
        type: Boolean,
        default: false,
    },
    Products: {
        type: [
            {
                type: mongoose_1.Schema.Types.ObjectId,
                ref: `Product`,
            },
        ],
    },
}, {
    timestamps: true,
    autoIndex: true,
});
exports.User = (0, mongoose_1.model)(`User`, UserSchema);
//# sourceMappingURL=User.model.js.map