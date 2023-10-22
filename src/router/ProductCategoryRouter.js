const express = require("express");
const ProductCategoryRouter = express.Router();
const { getAllCategory, createCategory } = require(
    `../controller/ProductCategoryController`,
);

ProductCategoryRouter.get(`/`, getAllCategory);
ProductCategoryRouter.post(`/create`, createCategory);

module.exports = ProductCategoryRouter;
