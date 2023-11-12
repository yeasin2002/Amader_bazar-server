import express from "express";
import {
    removeAllUser,
    seedNewProduct,
    seedNewUser,
} from "../controller/seed.controller";
export const seedRoute = express.Router();

seedRoute.route("/user").post(seedNewUser).delete(removeAllUser);
seedRoute.route("/product").post(seedNewProduct);