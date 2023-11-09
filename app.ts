import express from "express";
const app = express();

import bodyParser from "body-parser";
import helmet from "helmet";
import { reqLogger } from "./src/middleware/reqLogger.js";
import { productRoute } from "./src/router/index.js";

import { PORT } from "./app.config.js";
import { RootRoute } from "./src/controller/extra.controller/Root.route.js";
import { defaultErrorHandler } from "./src/middleware/defaultErrorHandler.js";
import { notFound } from "./src/middleware/notFound.js";
import { DemoUser } from "./src/model/User.model.js";
import { seed } from "./src/router/Seed.route.js";
import { connectDB } from "./src/utils/connectDB.js";

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(reqLogger);

//? DB connection
DemoUser.sync({ alter: true });

app.get("/", RootRoute);

app.use("/product", productRoute);
app.use("/seed", seed);

app.use(notFound);
app.use(defaultErrorHandler);

app.listen(PORT, async () => {
    console.log(`⚡ Server has started on http://localhost:${PORT} `);
    await connectDB();
});
