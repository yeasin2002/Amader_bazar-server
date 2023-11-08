import { Sequelize } from "sequelize";
import { pgPassword } from "src/utils/exportEnv.js";

const primary_ipv4 = "<droplet_pg1_ipv4>";
const standby_ipv4 = "<droplet_pg2_ipv4>";

// new Sequelize(database, username, password)
const sequelize = new Sequelize("postgres", "postgres", pgPassword, {
    dialect: "postgres",
    port: 5432,
    replication: {
        read: [
            { host: standby_ipv4 },
            { host: primary_ipv4 },
            // witness node has no data, only metadata
        ],
        write: { host: primary_ipv4 },
    },
    pool: {
        max: 10,
        idle: 30000,
    },
});

// connect to DB
export async function connectDB() {
    console.log("Checking database connection...");
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
        process.exit(1);
    }
}
