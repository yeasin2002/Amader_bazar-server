import { DataTypes } from "sequelize";
import { sequelizePG } from "../utils";

export const category = sequelizePG.define("category", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUID,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
    },
    icon: {
        type: DataTypes.STRING,
    },
    desc: {
        type: DataTypes.STRING,
    },
    product_id: {
        type: DataTypes.STRING,
    },
});
