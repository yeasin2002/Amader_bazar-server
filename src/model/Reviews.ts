import { DataTypes } from "sequelize";
import { sequelizePG } from "../utils";

export const Review = sequelizePG.define("review", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUID,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
    },
    rated_product: {
        type: DataTypes.STRING,
    },
    rated_user: {
        type: DataTypes.STRING,
    },
    rating: {
        type: DataTypes.STRING,
    },
    desc: {
        type: DataTypes.STRING,
    },
});
