import express from "express";
import {
    getAllOrderThatPlacedByUser,
    putAnOrder,
} from "../controller/order.controller";
import { isTokenVerify } from "../middlewares";

export const orderProductRouter = express.Router();

orderProductRouter
    .route("/")
    .get(isTokenVerify, getAllOrderThatPlacedByUser)
    .post(isTokenVerify, putAnOrder);
