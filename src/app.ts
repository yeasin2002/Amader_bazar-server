/*
 *  Title: Amader Bazar
 *  Description: An E-commerce website.
 * Author : Md Kawsar Islam Yeasin (@yeasin2002)
 * Contact: yeasin2002.netlify.app
 * Date: 09/10/2023
 * Updated : 10/11/2023 
                - Added TypeScript 
                - Migration into MongoDB From PostgreSQL ( Sequelize to Mongoose )
 */

//? npm packages imports
import bodyParser from "body-parser";
import compression from "compression";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import kleur from "kleur";

//?  Local Imports
import { PORT } from "../app.config";
import { rootRoute } from "./controller";
import { setIp } from "./middlewares";
import {
    authRoute,
    categoryRouter,
    dashboardRouter,
    extraRoute,
    seedRoute,
    userRouter,
} from "./router";
import { connectDB, reqLogger } from "./utils";

//?  npm packages in use
const app = express();
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(helmet());
app.use(cors({ credentials: true }));

// ? custom global middlewares
app.use(reqLogger);
app.use(setIp);


//? Routers
app.get("api/v1/", rootRoute);
app.use("api/v1/seed", seedRoute);
app.use("api/v1/category", categoryRouter);
app.use("api/v1/auth", authRoute);
app.use("api/v1/user", userRouter);
app.use("api/v1/dashboard", dashboardRouter);
app.use("api/v1/extra", extraRoute);

app.listen(PORT, async () => {
    await connectDB();
    console.log(
        "⚡",
        kleur
            .bgGreen()
            .white()
            .bold(`Server running on http://localhost:${PORT}`)
    );
});
