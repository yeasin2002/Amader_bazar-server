import { DataTypes } from "sequelize";
import { sequelizePG } from "../utils";

export const User = sequelizePG.define("user", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUID,
        primaryKey: true,
    },
    email: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
    },
    avatar: {
        type: DataTypes.STRING,
    },
    address: {
        type: DataTypes.STRING,
    },
    phone: {
        type: DataTypes.STRING,
    },
    isAdmin: {
        type: DataTypes.STRING,
    },
    isBanned: {
        type: DataTypes.STRING,
    },
    ip: {
        type: DataTypes.STRING,
    },
});
