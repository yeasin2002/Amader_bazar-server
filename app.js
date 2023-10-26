"use strict";
require("./alias");


const express = require(`express`);
const app = express();

const { bodyParser, morgan } = require(`$npmModules`);
const { customLogFormat } = require(`$lib`);
const { connectDB, expressRateLimit } = require(`$src/utils`);
const { LastErrorHandler, NotFound } = require(`$middleware`);

const {
    seedRouter,
    userRouter,
    authRoute,
    RootRoute,
    dashboardRouter,
    ProductRoute,
    ProductCategoryRouter,
    ProductReviewRouter,
    extraRoute,
} = require(`$router`);

//! app in use
app.use(express.static(`public`));
app.use(morgan(customLogFormat));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressRateLimit);

//! Router
app.use(`/dashboard`, dashboardRouter);
app.use(`/seed`, seedRouter);

app.use(`/user`, userRouter);
app.use(`/auth`, authRoute);

app.use(`/products`, ProductRoute);
app.use(`/products-category`, ProductCategoryRouter);
app.use(`/products-review`, ProductReviewRouter);

app.use(`/extra`, extraRoute);

app.get(`/`, RootRoute);
app.use(NotFound);
app.use(LastErrorHandler); 

app.listen(2709, async () => {
    console.log(`Server is listening on port http://localhost:2709/`);
    await connectDB();
});
