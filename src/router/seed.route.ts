import express from "express";
import multer from "multer";
export const seedRoute = express.Router();

import {
    experiment,
    experimentPost,
    removeAllUser,
    seedCategory,
    seedNewProduct,
    seedNewUser,
} from "../controller/seed.controller";
import { CreateDiskStorage } from "../middlewares";
const upload = multer({ storage: CreateDiskStorage("experiment") });

seedRoute.route("/user").post(seedNewUser).delete(removeAllUser);
seedRoute.route("/category").post(seedCategory);
seedRoute.route("/product").post(seedNewProduct);

seedRoute.get("/test", experiment);
seedRoute.post("/test", upload.single("img"), experimentPost);
