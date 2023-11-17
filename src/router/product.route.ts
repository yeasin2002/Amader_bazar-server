import express from "express";
export const productRoute = express.Router();

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

// Products
productRoute.route("/").get(getAllProduct).post(createProduct);
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

