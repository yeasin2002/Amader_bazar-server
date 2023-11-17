import express from "express";
import { sendImg } from "../middlewares";

export const extraRoute = express.Router();

const userImg = sendImg("users");
extraRoute.get("/user-img/:src", userImg);
extraRoute.get("/product-img/:src", userImg);
extraRoute.get("/category-img/:src", userImg);

// http://localhost:1012/api/v1/extra/user-img/Yeasin2002   

