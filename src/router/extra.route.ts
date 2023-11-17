import express from "express";
import { sendImg } from "../middlewares";

export const extraRoute = express.Router();

//  Image Sending Route
extraRoute.get("/user-img/:src", sendImg("users"));
extraRoute.get("/product-img/:src", sendImg("products"));
extraRoute.get("/category-img/:src", sendImg("categories"));
extraRoute.get("/pending-user-img/:src", sendImg("pendingUser"));

// http://localhost:1012/api/v1/extra/user-img/Yeasin2002
