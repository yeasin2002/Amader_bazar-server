import express from "express";
import {
    deleteUser,
    getAllUser,
    getSingleUser,
    updateUser,
    UsrInfo,
} from "../controller/user.controller";
import { isTokenVerify } from "../middlewares";
export const userRouter = express.Router();

userRouter.get("/", getAllUser);
userRouter.get("/info", isTokenVerify, UsrInfo);
userRouter
    .route("/:id")
    .get(getSingleUser)
    .delete(deleteUser)
    .patch(updateUser);
