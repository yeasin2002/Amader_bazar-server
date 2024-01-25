import express from "express";
import multer from "multer";
import {
    UsrInfo,
    deleteUser,
    getAllUser,
    getSingleUser,
    updateUser,
    updateUserAvatar,
} from "../controller/user.controller";
import { CreateDiskStorage, isTokenVerify } from "../middlewares";
export const userRouter = express.Router();

const upload = multer({ storage: CreateDiskStorage("users") });

userRouter.get("/", getAllUser);
userRouter.get("/info", isTokenVerify, UsrInfo);
userRouter.put(
    "/change-avatar",
    upload.single("avatar"),
    isTokenVerify,
    updateUserAvatar
);

userRouter
    .route("/:id")
    .get(getSingleUser)
    .delete(deleteUser)
    .patch(updateUser);
