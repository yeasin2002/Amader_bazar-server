import express from "express";
import { sendImg } from "../middlewares";

export const extraRoute = express.Router();

const userImg = sendImg("users");
const productImg = sendImg("products");
const categoryImg = sendImg("categories");

extraRoute.get("/user-img/:src", userImg);
extraRoute.get("/product-img/:src", productImg);
extraRoute.get("/category-img/:src", categoryImg);

// http://localhost:1012/api/v1/extra/user-img/Yeasin2002
