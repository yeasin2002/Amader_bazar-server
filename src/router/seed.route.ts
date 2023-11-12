import express from "express";
import {
    Test,
    removeAllUser,
    seedNewProduct,
    seedNewUser,
} from "../controller/seed.controller";
export const seedRoute = express.Router();

seedRoute.get("/test", Test);

seedRoute.route("/user").post(seedNewUser).delete(removeAllUser);
seedRoute.route("/product").post(seedNewProduct);
