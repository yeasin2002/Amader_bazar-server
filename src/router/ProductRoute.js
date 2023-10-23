const express = require("express");
const ProductRoute = express.Router();

const { addProductSchema } = require("../validationSchema/products");
const { validationRunner } = require("../middleware");
const {
    getAllProduct,
    addProduct,
    updateProduct,
    deleteProduct,
} = require("../controller/ProductControllers");

ProductRoute.route("/")
    .get(getAllProduct)
    .post(addProductSchema, validationRunner, addProduct)
    .patch(updateProduct)
    .delete(deleteProduct);

module.exports = ProductRoute;
