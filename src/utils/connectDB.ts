import chalk from "chalk";
import { Sequelize } from "sequelize";
import { pgConnection } from "./exportEnv.js";

const sequelize = new Sequelize(pgConnection, {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
});

export const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log(
            chalk.bgGreen.white.bold("🚀 Database connected successfully!")
        );
    } catch (error: any) {
        console.log(chalk.red.blue.bold("Unable to connect to the database:"));
        console.log(chalk.bgRed("Error Message"), error.message);
    }
};
