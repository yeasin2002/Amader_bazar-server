"use strict";
// require("./alias");

import express from "express";
const app = express();

import { LastErrorHandler, NotFound } from "$middleware";
import { connectDB, expressRateLimit } from "$src/utils";
import { bodyParser, morgan } from "./src/npmModules";

import { RootRoute } from "$router/root/RootRoute";

//! app in use
app.use(express.static(`public`));
app.use(morgan(`dev`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressRateLimit);

//! Router
// app.use(`/dashboard`, dashboardRouter);
// app.use(`/seed`, seedRouter);

// app.use(`/user`, userRouter);
// app.use(`/auth`, authRoute);

// app.use(`/products`, ProductRoute);
// app.use(`/products-category`, ProductCategoryRouter);
// app.use(`/products-review`, ProductReviewRouter);

// app.use(`/extra`, extraRoute);

app.get(`/`, RootRoute);
app.use(NotFound);
app.use(LastErrorHandler);

app.listen(2709, async () => {
    console.log(`Server is listening on port http://localhost:2709/`);
    await connectDB();
});
