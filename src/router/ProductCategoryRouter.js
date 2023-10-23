const express = require("express");
const path = require("path");
const multer = require("multer");
const { createPrettySlug } = require("$utils");
const ProductCategoryRouter = express.Router();
const {
    getAllCategory,
    createCategory,
    updateCategory,
    deleteCategory,
    getSingleCategory,
} = require(`$controller/ProductCategoryController`);

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        return cb(null, path.join(process.cwd(), "uploads/category"));
    },
    filename: function (req, file, cb) {
        const GeneratedFileName = `${Date.now()}-${createPrettySlug(
            file.originalname
        )}`;
        return cb(null, GeneratedFileName);
    },
});
const upload = multer({ storage });

ProductCategoryRouter.route(`/`)
    .get(getAllCategory)
    .post(upload.single("icon"), createCategory);
ProductCategoryRouter.route(`/:id`)
    .get(getSingleCategory)
    .put(updateCategory)
    .delete(deleteCategory);

module.exports = ProductCategoryRouter;
