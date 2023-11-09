import { Sequelize } from "sequelize";
import { prettyLogger } from "./createPrettyLogger.js";
import { pgConnection } from "./exportEnv.js";

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
         prettyLogger.success("🚀 Database connected successfully");
     } catch (error: any) {
         prettyLogger.error("Unable to connect to the database");
         prettyLogger.error("Error Message", error.message);
     }
 };
