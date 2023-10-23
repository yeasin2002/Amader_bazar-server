const express = require("express");
const ProductRoute = express.Router();

const { addProductSchema } = require("../validationSchema/products");
const { validationRunner } = require("../middleware");
const {
    getAllProduct,
    addProduct,
    updateProduct,
    deleteProduct,
    getSingleProduct,
} = require("../controller/ProductControllers");

ProductRoute.route("/")
    .get(getAllProduct)
    .post(addProductSchema, validationRunner, addProduct)
    .patch(updateProduct)
    .delete(deleteProduct);

ProductRoute.get("/:id", getSingleProduct);

module.exports = ProductRoute;


/*
An E-commerce app that has a menu on top, a Hero section that has a carousal 
then it has  section that will show the service that the company provides, 
then a list of all category and after that  some product that the company sells, it includes product name , price and discount also a button to add to cart,
then a footer that has the company's address and social media links.
besides it has a menu  for mobile devices that will show all the category 
*/