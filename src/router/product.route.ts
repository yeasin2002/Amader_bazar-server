import express from "express";
import multer from "multer";
import { CreateDiskStorage, isTokenVerify } from "../middlewares";

import {
    ProvideRating,
    deleteProduct,
    getAllFeatureProduct,
    getAllProduct,
    getProductRatingsController,
    getSingleProductById,
    makeFeatureProduct,
    searchProduct,
} from "../controller/product.controller";

export const productRoute = express.Router();


//? Products
productRoute.route("/all").get(getAllProduct);
productRoute.post("/search", searchProduct);
productRoute.get("/feature", getAllFeatureProduct);
productRoute.route("/all/:id").get(getSingleProductById).delete(deleteProduct);

// ? Rating
productRoute.route("/rating").post(isTokenVerify, ProvideRating);
productRoute.get("/rating/:id", getProductRatingsController);

//? Features Products
productRoute.route("/feature/:id").put(makeFeatureProduct);
