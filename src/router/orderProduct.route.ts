import express from "express";
import { getAllOrder, putAnOrder } from "../controller/order.controller";
import { isTokenVerify } from "../middlewares";
    
export const orderProductRouter = express.Router();

orderProductRouter
    .route("/")
    .get(isTokenVerify, getAllOrder)
    .post(isTokenVerify, putAnOrder);
