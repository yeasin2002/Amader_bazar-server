import express, { Express, Request, Response } from "express";
const app: Express = express();

import bodyParser from "body-parser";
import helmet from "helmet";
import { createPrettyLogger } from "./src/middleware/createPrettyLogger.js";
import { productRoute } from "./src/router/index.js";

import { connectDB } from "./src/utils/connectDB.js";

const PORT = process.env.PORT || 5000;
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(createPrettyLogger);

app.use("api/v1/product", productRoute);

app.get("/", (req: Request, res: Response) => {
    res.send("<h1>Hello from the TypeScript world!</h1>");
});

app.listen(PORT, async () => {
    console.log(`⚡ Server has started on http://localhost:${PORT} `);
    await connectDB();
});
