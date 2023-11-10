import { Sequelize } from "sequelize";

import { pgConnection } from "./exportEnv";

export const sequelizePG = new Sequelize(pgConnection, {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
});

export const connectDB = async () => {
    try {
        await sequelizePG.authenticate();
        console.log("🚀 Database connected successfully");
    } catch (error: any) {
        console.log("Unable to connect to the database");
        console.log("Error Message", error.message);
    }
};
