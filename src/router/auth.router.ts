import express from "express";
import {
    confirmForgotPassword,
    confirmRegistration,
    forgotPassword,
    logIn,
    newJWT_Token,
    registration,
    resetPassword,
} from "../controller/auth.controller";
// import { regSchema, validationRunner } from "../reqSchema";
export const authRoute = express.Router();

// log in
authRoute.post("/register", registration);
authRoute.post("/confirm-registration", confirmRegistration);
authRoute.post("/login", logIn);
authRoute.patch("/reset-password", resetPassword);
authRoute.get("/new-jwt-token", newJWT_Token);

//! Uncompleted
authRoute.post("/forgot-password", forgotPassword);
authRoute.post("/confirm-forgot-password", confirmForgotPassword);
