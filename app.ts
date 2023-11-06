"use strict";

import express from "express";
const app = express();

import { lastErrorHandler, notFound } from "./src/middleware";
import { bodyParser, morgan } from "./src/npmModules";
import { RootRoute } from "./src/router/root";
import { expressRateLimit } from "./src/utils";

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
app.use(notFound);
app.use(lastErrorHandler);

app.listen(2709, async () => {
    console.log(`Server is listening on port http://localhost:2709/`);
});
