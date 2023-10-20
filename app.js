const express = require(`express`);
const app = express();

const { bodyParser, morgan } = require(`./src/npmModules`);
const { connectDB, expressRateLimit } = require(`./src/utils`);
const { LastErrorHandler, NotFound } = require(`./src/middleware`);
const { seedRouter, userRouter, authRoute, RootRoute } = require(
    `./src/router`,
);

//  app in use
app.use(express.static(`public`));
app.use(morgan(`dev`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressRateLimit);

// Router
app.use(`/seed`, seedRouter);
app.use(`/user`, userRouter);
app.use(`/auth`, authRoute);

app.get(`/`, RootRoute);
app.use(NotFound);
app.use(LastErrorHandler);

app.listen(2709, async () => {
    console.log(`Server is listening on port http://localhost:2709/`);
    await connectDB();
});
