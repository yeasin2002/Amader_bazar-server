/*
 *  Title: Amader Bazar
 *  Description: An E-commerce website.
 * Author : Md Kawsar Islam Yeasin (@yeasin2002)
 * Contact: yeasin2002.netlify.app
 * Date: 09/10/2023
 * Updated : 10/11/2023 
                ?- Added TypeScript 
                ?- Migration into MongoDB From PostgreSQL ( Sequelize to Mongoose )
 */

//? npm packages imports
import bodyParser from "body-parser";
import compression from "compression";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import swaggerUi from "swagger-ui-express";

//?  Local Imports

import { rootRoute } from "./controller";
import { connectDB, limiter, swaggerOptions } from "./lib";
import {
    defaultErrorHandler,
    isTokenVerify,
    notFound,
    setIp,
} from "./middlewares";
import { Port, logSquare, reqLogger } from "./utils";

import {
    authRoute,
    categoryRouter,
    dashboardRouter,
    extraRoute,
    orderProductRouter,
    productRoute,
    seedRoute,
    userRouter,
} from "./router";

import swaggerJsDoc from "swagger-jsdoc";
const swaggerDocs = swaggerJsDoc(swaggerOptions);

//?  npm packages in use
export const app = express();
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet());
app.use(
    cors({
        origin: [
            "https://amaderbazar.netlify.app",
            "https://amader-bazar.vercel.app",
            "http://localhost:3000",
        ],
    })
);

// ? custom global middlewares
app.use(setIp);
app.use(reqLogger);
app.use(limiter);

//? Routers
app.get("/", rootRoute);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use("/api/v1/seed", seedRoute);
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/category", categoryRouter);
app.use("/api/v1/product", productRoute);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/order", orderProductRouter);
app.use("/api/v1/dashboard", dashboardRouter);
app.use("/api/v1/extra", extraRoute);

//? 404 not found And default error Handling
app.use(notFound);
app.use(defaultErrorHandler);

app.listen(Port, async () => {
    logSquare.success(
        "⚡",
        `Server is running on port http://localhost:${Port}`
    );
    await connectDB();
});
