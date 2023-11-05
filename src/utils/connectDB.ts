import { Sequelize } from "sequelize";

async function connectDB() {
    const sequelize = new Sequelize("database", "username", "password", {
        host: "localhost",
        dialect: "mysql",
    });

    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
        process.exit(1);
    }

    return sequelize;
}

export { connectDB };
