import { DataTypes } from "sequelize";
import { sequelizePG } from "../utils";

export const Product = sequelizePG.define("product", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUID,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
    },
    img: {
        type: DataTypes.STRING,
    },
    category: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
    },
    brand: {
        type: DataTypes.STRING,
    },
    discount: {
        type: DataTypes.STRING,
    },
    deliveryType: {
        type: DataTypes.STRING,
    },
    isWarrantied: {
        type: DataTypes.STRING,
    },
    ReturnDays: {
        type: DataTypes.STRING,
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
        type: DataTypes.STRING,
    },
    totalSell: {
        type: DataTypes.STRING,
    },
    availableQuantity: {
        type: DataTypes.STRING,
    },
});
