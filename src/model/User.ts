import { DataTypes } from "sequelize";
import { sequelizePG } from "../utils";

export const User = sequelizePG.define(
    "user",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUID,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        avatar: {
            type: DataTypes.STRING,
        },
        address: {
            type: DataTypes.STRING,
        },
        phone: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        isBanned: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    },
    {
        timestamps: true,
        updatedAt: true,
    }
);
