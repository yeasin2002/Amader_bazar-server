import { DataTypes } from "sequelize";
import { sequelizePG } from "../utils";

export const Product = sequelizePG.define(
    "product",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUID,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        img: {
            type: DataTypes.STRING,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
        },
        brand: {
            type: DataTypes.STRING,
        },
        discount: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false,
        },
        deliveryType: {
            type: DataTypes.ENUM,
            values: ["cash", "paid"],
        },
        isWarrantied: {
            type: DataTypes.STRING,
            defaultValue: false,
        },
        ReturnDays: {
            type: DataTypes.STRING,
            defaultValue: 0,
            allowNull: false,
        },
        sizes: {
            type: DataTypes.STRING,
        },
        colors: {
            type: DataTypes.STRING,
        },
        ProductFor: {
            type: DataTypes.STRING,
        },
        isFeatured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false,
        },
        totalSell: {
            type: DataTypes.STRING,
            defaultValue: 0,
        },
        availableQuantity: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false,
        },
    },
    {
        timestamps: true,
        updatedAt: true,
    }
);
