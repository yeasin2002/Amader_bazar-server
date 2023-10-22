const express = require("express");
const ProductCategoryRouter = express.Router();
const { getAllCategory } = require(`../controller/ProductCategoryController`);

ProductCategoryRouter.get(`/`, getAllCategory);

module.exports = ProductCategoryRouter;
