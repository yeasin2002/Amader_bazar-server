import chalk from "chalk";
import mongoose from "mongoose";
import { mongoConnectionString } from "./exportEnv.ts";

const connectDB = async () => {
    try {
        await mongoose.connect(mongoConnectionString);
        console.log(chalk.bgGreen.white.bold(`MongoDB Connection Successful`));
    } catch (error: any) {
        console.log(chalk.bgRed.white.bold(`MongoDB Connection Failed`));
        console.log(chalk.red(error.message));
    }
};

export default connectDB;
