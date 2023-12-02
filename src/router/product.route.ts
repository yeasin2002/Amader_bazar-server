import express from "express";
import multer from "multer";
import { CreateDiskStorage, isTokenVerify } from "../middlewares";

import {
    PopularProduct,
    ProvideRating,
    createProduct,
    deleteProduct,
    discountedProduct,
    getAllFeatureProduct,
    getAllProduct,
    getProductRatingsController,
    getSingleProductById,
    makeFeatureProduct,
    searchProduct,
    updateProduct,
} from "../controller/product.controller";

export const productRoute = express.Router();
const upload = multer({ storage: CreateDiskStorage("products") });

//? Products
productRoute.get("/search", searchProduct); //! Bug: Not working as expected
productRoute.route("/feature").get(getAllFeatureProduct);

productRoute
    .route("/all")
    .get(getAllProduct)
    .post(upload.single("img"), createProduct);

productRoute
    .route("/all/:id")
    .get(getSingleProductById)
    .patch(updateProduct)
    .delete(deleteProduct);

// ? Rating
productRoute.route("/rating").post(isTokenVerify, ProvideRating);
productRoute.get("/rating/:id", getProductRatingsController);

//? Features Products
productRoute.route("/feature/:id").put(makeFeatureProduct);
productRoute.route("/popular").get(PopularProduct);
productRoute.route("/discounted").get(discountedProduct);

/*
-  All Product 

- Featured Product
- Most Popular/Sold Product 
- discounted Product
*/
