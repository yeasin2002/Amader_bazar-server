import express from "express";
import {
    CollectContactInfo,
    weeklyNewsletterConfirm,
} from "../controller/extra.controller";
import { sendImg } from "../middlewares";
export const extraRoute = express.Router();

extraRoute.post("/newsletter", weeklyNewsletterConfirm);
extraRoute.post("/contact", CollectContactInfo);

//  Image Sending Route
extraRoute.get("/user-img/:src", sendImg("users"));
extraRoute.get("/product-img/:src", sendImg("products"));
extraRoute.get("/category-img/:src", sendImg("categories"));
extraRoute.get("/pending-user-img/:src", sendImg("pendingUser"));
extraRoute.get("/experiment-user-img/:src", sendImg("experiment"));
