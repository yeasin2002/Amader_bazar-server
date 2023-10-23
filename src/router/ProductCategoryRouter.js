const express = require("express");
// const { decryptToken, isAdmin } = require("$middleware");

const ProductCategoryRouter = express.Router();
const {
    getAllCategory,
    createCategory,
    updateCategory,
    deleteCategory,
} = require(`$controller/ProductCategoryController`);

ProductCategoryRouter.route(`/`).get(getAllCategory).post(createCategory);
ProductCategoryRouter.route(`/:id`).get(updateCategory).delete(deleteCategory);

module.exports = ProductCategoryRouter;
