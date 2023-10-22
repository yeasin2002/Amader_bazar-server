const express = require("express");
const ProductRoute = express.Router();

const { getAllProduct } = require("../controller/ProductControllers");

ProductRoute.get("/", getAllProduct);

module.exports = ProductRoute;
