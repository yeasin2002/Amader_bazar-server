import express from "express";
import multer from "multer";
import { CreateDiskStorage } from "../middlewares";

import {
    PopularProduct,
    createProduct,
    deleteProduct,
    getAllFeatureProduct,
    getAllProduct,
    getSingleProduct,
    makeFeatureProduct,
    updateProduct,
} from "../controller/product.controller";

export const productRoute = express.Router();
const upload = multer({ storage: CreateDiskStorage("products") });

// Products
productRoute
    .route("/")
    .get(getAllProduct)
    .post(upload.single("img"), createProduct);
productRoute
    .route("/:id")
    .get(getSingleProduct)
    .patch(updateProduct)
    .delete(deleteProduct);

// Featured
productRoute.route("/feature").get(getAllFeatureProduct);
productRoute.route("/feature/:id").put(makeFeatureProduct);

//  Most popular
productRoute.route("/popular").get(PopularProduct);
