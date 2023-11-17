import express from "express";
import {
    deleteUser,
    getAllUser,
    getSingleUser,
    updateUser,
} from "../controller/user.controller";
export const userRouter = express.Router();


userRouter.get("/", getAllUser);
userRouter
    .route("/:id")
    .get(getSingleUser)
    .delete(deleteUser)
    .patch(updateUser);
