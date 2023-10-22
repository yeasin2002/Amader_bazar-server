const express = require("express");
const ProductCategoryRouter = express.Router();
const {
    getAllCategory,
    createCategory,
    updateCategory,
    deleteCategory,
} = require(`../controller/ProductCategoryController`);

ProductCategoryRouter.get(`/`, getAllCategory);
ProductCategoryRouter.post(`/`, createCategory);
ProductCategoryRouter.put(`/:id`, updateCategory);
ProductCategoryRouter.delete(`/:id`, deleteCategory);

module.exports = ProductCategoryRouter;
