const express = require("express");
const { getAllProduct } = require("../controller/ProductControllers");
const ProductRoute = express.Router();

ProductRoute.get("/", getAllProduct);

module.exports = ProductRoute;
