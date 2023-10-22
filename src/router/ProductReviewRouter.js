const express = require("express");
const ProductReviewRouter = express.Router();
const { getAllReview } = require(`../controller/ProductReviewController`);

ProductReviewRouter.get(`/`, getAllReview);

module.exports = ProductReviewRouter;
