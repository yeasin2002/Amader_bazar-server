import { DataTypes } from "sequelize";
import { sequelizePG } from "../utils/connectDB";

export const DemoUser = sequelizePG.define(
    "DemoUser",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
        },
    },
    {
        timestamps: true,
        freezeTableName: true,
    }
);
