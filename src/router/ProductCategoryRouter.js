const express = require("express");

const multer = require("multer");
const ProductCategoryRouter = express.Router();
const {
    getAllCategory,
    createCategory,
    updateCategory,
    deleteCategory,
    getSingleCategory,
    getCategoryImage,
} = require(`$controller/ProductCategoryController`);
const { storeImageInServer } = require("$utils/multerImageHandler");

const upload = multer({ storage: storeImageInServer("category") });

ProductCategoryRouter.route(`/`)
    .get(getAllCategory)
    .post(upload.single("icon"), createCategory);
ProductCategoryRouter.route(`/:id`)
    .get(getSingleCategory)
    .put(updateCategory)
    .delete(deleteCategory);

ProductCategoryRouter.get("/category_icon/:url", getCategoryImage);

module.exports = ProductCategoryRouter;
 