const { model, Schema } = require("mongoose");
const bcrypt = require("bcrypt");
const { defaultImagePath } = require("../utils/exportEnv");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
      trim: true,
      minlength: [3, "name can not be less than 3 characters"],
      maxlength: [25, "name can not be more than 25 characters"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
      trim: true,
      unique: true,
      lowercase: true,
      validate: {
        validator: (v) => {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return emailRegex.test(v);
        },
        message: "Please enter a valid email",
      },
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "password can not be less than 6 characters"],
      maxlength: [25, "name can not be more than 25 characters"],
      set: (value) => bcrypt.hashSync(value, bcrypt.genSaltSync(10)),
    },
    image: {
      type: String,
      default: defaultImagePath,
    },
    address: {
      type: String,
    },
    phone: {
      type: String,
      required: [true, "phone number is required"],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isBanned: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const userModel = model("User", userSchema);
module.exports = userModel;
