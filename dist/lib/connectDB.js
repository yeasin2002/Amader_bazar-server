"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const exportEnv_1 = require("../utils/exportEnv");
const connectDB = async (options = {}) => {
    try {
        if (mongoose_1.default.connection.readyState === 0) {
            mongoose_1.default.set("strictQuery", true);
            await mongoose_1.default.connect(exportEnv_1.mongoUrl, options);
            console.log("🚀 MongoDB Connected");
        }
    }
    catch (error) {
        console.log("MongoDB Connection Failed");
        console.log("💥", error?.message);
    }
};
exports.connectDB = connectDB;
//# sourceMappingURL=connectDB.js.map