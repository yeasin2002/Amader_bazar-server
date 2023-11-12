import bodyParser from "body-parser";
import compression from "compression";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import kleur from "kleur";

//!  Local Imports 
import { PORT } from "../app.config";
import { rootRoute } from "./controller";
import { setIp } from "./middlewares";
import { authRoute, categoryRouter, dashboardRouter, extraRoute, seedRoute, userRouter } from "./router";
import { connectDB, reqLogger } from "./utils";

const app = express();
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(helmet());
app.use(reqLogger);
app.use(setIp);
app.use(
    cors({
        credentials: true,
    })
);

app.get("/", rootRoute);
app.use("/seed", seedRoute);
app.use("/category", categoryRouter);
app.use("/auth", authRoute);
app.use("/user", userRouter);
app.use("/dashboard", dashboardRouter);
app.use("/extra", extraRoute);



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
