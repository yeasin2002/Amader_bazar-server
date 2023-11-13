import express from "express";
export const productRoute = express.Router();

import {
    PopularProduct,
    createProduct,
    deleteProduct,
    getAllFeatureProduct,
    getAllProduct,
    getSingleProduct,
    updateProduct,
} from "../controller/product.controller";

productRoute.route("/").get(getAllProduct).post(createProduct);
productRoute
    .route("/:id")
    .get(getSingleProduct)
    .put(updateProduct)
    .delete(deleteProduct);

productRoute.get("/feature", getAllFeatureProduct);
productRoute.get("/popular", PopularProduct);
