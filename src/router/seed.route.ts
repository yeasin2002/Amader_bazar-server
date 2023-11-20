import express from "express";
import {
    experiment,
    removeAllUser,
    seedCategory,
    seedNewProduct,
    seedNewUser,
} from "../controller/seed.controller";
export const seedRoute = express.Router();

seedRoute.route("/user").post(seedNewUser).delete(removeAllUser);
seedRoute.route("/category").post(seedCategory);
seedRoute.route("/product").post(seedNewProduct);

seedRoute.get("/test", experiment);
